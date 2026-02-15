import { MetadataRoute } from "next";
import { articles } from "@/content/articles";

const BASE_URL = "https://security-checker.vercel.app"; // TODO: 本番ドメイン決定後に変更

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
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
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
