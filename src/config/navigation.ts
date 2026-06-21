import type { NavLink } from "@/types/content";

/** Header order follows homepage section flow */
export const primaryNav: NavLink[] = [
  { label: "Home", href: "/#top", sectionId: "top" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Industries", href: "/#industries", sectionId: "industries" },
  { label: "Partners", href: "/#partners", sectionId: "partners" },
];

export const footerNav = {
  company: [
    { label: "Home", href: "/#top" },
    { label: "About Us", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/#projects" },
    { label: "Industries", href: "/#industries" },
    { label: "Partners", href: "/#partners" },
  ],
  solutions: [
    { label: "Solar & Generators", href: "/services/solar-energy" },
    { label: "CCTV & Security", href: "/services/cctv-surveillance" },
    { label: "Video Walls & UVSS", href: "/#services" },
    { label: "Networking & I.T.", href: "/services/enterprise-networking" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
} as const;
