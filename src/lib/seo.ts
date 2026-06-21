import { siteConfig } from "@/config/site";
import {
  globalKeywords,
  homepageSeo,
  seoConfig,
} from "@/config/seo";
import {
  legalSeoKeywords,
  projectSeoKeywords,
  serviceSeoKeywords,
} from "@/content/seo-keywords";
import type { Project, Service } from "@/types/content";
import type { Metadata } from "next";

function dedupeKeywords(keywords: string[]): string[] {
  const seen = new Set<string>();
  return keywords.filter((keyword) => {
    const key = keyword.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${seoConfig.siteUrl}${normalized}`;
}

export function absoluteAssetUrl(assetPath: string): string {
  const normalized = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${seoConfig.siteUrl}${encodeURI(normalized)}`;
}

function buildKeywords(extra: string[] = []): string[] {
  return dedupeKeywords([
    siteConfig.name,
    ...extra,
    ...globalKeywords,
  ]);
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = seoConfig.defaultOgImage,
  type = "website",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const mergedKeywords = buildKeywords(keywords);
  const imageUrl = ogImage.startsWith("http") ? ogImage : absoluteAssetUrl(ogImage);

  return {
    title,
    description,
    keywords: mergedKeywords,
    authors: [{ name: seoConfig.siteName, url: seoConfig.siteUrl }],
    creator: seoConfig.siteName,
    publisher: seoConfig.siteName,
    applicationName: seoConfig.siteName,
    category: "technology",
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      type,
      images: [
        {
          url: imageUrl,
          alt: `${seoConfig.siteName} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    other: {
      "geo.region": seoConfig.geo.region,
      "geo.placename": seoConfig.geo.placename,
      "geo.position": seoConfig.geo.position,
      ICBM: seoConfig.geo.position.replace(";", ", "),
    },
  };
}

export function buildHomeMetadata(): Metadata {
  return buildPageMetadata({
    title: homepageSeo.title,
    description: homepageSeo.description,
    path: "/",
    keywords: [...homepageSeo.keywords],
  });
}

export function buildServiceMetadata(service: Service): Metadata {
  const title = `${siteConfig.name} | ${service.title} — Lahore & Pakistan`;
  const description = `${service.metaDescription} Contact ${siteConfig.name} at ${siteConfig.contact.phone} for surveys, quotations and project delivery across Pakistan.`;
  const slugKeywords = serviceSeoKeywords[service.slug] ?? [];

  return buildPageMetadata({
    title,
    description,
    path: `/services/${service.slug}`,
    keywords: [
      ...slugKeywords,
      `${siteConfig.name} ${service.shortLabel}`,
      service.title,
      service.shortLabel,
      ...service.industries,
      ...service.capabilities.slice(0, 4),
    ],
    ogImage: service.image,
    type: "article",
  });
}

export function buildProjectMetadata(project: Project): Metadata {
  const title = `${siteConfig.name} | ${project.title} — Case Study Pakistan`;
  const description = `${project.metaDescription} Delivered by ${siteConfig.name} (${project.year}) in ${project.location}.`;
  const slugKeywords = projectSeoKeywords[project.slug] ?? [];

  return buildPageMetadata({
    title,
    description,
    path: `/projects/${project.slug}`,
    keywords: [
      ...slugKeywords,
      `${siteConfig.name} ${project.tag}`,
      project.title,
      project.location,
      project.client,
      ...project.highlights.slice(0, 4),
    ],
    ogImage: project.image,
    type: "article",
  });
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${seoConfig.siteUrl}/#organization`,
    name: seoConfig.siteName,
    alternateName: [...seoConfig.alternateNames],
    url: seoConfig.siteUrl,
    logo: absoluteAssetUrl(siteConfig.logoSrc),
    description: siteConfig.tagline,
    foundingDate: String(siteConfig.established),
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        contactType: "customer service",
        areaServed: "PK",
        availableLanguage: ["English", "Urdu"],
      },
    ],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seoConfig.siteUrl}/#website`,
    name: seoConfig.siteName,
    alternateName: [...seoConfig.alternateNames],
    url: seoConfig.siteUrl,
    description: homepageSeo.description,
    publisher: {
      "@id": `${seoConfig.siteUrl}/#organization`,
    },
    inLanguage: "en-PK",
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${seoConfig.siteUrl}/#localbusiness`,
    name: seoConfig.siteName,
    image: absoluteAssetUrl(siteConfig.logoSrc),
    url: seoConfig.siteUrl,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.5497,
      longitude: 74.3436,
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    parentOrganization: {
      "@id": `${seoConfig.siteUrl}/#organization`,
    },
  };
}

export function getServiceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${seoConfig.siteName} — ${service.title}`,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    image: service.image,
    provider: {
      "@id": `${seoConfig.siteUrl}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    serviceType: service.title,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: "Pakistan",
    },
  };
}

export function getProjectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${seoConfig.siteName} — ${project.title}`,
    description: project.metaDescription,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: project.image,
    datePublished: `${project.year}-01-01`,
    author: {
      "@id": `${seoConfig.siteUrl}/#organization`,
    },
    about: project.tag,
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
  };
}

export function buildLegalMetadata(
  type: "privacy" | "terms",
  title: string,
  description: string,
  path: string,
): Metadata {
  const keywords =
    type === "privacy" ? legalSeoKeywords.privacy : legalSeoKeywords.terms;

  return buildPageMetadata({
    title: `${siteConfig.name} | ${title}`,
    description: `${description} Official ${title.toLowerCase()} for ${siteConfig.name} — solar, security, networking and technical services in Pakistan.`,
    path,
    keywords: [...keywords],
  });
}

export function getBreadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
