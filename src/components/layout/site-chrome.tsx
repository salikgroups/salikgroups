"use client";

import { Logo } from "@/components/ui/logo";
import { NavCta } from "@/components/ui/button";
import { primaryNav } from "@/config/navigation";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { HeaderMarqueeBar } from "./header-marquee-bar";
import { BackToTop, ScrollProgress } from "./scroll-chrome";
import { GoogleReviewsWidget } from "./google-reviews-widget";
import { ServicesNavDropdown } from "./services-nav-dropdown";
import { WhatsAppWidget } from "./whatsapp-widget";
import { services } from "@/content/services";
import { getServicePath } from "@/lib/services";
import { usePathname } from "next/navigation";

type NavbarProps = {
  scrolled: boolean;
  activeSection: string | null;
  onOpenMenu: () => void;
};

export function Navbar({ scrolled, activeSection, onOpenMenu }: NavbarProps) {
  const pathname = usePathname();
  const isOnServicePage = pathname.startsWith("/services/");

  return (
    <nav
      className={cn(
        "flex items-center justify-between border-b border-sg-border px-[var(--spacing-section-x)] transition-[background,padding,backdrop-filter] duration-300",
        scrolled ? "bg-[var(--sg-nav-bg)] py-2.5 backdrop-blur-[14px] sm:py-3" : "bg-sg-hero/40 py-3 sm:py-[18px]",
      )}
    >
      <Link href="/" className={cn(scrolled ? "text-sg-text-hi" : "text-[#f3f6fc]")}>
        <Logo variant="full" priority />
      </Link>

      <div
        className={cn(
          "hidden items-center gap-5 text-sm font-semibold md:flex lg:gap-[34px]",
          scrolled ? "text-sg-text-soft" : "text-[#e8edf6]",
        )}
      >
        {primaryNav.map((item) => {
          const isServices = item.sectionId === "services";
          const isActive =
            activeSection === item.sectionId || (isServices && isOnServicePage);

          if (isServices) {
            return (
              <ServicesNavDropdown
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={isActive}
              />
            );
          }

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
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  if (!open) return null;

  const isOnServicePage = pathname.startsWith("/services/");
  const isServicesActive = activeSection === "services" || isOnServicePage;

  return (
    <div className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-2 overflow-y-auto bg-[rgba(8,16,40,0.97)] px-6 py-10 text-[#f3f6fc] backdrop-blur-sm">
      {primaryNav.map((item) => {
        const isServices = item.sectionId === "services";
        const isActive =
          activeSection === item.sectionId || (isServices && isOnServicePage);

        if (isServices) {
          return (
            <div key={item.href} className="flex w-full max-w-sm flex-col items-center">
              <button
                type="button"
                onClick={() => setServicesOpen((current) => !current)}
                className={cn(
                  "font-display sg-touch-target flex items-center gap-2 px-3 py-3 text-[22px] font-bold transition-colors sm:text-[26px]",
                  isServicesActive ? "text-sg-accent" : undefined,
                )}
                aria-expanded={servicesOpen}
              >
                {item.label}
                <span className="text-sm" aria-hidden>
                  {servicesOpen ? "▴" : "▾"}
                </span>
              </button>
              {servicesOpen ? (
                <div className="mb-2 flex w-full flex-col gap-1 rounded-sg-md border border-sg-border bg-sg-panel p-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={getServicePath(service.slug)}
                      onClick={onClose}
                      className={cn(
                        "rounded-sg-sm px-3 py-2.5 text-left text-sm font-semibold transition-colors hover:bg-sg-panel-2 hover:text-sg-accent",
                        pathname === getServicePath(service.slug)
                          ? "text-sg-accent"
                          : "text-sg-text-soft",
                      )}
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="mt-1 border-t border-sg-border px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-sg-text-faint transition-colors hover:text-sg-accent"
                  >
                    View all services
                  </Link>
                </div>
              ) : null}
            </div>
          );
        }

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
        <HeaderMarqueeBar />
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
