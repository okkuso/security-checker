import { MetadataRoute } from "next";

const BASE_URL = "https://security-check-site.net"; // TODO: 本番ドメイン決定後に変更

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
