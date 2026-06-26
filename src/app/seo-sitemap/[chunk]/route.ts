import { seoConfig } from "@/config/seo";
import {
  getDiscoverPagesChunk,
  getDiscoverSitemapChunkCount,
} from "@/lib/seo-matrix";

type RouteContext = {
  params: Promise<{ chunk: string }>;
};

export async function generateStaticParams() {
  const count = getDiscoverSitemapChunkCount();
  return Array.from({ length: count }, (_, index) => ({
    chunk: String(index),
  }));
}

export async function GET(_request: Request, context: RouteContext) {
  const { chunk } = await context.params;
  const chunkIndex = Number.parseInt(chunk, 10);

  if (Number.isNaN(chunkIndex) || chunkIndex < 0 || chunkIndex >= getDiscoverSitemapChunkCount()) {
    return new Response("Not found", { status: 404 });
  }

  const pages = getDiscoverPagesChunk(chunkIndex);
  const now = new Date().toISOString();

  const urls = pages
    .map(
      (page) => `  <url>
    <loc>${seoConfig.siteUrl}/discover/${page.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.55</priority>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
