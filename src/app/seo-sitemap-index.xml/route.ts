import { seoConfig } from "@/config/seo";
import { getDiscoverPageCount, getDiscoverSitemapChunkCount } from "@/lib/seo-matrix";

export async function GET() {
  const chunkCount = getDiscoverSitemapChunkCount();
  const pageCount = getDiscoverPageCount();
  const now = new Date().toISOString();

  const sitemaps = Array.from({ length: chunkCount }, (_, index) => `  <sitemap>
    <loc>${seoConfig.siteUrl}/seo-sitemap/${index}.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- ${pageCount} discover SEO pages across ${chunkCount} sitemap files -->
${sitemaps}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
