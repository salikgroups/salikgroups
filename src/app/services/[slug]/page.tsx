import { siteConfig } from "@/config/site";
import { Footer } from "@/components/layout/footer";
import { SiteShell } from "@/components/layout/site-shell";
import { ServiceDetailPage } from "@/components/pages/service-detail-page";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildServiceMetadata,
  getBreadcrumbJsonLd,
  getServiceJsonLd,
} from "@/lib/seo";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: `${siteConfig.name} | Service Not Found`, robots: { index: false } };
  }

  return buildServiceMetadata(service);
}

export default async function Page({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <SiteShell>
      <JsonLd
        data={[
          getServiceJsonLd(service),
          getBreadcrumbJsonLd([
            { name: siteConfig.name, path: "/" },
            { name: "Services", path: "/#services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <ServiceDetailPage service={service} />
      <Footer />
    </SiteShell>
  );
}
