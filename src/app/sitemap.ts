import { MetadataRoute } from "next";
import { articles } from "@/content/articles";

const BASE_URL = "https://security-check-site.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const priorityMap: Record<string, number> = {
    "compare-saas": 0.9,
    "compare-telecom": 0.9,
    "compare-automobile": 0.85,
    "ssl-check-guide": 0.85,
    "security-header-check-guide": 0.85,
    "spf-check-guide": 0.85,
    "dkim-check-guide": 0.85,
    "what-is-https": 0.85,
    "what-is-dmarc": 0.8,
    "what-is-spf": 0.8,
    "what-is-csp": 0.8,
    "what-is-hsts": 0.8,
  };

  const blogEntries = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt ?? article.publishedAt),
    changeFrequency: "weekly" as const,
    priority: priorityMap[article.slug] ?? 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/site-map`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
