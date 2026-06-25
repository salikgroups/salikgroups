"use client";

import { Logo } from "@/components/ui/logo";
import { NavCta } from "@/components/ui/button";
import { primaryNav } from "@/config/navigation";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { HeaderMarqueeBar } from "./header-marquee-bar";
import { MobileMenu } from "./mobile-menu";
import { BackToTop, ScrollProgress } from "./scroll-chrome";
import { GoogleReviewsWidget } from "./google-reviews-widget";
import { ServicesNavDropdown } from "./services-nav-dropdown";
import { WhatsAppWidget } from "./whatsapp-widget";
import { usePathname } from "next/navigation";

type NavbarProps = {
  scrolled: boolean;
  activeSection: string | null;
  menuOpen: boolean;
  onToggleMenu: () => void;
};

export function Navbar({ scrolled, activeSection, menuOpen, onToggleMenu }: NavbarProps) {
  const pathname = usePathname();
  const isOnServicePage = pathname.startsWith("/services/");

  return (
    <nav
      className={cn(
        "relative z-[2] flex items-center gap-3 border-b border-sg-border px-4 transition-[background,padding,backdrop-filter] duration-300 sm:gap-4 sm:px-[var(--spacing-section-x)]",
        scrolled
          ? "bg-[var(--sg-nav-bg)] py-2 backdrop-blur-[14px] sm:py-2.5 md:py-3"
          : "bg-sg-hero/40 py-2.5 sm:py-3 md:py-[18px]",
      )}
    >
      <Link
        href="/"
        className={cn("min-w-0 shrink", scrolled ? "text-sg-text-hi" : "text-[#f3f6fc]")}
      >
        <Logo variant="full" priority />
      </Link>

      <div
        className={cn(
          "relative z-[2] hidden min-w-0 flex-1 items-center justify-end gap-3 overflow-visible text-[13px] font-semibold lg:flex xl:gap-6 xl:text-sm",
          scrolled ? "text-sg-text-soft" : "text-[#e8edf6]",
        )}
      >
        {primaryNav.map((item) => {
          const isServices = item.label === "Services";
          const isActive =
            activeSection === item.sectionId ||
            (isServices && isOnServicePage);

          if (isServices) {
            return (
              <ServicesNavDropdown
                key={item.label}
                href={item.href}
                label={item.label}
                isActive={isActive}
              />
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "relative whitespace-nowrap transition-colors hover:text-sg-accent",
                isActive ? "text-sg-accent" : undefined,
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
              {isActive ? (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-sg-accent" />
              ) : null}
            </Link>
          );
        })}
        <NavCta href="/#contact" className="shrink-0 px-4 py-2 text-[13px] xl:px-5 xl:py-[11px] xl:text-sm">
          Request Survey
        </NavCta>
      </div>

      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={onToggleMenu}
        className={cn(
          "relative ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-sg-md border transition-colors lg:hidden",
          scrolled
            ? "border-sg-border bg-sg-panel text-sg-text-hi"
            : "border-white/25 bg-white/10 text-white",
        )}
      >
        <span
          className={cn(
            "absolute block h-0.5 w-[18px] rounded-full bg-current transition-all duration-200",
            menuOpen ? "rotate-45" : "-translate-y-[5px]",
          )}
        />
        <span
          className={cn(
            "absolute block h-0.5 w-[18px] rounded-full bg-current transition-all duration-200",
            menuOpen ? "scale-x-0 opacity-0" : undefined,
          )}
        />
        <span
          className={cn(
            "absolute block h-0.5 w-[18px] rounded-full bg-current transition-all duration-200",
            menuOpen ? "-rotate-45" : "translate-y-[5px]",
          )}
        />
      </button>
    </nav>
  );
}

export function SiteChrome({
  children,
  progress,
  scrolled,
  showBackToTop,
  activeSection,
}: {
  children: ReactNode;
  progress: number;
  scrolled: boolean;
  showBackToTop: boolean;
  activeSection: string | null;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ScrollProgress progress={progress} />
      <header className="fixed inset-x-0 top-0 z-[100] isolate">
        <Navbar
          scrolled={scrolled}
          activeSection={activeSection}
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((current) => !current)}
        />
        <HeaderMarqueeBar className="relative z-[1]" />
      </header>
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
      />
      {children}
      <WhatsAppWidget />
      <GoogleReviewsWidget />
      <BackToTop
        visible={showBackToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </>
  );
}
