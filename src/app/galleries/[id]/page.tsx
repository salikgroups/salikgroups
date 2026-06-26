import { siteConfig } from "@/config/site";
import { Footer } from "@/components/layout/footer";
import { SiteShell } from "@/components/layout/site-shell";
import { GalleryDetailPage } from "@/components/pages/gallery-detail-page";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllGalleryIds, getGalleryById } from "@/lib/galleries";
import { buildGalleryMetadata, getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/seo";
import { getGallerySeoExtension } from "@/content/seo-extensions";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type GalleryPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getAllGalleryIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
  const { id } = await params;
  const showcase = getGalleryById(id);

  if (!showcase) {
    return { title: `${siteConfig.name} | Gallery Not Found`, robots: { index: false } };
  }

  return buildGalleryMetadata(showcase);
}

export default async function Page({ params }: GalleryPageProps) {
  const { id } = await params;
  const showcase = getGalleryById(id);

  if (!showcase) {
    notFound();
  }

  const extension = getGallerySeoExtension(showcase.id);
  const faqJsonLd = extension ? getFaqJsonLd(extension.faqs) : null;

  return (
    <SiteShell>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: siteConfig.name, path: "/" },
            { name: "Field work", path: "/#field-work" },
            { name: showcase.title, path: `/galleries/${showcase.id}` },
          ]),
          ...(faqJsonLd ? [faqJsonLd] : []),
        ]}
      />
      <GalleryDetailPage showcase={showcase} />
      <Footer />
    </SiteShell>
  );
}
