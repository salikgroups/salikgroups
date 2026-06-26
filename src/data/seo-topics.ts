export type SeoTopic = {
  slug: string;
  label: string;
  shortLabel: string;
  servicePath: string;
  solutionPath?: string;
  keywords: string[];
};

export const seoModifiers = [
  "best",
  "top",
  "professional",
  "trusted",
  "leading",
  "expert",
  "certified",
  "reliable",
  "affordable",
  "premium",
  "cheap",
  "number-1",
] as const;

export type SeoModifier = (typeof seoModifiers)[number];

export const brandSlugPrefixes = [
  "salik",
  "salik-group",
  "salik-groups",
  "salik-groups-co",
] as const;

export const seoTopics: SeoTopic[] = [
  {
    slug: "electronic-services",
    label: "Electronic Services",
    shortLabel: "Electronics",
    servicePath: "/#services",
    solutionPath: "/solutions/best-electronic-services-pakistan",
    keywords: ["best electronic services", "electronic services company", "electronics integrator"],
  },
  {
    slug: "electronic-products",
    label: "Electronic Products",
    shortLabel: "Products",
    servicePath: "/#services",
    solutionPath: "/solutions/best-electronic-products-pakistan",
    keywords: ["best electronic products", "electronics supplier", "electronic products Pakistan"],
  },
  {
    slug: "solar-energy",
    label: "Solar Energy",
    shortLabel: "Solar",
    servicePath: "/services/solar-energy",
    solutionPath: "/solutions/best-solar-panel-service-pakistan",
    keywords: ["solar energy", "solar power", "solar installation"],
  },
  {
    slug: "solar-panels",
    label: "Solar Panels",
    shortLabel: "Panels",
    servicePath: "/services/solar-energy",
    solutionPath: "/solutions/solar-panels-salikgroups",
    keywords: ["solar panel salikgroups", "solar panels", "commercial solar panels"],
  },
  {
    slug: "solar-inverters",
    label: "Solar Inverters",
    shortLabel: "Inverters",
    servicePath: "/services/solar-energy",
    solutionPath: "/solutions/solar-inverters-salikgroups",
    keywords: ["inverters salikgroups", "solar inverters", "hybrid inverters"],
  },
  {
    slug: "cctv-surveillance",
    label: "CCTV Surveillance",
    shortLabel: "CCTV",
    servicePath: "/services/cctv-surveillance",
    solutionPath: "/solutions/best-cctv-surveillance-pakistan",
    keywords: ["CCTV surveillance", "security cameras", "IP cameras"],
  },
  {
    slug: "electric-fencing",
    label: "Electric Fencing",
    shortLabel: "Fencing",
    servicePath: "/services/electric-fencing",
    solutionPath: "/solutions/best-electric-fencing-pakistan",
    keywords: ["electric fencing", "perimeter security", "electric fence"],
  },
  {
    slug: "generators",
    label: "Generators",
    shortLabel: "Generators",
    servicePath: "/services/generators",
    solutionPath: "/solutions/best-generators-pakistan",
    keywords: ["generators", "diesel generator", "backup power"],
  },
  {
    slug: "enterprise-networking",
    label: "Enterprise Networking",
    shortLabel: "Networking",
    servicePath: "/services/enterprise-networking",
    solutionPath: "/solutions/best-enterprise-networking-pakistan",
    keywords: ["enterprise networking", "structured cabling", "network installation"],
  },
  {
    slug: "video-wall",
    label: "Video Wall",
    shortLabel: "Video Wall",
    servicePath: "/projects/video-wall",
    solutionPath: "/solutions/best-video-wall-pakistan",
    keywords: ["video wall", "LED display wall", "control room display"],
  },
  {
    slug: "video-intercom",
    label: "Video Intercom",
    shortLabel: "Intercom",
    servicePath: "/services/video-intercom",
    keywords: ["video intercom", "door phone", "access intercom"],
  },
  {
    slug: "it-solutions",
    label: "IT Solutions",
    shortLabel: "IT",
    servicePath: "/services/it-solutions",
    keywords: ["IT solutions", "enterprise IT", "server installation"],
  },
  {
    slug: "attendance-machines",
    label: "Attendance Machines",
    shortLabel: "Attendance",
    servicePath: "/services/attendance-machines",
    keywords: ["attendance machine", "biometric attendance", "time attendance"],
  },
  {
    slug: "telephone-exchange",
    label: "Telephone Exchange",
    shortLabel: "Telephone",
    servicePath: "/services/telephone-exchange",
    keywords: ["telephone exchange", "IP PBX", "office phone system"],
  },
  {
    slug: "security-systems",
    label: "Security Systems",
    shortLabel: "Security",
    servicePath: "/services/cctv-surveillance",
    keywords: ["security systems", "physical security", "integrated security"],
  },
  {
    slug: "safe-city-cctv",
    label: "Safe City CCTV",
    shortLabel: "Safe City",
    servicePath: "/projects/safe-city",
    solutionPath: "/solutions/safe-city-cctv-pakistan",
    keywords: ["Safe City CCTV", "government surveillance", "district CCTV"],
  },
  {
    slug: "hybrid-solar-systems",
    label: "Hybrid Solar Systems",
    shortLabel: "Hybrid Solar",
    servicePath: "/services/solar-energy",
    solutionPath: "/solutions/hybrid-solar-inverters-pakistan",
    keywords: ["hybrid solar", "hybrid inverter", "commercial hybrid solar"],
  },
  {
    slug: "repairing-centre",
    label: "Repairing Centre",
    shortLabel: "Repairs",
    servicePath: "/services/repairing-centre",
    keywords: ["electronics repair", "CCTV repair", "generator repair"],
  },
];

export const topicBySlug = Object.fromEntries(
  seoTopics.map((topic) => [topic.slug, topic]),
) as Record<string, SeoTopic>;
