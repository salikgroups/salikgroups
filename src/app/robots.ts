import { aiCrawlerUserAgents } from "@/config/ai-crawlers";
import { seoConfig } from "@/config/seo";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const sitemaps = [
    `${seoConfig.siteUrl}/sitemap.xml`,
    `${seoConfig.siteUrl}/seo-sitemap-index.xml`,
  ];

  const aiRules: MetadataRoute.Robots["rules"] = aiCrawlerUserAgents.map(
    (userAgent) => ({
      userAgent,
      allow: "/",
    }),
  );

  return {
    rules: [
      ...aiRules,
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: sitemaps,
    host: seoConfig.siteUrl,
  };
}
