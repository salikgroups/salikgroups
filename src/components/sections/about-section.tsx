import { aboutFeatureImage } from "@/content/media";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { AboutHighlightStats } from "./about-highlight-stats";

export function AboutSection() {
  return (
    <section id="about" className="sg-section-x py-16 sm:py-[110px]">
      <div className="mx-auto grid max-w-[var(--spacing-container)] grid-cols-1 items-center gap-10 sm:gap-[60px] lg:grid-cols-2">
        <Reveal>
          <div className="sg-eyebrow mb-4 sm:mb-[18px]">Who we are</div>
          <h2 className="sg-heading mb-4 text-[clamp(24px,3.4vw,42px)] leading-[1.12] sm:mb-[22px]">
            One accountable partner for critical infrastructure.
          </h2>
          <p className="sg-body mb-4 text-[15px] sm:mb-[18px] sm:text-[17px]">
            Salik Groups & Co is a quality-driven technology solutions provider combining
            engineering expertise, hands-on field experience and disciplined project
            execution — delivering integrated systems that work together as one reliable
            solution.
          </p>
          <p className="sg-body text-[15px] sm:text-[17px]">
            We provide a single point of contact for system design, supply, installation,
            corporate training, technical documentation and ongoing support — removing the
            complexity of juggling multiple vendors.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative min-h-[280px] overflow-hidden rounded-sg-xl border border-white/10 sm:min-h-[420px]">
            <Image
              src={aboutFeatureImage}
              alt="Salik Groups & Co Safe City surveillance installation on site"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,20,48,0.25)] to-[rgba(10,20,48,0.78)]" />
            <div className="absolute left-3 top-3 rounded-2xl bg-gradient-to-br from-sg-accent/95 to-sg-accent/78 px-4 py-3 text-sg-hero shadow-[0_12px_30px_rgba(244,159,28,0.3)] sm:left-5 sm:top-5 sm:px-5 sm:py-4">
              <div className="font-display text-2xl font-extrabold leading-none sm:text-[30px]">
                {siteConfig.established}
              </div>
              <div className="mt-1 text-[11px] font-semibold sm:text-[13px]">
                Established & growing fast
              </div>
            </div>
            <AboutHighlightStats />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
