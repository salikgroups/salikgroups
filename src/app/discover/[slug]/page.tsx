import { siteConfig } from "@/config/site";
import { Footer } from "@/components/layout/footer";
import { SiteShell } from "@/components/layout/site-shell";
import { DiscoverSeoPageView } from "@/components/pages/discover-seo-page";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildDiscoverMetadata,
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  getWebPageJsonLd,
} from "@/lib/seo";
import {
  getDiscoverPageBySlug,
  getDiscoverPath,
} from "@/lib/seo-matrix";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 604800;

type DiscoverPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: DiscoverPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getDiscoverPageBySlug(slug);

  if (!page) {
    return { title: `${siteConfig.name} | Page Not Found`, robots: { index: false } };
  }

  return buildDiscoverMetadata(page);
}

export default async function Page({ params }: DiscoverPageProps) {
  const { slug } = await params;
  const page = getDiscoverPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const path = getDiscoverPath(page.slug);
  const faqJsonLd = getFaqJsonLd(page.faqs);

  return (
    <SiteShell>
      <JsonLd
        data={[
          getWebPageJsonLd({
            name: page.metaTitle,
            description: page.metaDescription,
            path,
          }),
          ...(faqJsonLd ? [faqJsonLd] : []),
          getBreadcrumbJsonLd([
            { name: siteConfig.name, path: "/" },
            { name: "Discover", path: "/discover" },
            { name: page.city.name, path },
          ]),
        ]}
      />
      <DiscoverSeoPageView page={page} />
      <Footer />
    </SiteShell>
  );
}
