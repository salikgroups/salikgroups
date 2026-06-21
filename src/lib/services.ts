import { services } from "@/content/services";
import type { Service } from "@/types/content";

export function getAllServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

export function getServicePath(slug: string): string {
  return `/services/${slug}`;
}
