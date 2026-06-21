import { Reveal } from "@/components/ui/reveal";
import { AnimatedStatValue } from "@/components/ui/animated-number";
import { SurfaceCard } from "@/components/ui/surface-card";
import { GoogleStarRow } from "@/components/ui/stars";
import { siteConfig } from "@/config/site";
import { trustBadges, trustCities, trustStats } from "@/content/trust";

function BadgeIcon({ type }: { type: (typeof trustBadges)[number]["icon"] }) {
  const className = "h-4 w-4 shrink-0 text-sg-accent";

  switch (type) {
    case "shield":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3 4 7v6c0 5 3.5 8 8 8s8-3 8-8V7l-8-4z" />
        </svg>
      );
    case "wrench":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14.5 5.5a3.5 3.5 0 0 0-4.7 4.3l-5 5a1.6 1.6 0 0 0 2.3 2.3l5-5a3.5 3.5 0 0 0 4.3-4.7l-2 2-1.8-.3-.3-1.8z" />
        </svg>
      );
    case "camera":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2.5" y="7" width="14" height="7" rx="2" />
          <circle cx="9.5" cy="10.5" r="2" />
          <path d="M16.5 9.5 21 7.5v6l-4.5-2" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M13 2 4 14h7l-1 8 10-14H11l2-8z" />
        </svg>
      );
    case "network":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="2.4" />
          <circle cx="5" cy="5" r="1.8" />
          <circle cx="19" cy="5" r="1.8" />
          <path d="M10.3 10.3 6.3 6.3M13.7 10.3l4-4" />
        </svg>
      );
  }
}

export function TrustStatsSection() {
  return (
    <section className="sg-section-x sg-section-y">
      <div className="mx-auto max-w-[var(--spacing-container)]">
        <Reveal>
          <p className="sg-eyebrow mb-8 text-center">
            Trusted across Pakistan since {siteConfig.established}
          </p>
        </Reveal>

        <SurfaceCard className="overflow-hidden">
          <div className="grid grid-cols-2 divide-x divide-y divide-sg-border lg:grid-cols-4 lg:divide-y-0">
            {trustStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 60}>
                <div className="px-3 py-6 text-center sm:px-6 sm:py-8 lg:px-5">
                  {"showStars" in stat && stat.showStars ? (
                    <div className="mb-3 flex justify-center">
                      <GoogleStarRow size={18} />
                    </div>
                  ) : null}
                  <AnimatedStatValue
                    displayValue={stat.value}
                    valueClassName="text-[clamp(28px,3vw,36px)]"
                    delay={index * 90}
                  />
                  <div className="mt-2 font-display text-[13px] font-bold uppercase tracking-[1.5px] text-sg-text-hi">
                    {stat.label}
                  </div>
                  <p className="mx-auto mt-2 max-w-[220px] text-[13px] leading-[1.55] text-sg-text-dim">
                    {stat.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-2 divide-x divide-y divide-sg-border border-t border-sg-border lg:grid-cols-3 lg:divide-y-0">
            {trustCities.map((city, index) => (
              <Reveal key={city.city} delay={index * 80}>
                <div className="px-3 py-5 sm:px-6 sm:py-7">
                  <div className="mb-3 text-sg-accent">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                    </svg>
                  </div>
                  <div className="font-display text-sm font-bold uppercase tracking-[1.5px] text-sg-text-hi">
                    {city.city}
                  </div>
                  <p className="mt-2 text-[14px] leading-[1.6] text-sg-text-mid">{city.projects}</p>
                  <p className="mt-1 text-[12.5px] text-sg-text-dim">{city.areas}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </SurfaceCard>

        <Reveal delay={120}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="inline-flex items-center gap-2 text-[13px] text-sg-text-dim"
              >
                <BadgeIcon type={badge.icon} />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
