import { seoConfig } from "@/config/seo";
import { getAllGalleryIds } from "@/lib/galleries";
import { getAllProjectSlugs } from "@/lib/projects";
import { getAllServiceSlugs } from "@/lib/services";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = getAllServiceSlugs().map(
    (slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }),
  );

  const projectRoutes: MetadataRoute.Sitemap = getAllProjectSlugs().map(
    (slug) => ({
      url: `${baseUrl}/projects/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }),
  );

  const galleryRoutes: MetadataRoute.Sitemap = getAllGalleryIds().map(
    (id) => ({
      url: `${baseUrl}/galleries/${id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }),
  );

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...galleryRoutes];
}
