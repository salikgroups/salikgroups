import { PartnerChip } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { SurfaceCard } from "@/components/ui/surface-card";
import { partnerGroups } from "@/content/partners";

export function PartnersSection() {
  return (
    <section id="partners" className="sg-section-x pb-16 pt-5 sm:pb-[110px]">
      <div className="mx-auto max-w-[var(--spacing-container)]">
        <Reveal>
          <SectionHeader
            eyebrow="Technology partners"
            title="Equipment selected for your project."
            description="We integrate established brands matched to each site's technical and operational needs."
            className="mb-8 max-w-[620px] sm:mb-[50px]"
            align="left"
          />
        </Reveal>

        <div className="sg-grid-cards-partners">
          {partnerGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 80} className="h-full">
              <SurfaceCard className="h-full">
                <div className="mb-2.5 font-display text-sm font-bold text-sg-accent sm:mb-3.5 sm:text-[15px]">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.brands.map((brand) => (
                    <PartnerChip key={brand}>{brand}</PartnerChip>
                  ))}
                </div>
              </SurfaceCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
