import { Reveal } from "@/components/ui/reveal";
import { PlatformWordmark } from "@/components/ui/platform-brand";
import { SurfaceCard } from "@/components/ui/surface-card";
import { GoogleStarRow, StarRow } from "@/components/ui/stars";
import { platformRatings } from "@/content/trust";

export function PlatformRatingsSection() {
  return (
    <section className="border-y border-sg-border-soft bg-sg-surface sg-section-x py-8 sm:py-10">
      <div className="mx-auto flex max-w-[var(--spacing-container)] flex-col items-center gap-5 sm:gap-6">
        <Reveal>
          <p className="sg-eyebrow mb-0 text-center">Client confidence</p>
        </Reveal>
        <div className="sg-grid-cards w-full">
          {platformRatings.map((item, index) => (
            <Reveal key={item.platform} delay={index * 80} className="h-full">
              <SurfaceCard className="flex h-full min-h-[140px] flex-col sm:min-h-[156px]">
                <div className="flex min-h-6 items-center sm:min-h-7">
                  <PlatformWordmark platform={item.brand} className="text-sm sm:text-lg" />
                </div>
                <div className="mt-1.5 min-h-5 text-xs font-semibold text-sg-text-hi sm:mt-2 sm:text-sm">
                  {item.score}
                </div>
                <p className="mt-0.5 line-clamp-2 min-h-7 text-[10px] leading-snug text-sg-text-dim sm:min-h-8 sm:text-xs">
                  {item.subtitle}
                </p>
                <div className="mt-auto pt-3 sm:pt-4">
                  {item.brand === "google" ? (
                    <GoogleStarRow size={14} />
                  ) : (
                    <StarRow count={item.stars} size={14} />
                  )}
                </div>
              </SurfaceCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
