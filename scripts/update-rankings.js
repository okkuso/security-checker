#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const tls = require("tls");
const dns = require("dns");

const RANKINGS_PATH = path.join(__dirname, "..", "src", "data", "rankings.json");
const TIMEOUT_MS = 10000;
const DELAY_MS = 1500;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { signal: controller.signal, redirect: "follow" }).finally(() => clearTimeout(timer));
}

function checkSSL(hostname) {
  return new Promise((resolve) => {
    const socket = tls.connect(443, hostname, { servername: hostname, timeout: TIMEOUT_MS }, () => {
      const cert = socket.getPeerCertificate();
      socket.destroy();
      if (!cert || !cert.valid_to) { resolve(false); return; }
      resolve(new Date(cert.valid_to) > new Date());
    });
    socket.on("error", () => { socket.destroy(); resolve(false); });
    socket.on("timeout", () => { socket.destroy(); resolve(false); });
  });
}

function dnsLookupTxt(domain) {
  return new Promise((resolve) => {
    dns.resolveTxt(domain, (err, records) => resolve(err ? [] : records));
  });
}

async function checkDomain(hostname) {
  let score = 0;
  let headers = null;

  // 1. HTTPS (20pt)
  try {
    const res = await fetchWithTimeout(`https://${hostname}`, TIMEOUT_MS);
    headers = res.headers;
    score += 20;
  } catch {}

  // 2. SSL (10pt)
  try {
    if (await checkSSL(hostname)) score += 10;
  } catch {}

  // 3-8. Header checks
  const headerChecks = [
    ["strict-transport-security", 15],
    ["content-security-policy", 15],
    ["x-content-type-options", 5],
    ["x-frame-options", 5],
    ["referrer-policy", 5],
    ["permissions-policy", 5],
  ];
  for (const [key, pts] of headerChecks) {
    if (headers?.get(key)) score += pts;
  }

  // 9. SPF (10pt)
  const txtRecords = await dnsLookupTxt(hostname);
  const allTxt = txtRecords.map((r) => r.join(""));
  if (allTxt.some((t) => t.startsWith("v=spf1"))) score += 10;

  // 10. DMARC (10pt)
  const dmarcRecords = await dnsLookupTxt(`_dmarc.${hostname}`);
  const dmarcTxt = dmarcRecords.map((r) => r.join(""));
  if (dmarcTxt.some((t) => t.startsWith("v=DMARC1"))) score += 10;

  return score;
}

async function main() {
  const rankings = JSON.parse(fs.readFileSync(RANKINGS_PATH, "utf-8"));
  const results = [];
  let changed = 0;

  console.log(`Scanning ${rankings.length} domains...\n`);

  for (let i = 0; i < rankings.length; i++) {
    const entry = rankings[i];
    const domain = entry.name;
    process.stdout.write(`[${i + 1}/${rankings.length}] ${domain} ... `);

    try {
      const newScore = await checkDomain(domain);
      const oldScore = entry.score;
      results.push({ name: domain, score: newScore });
      if (newScore !== oldScore) {
        console.log(`${oldScore} → ${newScore}`);
        changed++;
      } else {
        console.log(`${newScore} (unchanged)`);
      }
    } catch (err) {
      console.log(`ERROR (keeping ${entry.score}): ${err.message}`);
      results.push({ name: domain, score: entry.score });
    }

    if (i < rankings.length - 1) await sleep(DELAY_MS);
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score);

  fs.writeFileSync(RANKINGS_PATH, JSON.stringify(results, null, 2) + "\n");
  console.log(`\nDone. ${changed} domains changed. rankings.json updated.`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
