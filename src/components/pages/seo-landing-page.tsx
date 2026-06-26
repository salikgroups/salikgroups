import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SeoContentSection } from "@/components/sections/seo-content-section";
import type { SeoLandingPage } from "@/types/seo";
import Image from "next/image";
import Link from "next/link";

type SeoLandingPageViewProps = {
  page: SeoLandingPage;
};

export function SeoLandingPageView({ page }: SeoLandingPageViewProps) {
  return (
    <main>
      <section className="relative overflow-hidden bg-sg-hero sg-section-x pb-12 pt-8 text-[#f3f6fc] sm:pb-16 sm:pt-10">
        {page.ogImage ? (
          <Image
            src={page.ogImage}
            alt=""
            fill
            priority
            className="object-cover opacity-[0.18]"
            sizes="100vw"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,20,48,0.88)] via-[rgba(10,20,48,0.78)] to-sg-hero" />

        <div className="relative mx-auto max-w-[var(--spacing-container)]">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#aab4cf]">
            <Link href="/" className="transition-colors hover:text-sg-accent">
              Home
            </Link>
            <span>/</span>
            <Link href="/#services" className="transition-colors hover:text-sg-accent">
              Solutions
            </Link>
            <span>/</span>
            <span className="text-sg-accent line-clamp-1">{page.headline}</span>
          </nav>

          <Reveal>
            <div className="sg-eyebrow mb-4">Salik Groups & Co · Pakistan</div>
            <h1 className="max-w-[900px] font-display text-[clamp(28px,4.5vw,52px)] font-extrabold leading-[1.05] tracking-[-0.04em]">
              {page.headline}
            </h1>
            <p className="mt-5 max-w-[720px] text-[clamp(15px,1.5vw,18px)] leading-[1.65] text-[#aab4cf]">
              {page.subheadline}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button href="/#contact" className="w-full justify-center sm:w-auto">
                Request a Technical Survey →
              </Button>
              <Button href="/#services" variant="secondary" className="w-full justify-center sm:w-auto">
                View All Services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <SeoContentSection
        extension={{
          title: "What you need to know",
          intro:
            "Salik Groups & Co delivers survey-led design, certified installation and long-term support across Pakistan.",
          sections: page.sections,
          faqs: page.faqs,
        }}
        relatedLinks={page.relatedLinks}
      />
    </main>
  );
}
