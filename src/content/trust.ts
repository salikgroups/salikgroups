export const trustStats = [
  {
    value: "400+",
    label: "Systems Deployed",
    description: "CCTV, solar, networking and security projects delivered nationwide",
  },
  {
    value: "4.9",
    label: "Client Rating",
    description: "Highly rated for technical delivery, communication and after-sales support",
    showStars: true,
  },
  {
    value: "10+",
    label: "Solution Areas",
    description: "Solar, security, networking, generators and enterprise I.T. under one roof",
  },
  {
    value: "2",
    label: "Office Locations",
    description: "Head office Lahore · Karachi office opening soon",
  },
] as const;

export const trustCities = [
  {
    city: "Lahore",
    projects: "Courts, EPA video walls, wireless links & perimeter security",
    areas: "The Mall Road · District sites · Commercial zones",
  },
  {
    city: "Sialkot & Sheikhupura",
    projects: "Safe City surveillance across 88+ commissioned sites",
    areas: "34 sites Sialkot · 54 sites Sheikhupura",
  },
  {
    city: "Nationwide",
    projects: "Government, industrial and commercial infrastructure projects",
    areas: "CTD · Sugar mills · Hospitality · Telecom",
  },
] as const;

export const trustBadges = [
  { icon: "shield" as const, label: "Gov-Grade Project Delivery" },
  { icon: "wrench" as const, label: "End-to-End Technical Support" },
  { icon: "camera" as const, label: "HIKVISION & Dahua Integration" },
  { icon: "bolt" as const, label: "Solar & Power Solutions" },
  { icon: "network" as const, label: "Enterprise Networking Partner" },
] as const;

export const platformRatings = [
  {
    platform: "Google",
    score: "4.9/5",
    subtitle: "Verified client reviews",
    stars: 5,
    brand: "google" as const,
  },
  {
    platform: "Instagram",
    score: "4.8/5",
    subtitle: "Project highlights & feedback",
    stars: 5,
    brand: "instagram" as const,
  },
  {
    platform: "Facebook",
    score: "4.8/5",
    subtitle: "Community recommendations",
    stars: 5,
    brand: "facebook" as const,
  },
  {
    platform: "LinkedIn",
    score: "Trusted Partner",
    subtitle: "B2B & enterprise referrals",
    stars: 5,
    brand: "linkedin" as const,
  },
] as const;

export const deliveryFeatures = [
  {
    id: "survey",
    title: "Site Survey First",
    description: "Every project begins with assessment and planning",
    icon: "survey" as const,
  },
  {
    id: "install",
    title: "Certified Installation",
    description: "Trained teams following approved engineering practices",
    icon: "install" as const,
  },
  {
    id: "integrate",
    title: "System Integration",
    description: "Solar, CCTV, networking and security working together",
    icon: "integrate" as const,
  },
  {
    id: "support",
    title: "After-Sales Support",
    description: "Maintenance, repair centre and long-term assistance",
    icon: "support" as const,
  },
] as const;
