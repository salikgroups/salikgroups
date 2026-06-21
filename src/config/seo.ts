import { siteConfig } from "@/config/site";

export const seoConfig = {
  siteUrl: "https://salikgroups.com",
  siteName: siteConfig.name,
  alternateNames: ["Salik Groups", "Salik Group", "Salik Enterprises"],
  locale: "en_PK",
  defaultOgImage: "/saliglogo (1).svg",
  twitterHandle: "@SalikGroups",
  geo: {
    region: "PK-PB",
    placename: "Lahore",
    position: "31.5497;74.3436",
  },
} as const;

export const globalKeywords = [
  "Salik Groups & Co",
  "Salik Groups",
  "Salik Group",
  "Salik Enterprises",
  "salikgroups.com",
  "solar energy Pakistan",
  "CCTV installation Pakistan",
  "security systems Lahore",
  "enterprise networking Pakistan",
  "Safe City CCTV",
  "electric fence Pakistan",
  "generators Pakistan",
  "video wall Pakistan",
  "IT solutions Lahore",
  "technical services Pakistan",
] as const;

export const homepageSeo = {
  title:
    "Salik Groups & Co | Solar, CCTV, Security & Enterprise Networking Solutions Pakistan",
  description:
    "Salik Groups & Co — Pakistan's trusted partner for solar energy, CCTV & Safe City surveillance, electric fencing, generators, video walls, enterprise networking and IT solutions. Design, supply, installation, commissioning and support from Lahore since 2021.",
  keywords: [
    "Salik Groups & Co",
    "Salik Groups",
    "Salik Group",
    "Salik Enterprises",
    "Salik Groups & Co Lahore",
    "Salik Groups & Co Pakistan",
    "salikgroups.com",
    "solar energy company Pakistan",
    "commercial solar installation Lahore",
    "CCTV camera installation Pakistan",
    "Safe City project Pakistan",
    "security systems integrator Lahore",
    "electric fence installation Pakistan",
    "generator supply Pakistan",
    "video wall LED Pakistan",
    "enterprise networking Lahore",
    "structured cabling Pakistan",
    "attendance machine supplier",
    "video intercom Pakistan",
    "telephone exchange systems",
    "IT solutions Lahore",
    "repair centre electronics Lahore",
    "government solar projects Pakistan",
    "industrial security systems",
  ],
} as const;
