import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import type { DiscoverPage } from "@/lib/seo-matrix";
import { getDiscoverPath, getRelatedDiscoverPages } from "@/lib/seo-matrix";
import Link from "next/link";

type DiscoverSeoPageViewProps = {
  page: DiscoverPage;
};

export function DiscoverSeoPageView({ page }: DiscoverSeoPageViewProps) {
  const related = getRelatedDiscoverPages(page);

  return (
    <main>
      <section className="relative overflow-hidden bg-sg-hero sg-section-x pb-12 pt-8 text-[#f3f6fc] sm:pb-14 sm:pt-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,20,48,0.92)] via-[rgba(10,20,48,0.82)] to-sg-hero" />
        <div className="relative mx-auto max-w-[var(--spacing-container)]">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#aab4cf]">
            <Link href="/" className="transition-colors hover:text-sg-accent">
              Home
            </Link>
            <span>/</span>
            <span className="text-sg-accent">Discover</span>
            <span>/</span>
            <span className="line-clamp-1 text-[#cdd5ea]">{page.city.name}</span>
          </nav>

          <Reveal>
            <div className="sg-eyebrow mb-4">
              Salik Groups & Co · {page.city.name}, {page.city.province}
            </div>
            <h1 className="max-w-[920px] font-display text-[clamp(26px,4.2vw,48px)] font-extrabold leading-[1.06] tracking-[-0.04em]">
              {page.headline}
            </h1>
            <p className="mt-5 max-w-[760px] text-[clamp(15px,1.5vw,18px)] leading-[1.65] text-[#aab4cf]">
              {page.subheadline}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button href="/#contact" className="w-full justify-center sm:w-auto">
                Request a Technical Survey →
              </Button>
              <Button
                href={page.topic.servicePath}
                variant="secondary"
                className="w-full justify-center sm:w-auto"
              >
                View {page.topic.shortLabel} Service
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sg-section-x sg-section-y">
        <div className="mx-auto max-w-[var(--spacing-container)]">
          <Reveal>
            <div className="max-w-[800px] space-y-5">
              {page.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[15px] leading-[1.75] text-sg-text-mid sm:text-[16px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 max-w-[800px]">
              <div className="sg-eyebrow mb-4">Frequently asked questions</div>
              <div className="space-y-3">
                {page.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-sg-lg border border-sg-border bg-sg-panel px-4 py-4"
                  >
                    <summary className="cursor-pointer list-none font-display text-sm font-bold text-sg-text-hi marker:content-none sm:text-base">
                      <span className="flex items-start justify-between gap-3">
                        {faq.question}
                        <span className="text-sg-accent transition group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <p className="mt-3 text-[14px] leading-[1.65] text-sg-text-mid">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-wrap gap-2">
              {page.keywords.slice(0, 12).map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-sg-pill border border-sg-border bg-sg-panel-2 px-3 py-1 text-[11px] font-semibold text-sg-text-dim sm:text-xs"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </Reveal>

          {related.length > 0 ? (
            <Reveal>
              <div className="mt-12">
                <div className="sg-eyebrow mb-4">Related pages</div>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={getDiscoverPath(item.slug)}
                        className="block rounded-sg-md border border-sg-border bg-sg-panel px-4 py-3 text-sm font-semibold text-sg-accent transition hover:border-sg-accent/45"
                      >
                        {item.headline}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>
    </main>
  );
}
