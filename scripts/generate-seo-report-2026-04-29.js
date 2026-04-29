const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const keyFile = path.resolve(__dirname, '..', '.gcp-service-account.json');
const reportPath = path.resolve(__dirname, '..', 'reports', 'seo-daily-2026-04-29.json');
const previousPath = path.resolve(__dirname, '..', 'reports', 'seo-daily-2026-04-27.json');
const auth = new google.auth.GoogleAuth({
  keyFile,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
});

async function main() {
  const client = await auth.getClient();
  const webmasters = google.webmasters({ version: 'v3', auth: client });
  const siteUrl = 'sc-domain:security-check-site.net';
  const startDate = '2026-04-22';
  const endDate = '2026-04-28';

  const [summaryRes, pageRes, queryRes, sitemapsRes] = await Promise.all([
    webmasters.searchanalytics.query({ siteUrl, requestBody: { startDate, endDate, rowLimit: 1 } }),
    webmasters.searchanalytics.query({ siteUrl, requestBody: { startDate, endDate, dimensions: ['page'], rowLimit: 50 } }),
    webmasters.searchanalytics.query({ siteUrl, requestBody: { startDate, endDate, dimensions: ['query'], rowLimit: 50 } }),
    webmasters.sitemaps.list({ siteUrl }),
  ]);

  const summary = (summaryRes.data.rows || [])[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  const pages = (pageRes.data.rows || []).map((r) => ({
    page: r.keys?.[0],
    clicks: r.clicks || 0,
    impressions: r.impressions || 0,
    ctr: r.ctr || 0,
    position: r.position || 0,
  }));
  const queries = (queryRes.data.rows || []).map((r) => ({
    query: r.keys?.[0],
    clicks: r.clicks || 0,
    impressions: r.impressions || 0,
    ctr: r.ctr || 0,
    position: r.position || 0,
  }));

  const sm = (sitemapsRes.data.sitemap || []).find((x) => x.path?.includes('sitemap.xml'));
  const content = (sm?.contents || []).find((c) => c.type === 'web') || {};
  const previous = JSON.parse(fs.readFileSync(previousPath, 'utf8'));

  const report = {
    date: '2026-04-29',
    siteUrl,
    range: { startDate, endDate },
    summary: {
      impressions: summary.impressions || 0,
      clicks: summary.clicks || 0,
      ctr: summary.ctr || 0,
      position: summary.position || 0,
    },
    pages,
    queries,
    sitemap: {
      path: sm?.path,
      submitted: Number(content.submitted || 0),
      indexed: Number(content.indexed || 0),
      lastSubmitted: sm?.lastSubmitted || null,
      lastDownloaded: sm?.lastDownloaded || null,
      warnings: Number(sm?.warnings || 0),
      errors: Number(sm?.errors || 0),
    },
    comparison: {
      previousLogDate: previous.date,
      impressionsDelta: (summary.impressions || 0) - (previous.summary?.impressions || 0),
      clicksDelta: (summary.clicks || 0) - (previous.summary?.clicks || 0),
      ctrDelta: (summary.ctr || 0) - (previous.summary?.ctr || 0),
      positionDelta: (summary.position || 0) - (previous.summary?.position || 0),
      indexedDelta: Number(content.indexed || 0) - Number(previous.sitemap?.indexed || 0),
      lastDownloadedChanged: (sm?.lastDownloaded || null) !== (previous.sitemap?.lastDownloaded || null),
    },
    actions: [
      {
        type: 'title_description_refresh',
        target: '/blog/compare-saas',
        reason: '直近7日で唯一露出したページのため、タイトル先頭を「SaaSセキュリティ比較」に寄せ、比較対象企業名と導入前チェック要素を明示して検索意図一致を強化',
      },
      {
        type: 'content_refresh',
        target: '/blog/compare-saas',
        reason: '導入前チェック3項目、関連記事導線、FAQの整合性修正を追加し、順位11付近の再露出ページを優先改善',
      },
    ],
  };

  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(reportPath);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
