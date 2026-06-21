import { ClientPill } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { SurfaceCard } from "@/components/ui/surface-card";
import { Marquee } from "@/components/ui/stat-counter";
import { clientMarquee, industries } from "@/content/industries";

export function IndustriesSection() {
  return (
    <section id="industries" className="sg-section-x pb-16 pt-5 sm:pb-[100px]">
      <div className="mx-auto max-w-[var(--spacing-container)]">
        <Reveal>
          <SectionHeader
            eyebrow="Who we serve"
            title="Trusted across government and industry."
            description="From courts and counter-terrorism to sugar mills, beverages, hospitality and telecom."
            className="mb-8 max-w-[660px] sm:mb-[50px]"
            align="left"
          />
        </Reveal>

        <Reveal>
          <div className="sg-grid-cards mb-8 sm:mb-11">
            {industries.map((industry) => (
              <SurfaceCard key={industry.title} className="h-full">
                <div className="font-display text-sm font-bold text-sg-text-hi sm:text-base">
                  {industry.title}
                </div>
                <div className="mt-1 line-clamp-3 text-[11px] leading-[1.5] text-sg-text-dim sm:mt-1.5 sm:line-clamp-none sm:text-[13px]">
                  {industry.subtitle}
                </div>
              </SurfaceCard>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div
            className="overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
              maskImage:
                "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            }}
          >
            <Marquee speed="slow">
              <div className="flex gap-3.5">
                {clientMarquee.map((client) => (
                  <ClientPill key={client}>{client}</ClientPill>
                ))}
              </div>
            </Marquee>
          </div>
          <p className="mt-4 text-center text-[11px] text-sg-text-faint sm:mt-[18px] sm:text-[12.5px]">
            Client names shown for reference. Logos displayed only with formal permission.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
