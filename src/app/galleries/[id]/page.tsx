import { siteConfig } from "@/config/site";
import { Footer } from "@/components/layout/footer";
import { SiteShell } from "@/components/layout/site-shell";
import { GalleryDetailPage } from "@/components/pages/gallery-detail-page";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllGalleryIds, getGalleryById } from "@/lib/galleries";
import { getBreadcrumbJsonLd } from "@/lib/seo";
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

  return {
    title: `${showcase.title} | ${siteConfig.name}`,
    description: showcase.description,
    openGraph: {
      title: showcase.title,
      description: showcase.description,
      images: [{ url: showcase.images[0] }],
    },
  };
}

export default async function Page({ params }: GalleryPageProps) {
  const { id } = await params;
  const showcase = getGalleryById(id);

  if (!showcase) {
    notFound();
  }

  return (
    <SiteShell>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: siteConfig.name, path: "/" },
          { name: "Field work", path: "/#field-work" },
          { name: showcase.title, path: `/galleries/${showcase.id}` },
        ])}
      />
      <GalleryDetailPage showcase={showcase} />
      <Footer />
    </SiteShell>
  );
}
