"use client";

import { services } from "@/content/services";
import { cn } from "@/lib/cn";
import { getServicePath } from "@/lib/services";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ServicesNavDropdownProps = {
  href: string;
  label: string;
  isActive: boolean;
};

export function ServicesNavDropdown({ href, label, isActive }: ServicesNavDropdownProps) {
  const pathname = usePathname();

  return (
    <div className="group relative">
      <Link
        href={href}
        className={cn(
          "relative flex items-center gap-1 transition-colors hover:text-sg-accent",
          isActive ? "text-sg-accent" : undefined,
        )}
        aria-current={isActive ? "page" : undefined}
        aria-haspopup="true"
      >
        {label}
        <span className="text-[10px] opacity-60" aria-hidden>
          ▾
        </span>
        {isActive ? (
          <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-sg-accent" />
        ) : null}
      </Link>

      <div className="pointer-events-none absolute left-1/2 top-full z-[120] w-[min(320px,calc(100vw-2rem))] -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="overflow-hidden rounded-sg-md border border-sg-border bg-[var(--sg-nav-bg)] shadow-[0_16px_48px_rgba(0,0,0,0.35)] backdrop-blur-[14px]">
          <ul className="max-h-[min(70vh,420px)] overflow-y-auto py-2">
            {services.map((service) => {
              const serviceHref = getServicePath(service.slug);
              const serviceActive = pathname === serviceHref;

              return (
                <li key={service.slug}>
                  <Link
                    href={serviceHref}
                    className={cn(
                      "block px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-sg-panel hover:text-sg-accent",
                      serviceActive ? "text-sg-accent" : "text-sg-text-soft",
                    )}
                  >
                    {service.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="border-t border-sg-border px-4 py-2.5">
            <Link
              href={href}
              className="text-xs font-semibold uppercase tracking-wide text-sg-text-faint transition-colors hover:text-sg-accent"
            >
              View all services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
