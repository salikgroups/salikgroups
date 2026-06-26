import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import type { SeoExtension, SeoFaq, SeoSection } from "@/types/seo";
import Link from "next/link";

type SeoContentSectionProps = {
  extension: SeoExtension;
  relatedLinks?: { label: string; href: string }[];
};

export function SeoContentSection({ extension, relatedLinks }: SeoContentSectionProps) {
  return (
    <section className="border-t border-sg-border-soft bg-sg-panel sg-section-x sg-section-y">
      <div className="mx-auto max-w-[var(--spacing-container)]">
        <Reveal>
          <div className="mb-8 max-w-[760px] sm:mb-10">
            <div className="sg-eyebrow mb-4">Expertise</div>
            <h2 className="sg-heading text-[clamp(22px,3vw,36px)] leading-[1.12]">
              {extension.title}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-sg-text-mid sm:text-[16px]">
              {extension.intro}
            </p>
          </div>
        </Reveal>

        {extension.sections.length > 0 ? (
          <div className="mb-10 space-y-8 sm:mb-12">
            {extension.sections.map((section: SeoSection) => (
              <Reveal key={section.title}>
                <div className="max-w-[760px]">
                  <h3 className="font-display text-lg font-bold text-sg-text-hi sm:text-xl">
                    {section.title}
                  </h3>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[14px] leading-[1.7] text-sg-text-mid sm:text-[15px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : null}

        {extension.faqs.length > 0 ? (
          <Reveal>
            <div className="mb-8 max-w-[760px] sm:mb-10">
              <div className="sg-eyebrow mb-4">Frequently asked questions</div>
              <h3 className="font-display text-lg font-bold text-sg-text-hi sm:text-xl">
                Common questions
              </h3>
            </div>
            <div className="grid max-w-[900px] grid-cols-1 gap-4">
              {extension.faqs.map((faq: SeoFaq) => (
                <details
                  key={faq.question}
                  className="group rounded-sg-lg border border-sg-border bg-sg-surface px-4 py-4 sm:px-5"
                >
                  <summary className="cursor-pointer list-none font-display text-sm font-bold text-sg-text-hi marker:content-none sm:text-base">
                    <span className="flex items-start justify-between gap-3">
                      {faq.question}
                      <span className="text-sg-accent transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-[14px] leading-[1.65] text-sg-text-mid sm:text-[15px]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        ) : null}

        {relatedLinks && relatedLinks.length > 0 ? (
          <Reveal>
            <div className="mt-10 flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-sg-pill border border-sg-border bg-sg-panel-2 px-4 py-2 text-xs font-semibold text-sg-accent transition hover:border-sg-accent/45 sm:text-sm"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </Reveal>
        ) : null}

        <Reveal>
          <div className="mt-10">
            <Button href="/#contact">Request a Technical Survey →</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
