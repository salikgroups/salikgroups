import { seoLandingPages } from "@/content/seo-landing-pages";

export function getAllSeoPageSlugs() {
  return seoLandingPages.map((page) => page.slug);
}

export function getSeoPageBySlug(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug) ?? null;
}

export function getSeoPagePath(slug: string) {
  return `/solutions/${slug}`;
}
