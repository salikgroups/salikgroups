"use client";

import { Logo } from "@/components/ui/logo";
import { NavCta } from "@/components/ui/button";
import { primaryNav } from "@/config/navigation";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { BackToTop, ScrollProgress } from "./scroll-chrome";
import { GoogleReviewsWidget } from "./google-reviews-widget";
import { ServiceCategoriesBar } from "./service-categories-bar";
import { WhatsAppWidget } from "./whatsapp-widget";

type NavbarProps = {
  scrolled: boolean;
  activeSection: string | null;
  onOpenMenu: () => void;
};

export function Navbar({ scrolled, activeSection, onOpenMenu }: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex items-center justify-between border-b border-sg-border px-[var(--spacing-section-x)] transition-[background,padding,backdrop-filter] duration-300",
        scrolled ? "bg-[var(--sg-nav-bg)] py-2.5 backdrop-blur-[14px] sm:py-3" : "bg-sg-hero/40 py-3 sm:py-[18px]",
      )}
    >
      <Link href="/" className={cn(scrolled ? "text-sg-text-hi" : "text-[#f3f6fc]")}>
        <Logo priority />
      </Link>

      <div
        className={cn(
          "hidden items-center gap-5 text-sm font-semibold md:flex lg:gap-[34px]",
          scrolled ? "text-sg-text-soft" : "text-[#e8edf6]",
        )}
      >
        {primaryNav.map((item) => {
          const isActive = activeSection === item.sectionId;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative transition-colors hover:text-sg-accent",
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
        <NavCta href="/#contact">Request Survey</NavCta>
      </div>

      <button
        type="button"
        aria-label="Open menu"
        onClick={onOpenMenu}
        className="sg-touch-target grid h-11 w-11 place-items-center gap-1 rounded-xl border border-sg-border bg-sg-panel text-sg-text-hi md:hidden"
      >
        <span className="block h-0.5 w-[18px] rounded-sm bg-current" />
        <span className="block h-0.5 w-[18px] rounded-sm bg-current" />
        <span className="block h-0.5 w-[18px] rounded-sm bg-current" />
      </button>
    </nav>
  );
}

export function MobileMenu({
  open,
  onClose,
  activeSection,
}: {
  open: boolean;
  onClose: () => void;
  activeSection: string | null;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-2 bg-[rgba(8,16,40,0.97)] text-[#f3f6fc] backdrop-blur-sm">
      {primaryNav.map((item) => {
        const isActive = activeSection === item.sectionId;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={cn(
              "font-display sg-touch-target px-3 py-3 text-[22px] font-bold transition-colors sm:text-[26px]",
              isActive ? "text-sg-accent" : undefined,
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
      <Link
        href="/#contact"
        onClick={onClose}
        className="mt-3.5 rounded-sg-pill bg-sg-accent px-[30px] py-3.5 text-lg font-bold text-sg-hero"
      >
        Request Survey
      </Link>
    </div>
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
      <header className="fixed inset-x-0 top-0 z-[100]">
        <Navbar
          scrolled={scrolled}
          activeSection={activeSection}
          onOpenMenu={() => setMenuOpen(true)}
        />
        <ServiceCategoriesBar />
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
