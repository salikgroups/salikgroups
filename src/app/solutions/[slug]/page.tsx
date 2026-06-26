import { siteConfig } from "@/config/site";
import { Footer } from "@/components/layout/footer";
import { SiteShell } from "@/components/layout/site-shell";
import { SeoLandingPageView } from "@/components/pages/seo-landing-page";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllSeoPageSlugs, getSeoPageBySlug } from "@/lib/seo-pages";
import {
  buildSeoLandingMetadata,
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  getWebPageJsonLd,
} from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSeoPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);

  if (!page) {
    return { title: `${siteConfig.name} | Page Not Found`, robots: { index: false } };
  }

  return buildSeoLandingMetadata(page);
}

export default async function Page({ params }: SolutionPageProps) {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const path = `/solutions/${page.slug}`;
  const faqJsonLd = getFaqJsonLd(page.faqs);

  return (
    <SiteShell>
      <JsonLd
        data={[
          getWebPageJsonLd({
            name: page.metaTitle,
            description: page.metaDescription,
            path,
            image: page.ogImage,
          }),
          ...(faqJsonLd ? [faqJsonLd] : []),
          getBreadcrumbJsonLd([
            { name: siteConfig.name, path: "/" },
            { name: "Solutions", path: "/#services" },
            { name: page.headline, path },
          ]),
        ]}
      />
      <SeoLandingPageView page={page} />
      <Footer />
    </SiteShell>
  );
}
