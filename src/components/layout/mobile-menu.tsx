"use client";

import { Logo } from "@/components/ui/logo";
import { primaryNav } from "@/config/navigation";
import { services } from "@/content/services";
import { cn } from "@/lib/cn";
import { getServicePath } from "@/lib/services";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  activeSection: string | null;
};

export function MobileMenu({ open, onClose, activeSection }: MobileMenuProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);

  const isOnServicePage = pathname.startsWith("/services/");

  useEffect(() => {
    if (!open) {
      setExpanded(null);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[110] lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-[rgba(4,10,28,0.72)] backdrop-blur-[2px]"
      />

      <div className="absolute inset-y-0 right-0 flex w-[min(100%,340px)] flex-col border-l border-sg-border bg-sg-surface shadow-[-24px_0_60px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between gap-3 border-b border-sg-border px-4 py-3.5">
          <Link href="/" onClick={onClose} className="min-w-0 shrink">
            <Logo variant="full" size="sm" />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="sg-touch-target grid h-10 w-10 shrink-0 place-items-center rounded-sg-md border border-sg-border bg-sg-panel text-sg-text-hi"
          >
            <span className="relative block h-3.5 w-3.5">
              <span className="absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 rotate-45 rounded-full bg-current" />
              <span className="absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 -rotate-45 rounded-full bg-current" />
            </span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-3">
          <ul className="flex flex-col gap-1">
            {primaryNav.map((item) => {
              const isServices = item.label === "Services";
              const isActive =
                activeSection === item.sectionId ||
                (isServices && isOnServicePage);

              if (isServices) {
                const isOpen = expanded === "services";

                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : "services")}
                      className={cn(
                        "flex w-full items-center justify-between rounded-sg-md px-3 py-3 text-left font-display text-[17px] font-bold transition-colors",
                        isActive || isOpen
                          ? "bg-sg-accent/10 text-sg-accent"
                          : "text-sg-text-hi hover:bg-sg-panel",
                      )}
                      aria-expanded={isOpen}
                    >
                      {item.label}
                      <span className="text-xs opacity-70" aria-hidden>
                        {isOpen ? "▴" : "▾"}
                      </span>
                    </button>

                    {isOpen ? (
                      <div className="mt-1 mb-1 flex flex-col gap-0.5 rounded-sg-md border border-sg-border bg-sg-panel p-1.5">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={getServicePath(service.slug)}
                            onClick={onClose}
                            className={cn(
                              "rounded-sg-sm px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-sg-panel-2 hover:text-sg-accent",
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
                          className="mt-0.5 border-t border-sg-border px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-sg-text-faint transition-colors hover:text-sg-accent"
                        >
                          View all services
                        </Link>
                      </div>
                    ) : null}
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "block rounded-sg-md px-3 py-3 font-display text-[17px] font-bold transition-colors",
                      isActive
                        ? "bg-sg-accent/10 text-sg-accent"
                        : "text-sg-text-hi hover:bg-sg-panel",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-sg-border p-4">
          <Link
            href="/#contact"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-sg-pill bg-sg-accent px-5 py-3.5 text-base font-bold text-sg-hero shadow-[0_8px_24px_rgba(244,159,28,0.28)]"
          >
            Request Survey
          </Link>
        </div>
      </div>
    </div>
  );
}
