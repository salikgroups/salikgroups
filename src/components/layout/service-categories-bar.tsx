"use client";

import { services } from "@/content/services";
import { cn } from "@/lib/cn";
import { getServicePath } from "@/lib/services";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ServiceCategoriesBar() {
  const pathname = usePathname();

  return (
    <div
      id="service-categories"
      className="border-b border-sg-border bg-[var(--sg-nav-bg)] backdrop-blur-[14px]"
    >
      <div className="mx-auto max-w-[var(--spacing-container)] px-[var(--spacing-section-x)]">
        <div className="flex gap-1 overflow-x-auto py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {services.map((service) => {
            const href = getServicePath(service.slug);
            const active = pathname === href;

            return (
              <Link
                key={service.slug}
                href={href}
                className={cn(
                  "sg-touch-target shrink-0 rounded-sg-pill px-3 py-2 text-[12px] font-semibold transition-colors sm:px-4 sm:text-[13px]",
                  active
                    ? "bg-sg-accent text-sg-hero shadow-[0_6px_18px_rgba(244,159,28,0.28)]"
                    : "text-sg-text-soft hover:bg-sg-panel hover:text-sg-text-hi",
                )}
              >
                {service.shortLabel}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
