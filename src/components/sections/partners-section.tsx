import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { partnerGroups } from "@/content/partners";
import { cn } from "@/lib/cn";
import { getProductAnchor } from "@/lib/products";

const categoryMeta = {
  Inverters: {
    accent: "from-sg-accent via-sg-accent/60 to-transparent",
    iconBg: "border-sg-accent/50 bg-sg-accent/20 text-sg-accent",
    chipHover: "hover:border-sg-accent/50 hover:bg-sg-accent/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <path d="M4 8h16v8H4z" />
        <path d="M8 12h8M12 8v8" />
        <path d="M7 4v2M17 4v2M7 18v2M17 18v2" />
      </svg>
    ),
  },
  "Solar Plates": {
    accent: "from-sg-cyan via-sg-cyan/60 to-transparent",
    iconBg: "border-sg-cyan/50 bg-sg-cyan/20 text-sg-cyan",
    chipHover: "hover:border-sg-cyan/50 hover:bg-sg-cyan/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <rect x="3" y="8" width="18" height="10" rx="1.5" />
        <path d="M3 13h18M8 8V5M12 8V5M16 8V5" />
      </svg>
    ),
  },
  "Lithium Battery": {
    accent: "from-sg-success via-sg-success/60 to-transparent",
    iconBg: "border-sg-success/50 bg-sg-success/20 text-sg-success",
    chipHover: "hover:border-sg-success/50 hover:bg-sg-success/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <rect x="5" y="7" width="14" height="12" rx="2" />
        <path d="M9 7V5h6v2M9 13h6" />
      </svg>
    ),
  },
} as const;

export function PartnersSection() {
  return (
    <section id="partners" className="relative sg-section-x pb-16 pt-5 sm:pb-[110px]">
      <div className="relative mx-auto max-w-[var(--spacing-container)]">
        <Reveal>
          <SectionHeader
            eyebrow="Technology partners"
            title="Equipment selected for your project."
            description="We integrate established brands matched to each site's technical and operational needs."
            className="mb-8 max-w-[620px] sm:mb-12"
            align="left"
          />
        </Reveal>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {partnerGroups.map((group, index) => {
            const meta = categoryMeta[group.category as keyof typeof categoryMeta];

            return (
              <Reveal key={group.category} delay={index * 90} className="h-full">
                <article
                  id={getProductAnchor(group.category)}
                  className="group relative flex h-full scroll-mt-36 flex-col overflow-hidden rounded-sg-xl border border-sg-border bg-sg-panel p-5 shadow-[0_12px_32px_rgba(0,0,0,0.32)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-sg-accent/40 hover:shadow-[0_20px_48px_rgba(0,0,0,0.45)] sm:p-6"
                >
                  <div
                    className={cn(
                      "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
                      meta.accent,
                    )}
                  />

                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "grid h-11 w-11 shrink-0 place-items-center rounded-sg-md border shadow-[0_4px_12px_rgba(0,0,0,0.2)]",
                          meta.iconBg,
                        )}
                      >
                        {meta.icon}
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-sg-text-hi sm:text-[17px]">
                          {group.category}
                        </h3>
                        <p className="mt-0.5 text-[12px] font-medium text-sg-text-mid sm:text-[13px]">
                          {group.brands.length} integrated brands
                        </p>
                      </div>
                    </div>
                    <span className="font-display text-[28px] font-bold leading-none text-white/15 transition-colors group-hover:text-sg-accent/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <ul className="grid flex-1 grid-cols-2 gap-2 sm:gap-2.5">
                    {group.brands.map((brand) => (
                      <li key={brand}>
                        <span
                          className={cn(
                            "flex h-full min-h-[42px] items-center rounded-sg-sm border border-white/25 bg-white px-3 py-2 font-display text-[12px] font-bold leading-tight text-[#0e1b3e] shadow-[0_3px_10px_rgba(0,0,0,0.22)] transition-[border-color,background-color,transform] duration-200 hover:-translate-y-px sm:min-h-[44px] sm:px-3.5 sm:text-[13px]",
                            meta.chipHover,
                          )}
                        >
                          {brand}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
