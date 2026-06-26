import { firstGalleryImage, galleryPaths } from "@/lib/media";
import type { FieldWorkShowcase, TeamMember } from "@/types/content";

export const projectGalleries = {
  "safe-city": galleryPaths("/media/projects/safe-city", 10),
  "video-wall": galleryPaths("/media/projects/video-wall", 1),
  "electric-fence": galleryPaths("/media/projects/electric-fence", 7),
  networking: galleryPaths("/media/projects/networking", 3),
  solar: [
    ...galleryPaths("/media/projects/solar/panels", 14),
    ...galleryPaths("/media/projects/solar/inverters", 14),
    ...galleryPaths("/media/projects/solar/hybrid-250kv", 2),
  ],
} as const;

export const serviceGalleries = {
  "solar-energy": [
    ...galleryPaths("/media/projects/solar/panels", 14),
    ...galleryPaths("/media/projects/solar/inverters", 14),
    ...galleryPaths("/media/projects/solar/hybrid-250kv", 2),
  ],
  "electric-fencing": galleryPaths("/media/projects/electric-fence", 7),
  generators: galleryPaths("/media/services/generators", 2),
  "enterprise-networking": galleryPaths("/media/projects/networking", 3),
  "cctv-surveillance": galleryPaths("/media/projects/safe-city", 10),
  "video-intercom": galleryPaths("/media/capabilities/emergency-buttons", 1),
} as const;

export const projectCoverImages = {
  "safe-city": firstGalleryImage("/media/projects/safe-city"),
  "video-wall": firstGalleryImage("/media/projects/video-wall"),
  "electric-fence": firstGalleryImage("/media/projects/electric-fence"),
  networking: firstGalleryImage("/media/projects/networking"),
  solar: firstGalleryImage("/media/projects/solar/panels"),
} as const;

export const serviceCoverImages = {
  "solar-energy": firstGalleryImage("/media/projects/solar/panels"),
  "cctv-surveillance": firstGalleryImage("/media/projects/safe-city"),
  "electric-fencing": firstGalleryImage("/media/projects/electric-fence"),
  generators: firstGalleryImage("/media/services/generators"),
  "enterprise-networking": firstGalleryImage("/media/projects/networking"),
  "video-intercom": firstGalleryImage("/media/capabilities/emergency-buttons"),
} as const;

export const teamMembers: TeamMember[] = [
  {
    id: "ceo",
    name: "Muhammad Noman",
    role: "Chief Executive Officer",
    image: "/media/team/muhammad-noman.webp",
    bio: "Leads Salik Groups & Co with a focus on disciplined delivery, client accountability and long-term technical partnerships across Pakistan.",
  },
  {
    id: "head-support",
    name: "Mohammad Fayyaz",
    role: "Head of Technical Support",
    image: "/media/team/mohammad-fayyaz/04.webp",
    bio: "Oversees after-sales support, commissioning handover and field troubleshooting for solar, security and networking deployments.",
  },
  {
    id: "technical-engineer",
    name: "Faisal Haroon",
    role: "Technical Engineer",
    image: "/media/team/faisal-haroon/01.webp",
    bio: "Hands-on engineer across site surveys, installation, testing and quality verification on government and commercial projects.",
  },
];

export const fieldWorkShowcases: FieldWorkShowcase[] = [
  {
    id: "solar-panels",
    tag: "Solar energy",
    title: "Commercial solar panel arrays",
    description:
      "On-site panel mounting, alignment and integration for high-yield commercial and industrial rooftops.",
    images: galleryPaths("/media/projects/solar/panels", 14),
  },
  {
    id: "solar-inverters",
    tag: "Solar energy",
    title: "Inverter rooms & hybrid systems",
    description:
      "Inverter commissioning, cabling discipline and hybrid configurations built for reliable long-term output.",
    images: galleryPaths("/media/projects/solar/inverters", 14),
  },
  {
    id: "hybrid-250kv",
    tag: "Power systems",
    title: "250 KW hybrid inverter deployments",
    description:
      "High-capacity hybrid inverter installations engineered for demanding load profiles.",
    images: galleryPaths("/media/projects/solar/hybrid-250kv", 2),
  },
  {
    id: "generators",
    tag: "Backup power",
    title: "Generator supply & installation",
    description:
      "Standby generator deployments for sites that cannot afford power interruptions.",
    images: galleryPaths("/media/services/generators", 2),
  },
  {
    id: "emergency-buttons",
    tag: "Security & access",
    title: "Emergency button installations",
    description:
      "Panic and emergency call-point systems installed, tested and handed over for sensitive facilities.",
    images: galleryPaths("/media/capabilities/emergency-buttons", 1),
  },
];

export const aboutFeatureImage = firstGalleryImage("/media/projects/safe-city");
