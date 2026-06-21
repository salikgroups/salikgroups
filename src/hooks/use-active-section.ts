"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** Homepage anchor order — must match section layout on the page */
const sectionIds = ["about", "services", "projects", "industries", "partners"];

export function useActiveSection() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState<string | null>("top");

  useEffect(() => {
    if (!isHome) return;

    const getHeaderOffset = () => {
      const header = document.querySelector("header");
      return header?.offsetHeight ?? 176;
    };

    const updateActiveSection = () => {
      const offset = getHeaderOffset() + 24;
      const scrollPosition = window.scrollY + offset;
      const aboutElement = document.getElementById("about");

      if (!aboutElement || scrollPosition < aboutElement.offsetTop) {
        setActiveSection("top");
        return;
      }

      let current = "about";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        if (element.offsetTop <= scrollPosition) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHome]);

  return isHome ? activeSection : null;
}
