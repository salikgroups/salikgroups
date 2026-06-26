/** Raster images for Open Graph / Twitter cards (SVG logos are not supported by most apps). */
export const ogImages = {
  default: "/media/projects/solar/panels/01.webp",
  homepage: "/media/projects/safe-city/01.webp",
  brand: "/media/projects/safe-city/01.webp",
} as const;

export const topicOgImages: Record<string, string> = {
  "electronic-services": "/media/projects/safe-city/01.webp",
  "electronic-products": "/media/projects/safe-city/02.webp",
  "solar-energy": "/media/projects/solar/panels/01.webp",
  "solar-panels": "/media/projects/solar/panels/03.webp",
  "solar-inverters": "/media/projects/solar/inverters/01.webp",
  "cctv-surveillance": "/media/projects/safe-city/04.webp",
  "electric-fencing": "/media/projects/electric-fence/01.webp",
  generators: "/media/services/generators/01.webp",
  "enterprise-networking": "/media/projects/networking/01.webp",
  "video-wall": "/media/projects/video-wall/01.webp",
  "video-intercom": "/media/capabilities/emergency-buttons/01.webp",
  "it-solutions": "/media/projects/networking/02.webp",
  "attendance-machines": "/media/projects/safe-city/05.webp",
  "telephone-exchange": "/media/projects/networking/03.webp",
  "security-systems": "/media/projects/safe-city/06.webp",
  "safe-city-cctv": "/media/projects/safe-city/07.webp",
  "hybrid-solar-systems": "/media/projects/solar/hybrid-250kv/01.webp",
  "repairing-centre": "/media/services/generators/02.webp",
};

export function getTopicOgImage(topicSlug: string) {
  return topicOgImages[topicSlug] ?? ogImages.default;
}
