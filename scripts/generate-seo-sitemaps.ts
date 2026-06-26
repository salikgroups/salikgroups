import fs from "node:fs";
import path from "node:path";
import { seoConfig } from "../src/config/seo";
import {
  getDiscoverSitemapChunkCount,
  getDiscoverSlugChunk,
} from "../src/lib/seo-matrix";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function buildChunkXml(chunkIndex: number) {
  const slugs = getDiscoverSlugChunk(chunkIndex);
  const now = new Date().toISOString();

  const urls = slugs
    .map(
      (slug) => `  <url>
    <loc>${escapeXml(`${seoConfig.siteUrl}/discover/${slug}`)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.55</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildIndexXml(chunkCount: number) {
  const now = new Date().toISOString();
  const sitemaps = Array.from({ length: chunkCount }, (_, index) => `  <sitemap>
    <loc>${seoConfig.siteUrl}/seo-sitemap/${index}.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps}
</sitemapindex>
`;
}

function main() {
  const publicDir = path.join(process.cwd(), "public");
  const sitemapDir = path.join(publicDir, "seo-sitemap");
  const chunkCount = getDiscoverSitemapChunkCount();

  fs.mkdirSync(sitemapDir, { recursive: true });

  for (let index = 0; index < chunkCount; index += 1) {
    const filePath = path.join(sitemapDir, `${index}.xml`);
    fs.writeFileSync(filePath, buildChunkXml(index), "utf8");
  }

  fs.writeFileSync(
    path.join(publicDir, "seo-sitemap-index.xml"),
    buildIndexXml(chunkCount),
    "utf8",
  );

  console.log(`Generated seo-sitemap-index.xml and ${chunkCount} chunk files in public/seo-sitemap/`);
}

main();
