import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";

type LegalSection = {
  title: string;
  paragraphs: readonly string[];
  list?: readonly string[];
};

type LegalPageContentProps = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  sections: readonly LegalSection[];
};

export function LegalPageContent({
  eyebrow,
  title,
  lastUpdated,
  sections,
}: LegalPageContentProps) {
  return (
    <main className="sg-section-x pb-16 pt-8 sm:pb-20 sm:pt-10">
      <div className="mx-auto max-w-[780px]">
        <Reveal>
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-sg-text-dim">
            <Link href="/" className="transition-colors hover:text-sg-accent">
              Home
            </Link>
            <span>/</span>
            <span className="text-sg-text-mid">{title}</span>
          </nav>
        </Reveal>

        <Reveal delay={60}>
          <p className="sg-eyebrow mb-3">{eyebrow}</p>
          <h1 className="sg-heading text-[clamp(28px,4vw,44px)] leading-[1.1]">{title}</h1>
          <p className="mt-3 text-sm text-sg-text-dim">Last updated: {lastUpdated}</p>
        </Reveal>

        <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 40}>
              <section className="sg-card">
                <h2 className="font-display text-lg font-bold text-sg-text-hi sm:text-xl">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[14px] leading-[1.7] text-sg-text-mid sm:text-[15px]">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {"list" in section && section.list ? (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[14px] leading-[1.65] text-sg-text-mid sm:text-[15px]">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
