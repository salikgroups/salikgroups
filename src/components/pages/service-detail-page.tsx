import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/components/ui/image-gallery";
import { ServiceIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/content/process";
import type { Service } from "@/types/content";
import Image from "next/image";
import Link from "next/link";

type ServiceDetailPageProps = {
  service: Service;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <main>
      <section className="relative overflow-hidden bg-sg-hero sg-section-x pb-12 pt-8 text-[#f3f6fc] sm:pb-16 sm:pt-10">
        <Image
          src={service.image}
          alt=""
          fill
          priority
          className="object-cover opacity-[0.18]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,20,48,0.82)] via-[rgba(10,20,48,0.72)] to-sg-hero" />

        <div className="relative mx-auto max-w-[var(--spacing-container)]">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#aab4cf]">
            <Link href="/" className="transition-colors hover:text-sg-accent">
              Home
            </Link>
            <span>/</span>
            <Link href="/#services" className="transition-colors hover:text-sg-accent">
              Services
            </Link>
            <span>/</span>
            <span className="text-sg-accent">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="grid h-14 w-14 place-items-center rounded-sg-md border border-sg-accent/45 bg-sg-surface text-sg-accent shadow-[0_10px_22px_rgba(0,0,0,0.45)]">
                  <ServiceIcon icon={service.icon} className="h-7 w-7" />
                </span>
                <span className="sg-eyebrow mb-0">Service detail</span>
              </div>
              <h1 className="font-display text-[clamp(32px,4.5vw,54px)] font-extrabold leading-[1.05] tracking-[-0.04em]">
                {service.title}
              </h1>
              <p className="mt-5 max-w-[620px] text-[clamp(16px,1.5vw,19px)] leading-[1.65] text-[#aab4cf]">
                {service.tagline}
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

            <Reveal delay={120}>
              <div className="relative min-h-[280px] overflow-hidden rounded-sg-xl border border-white/10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,20,48,0.55)] to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {service.gallery && service.gallery.length > 0 ? (
        <section
          id="gallery"
          className="border-y border-sg-border-soft bg-sg-panel-2 sg-section-x sg-section-y scroll-mt-28"
        >
          <div className="mx-auto max-w-[var(--spacing-container)]">
            <Reveal>
              <div className="mb-8 max-w-[620px] sm:mb-12">
                <div className="sg-eyebrow mb-4">Field photos</div>
                <h2 className="sg-heading text-[clamp(24px,3vw,38px)] leading-[1.12]">
                  Recent installation work for this service.
                </h2>
                <p className="mt-3 text-sm leading-[1.65] text-sg-text-dim sm:text-[15px]">
                  Use the arrows or click a thumbnail below to view each photo in the main panel.
                </p>
              </div>
            </Reveal>

            <ImageGallery images={service.gallery} altPrefix={service.title} />
          </div>
        </section>
      ) : null}

      <section className="sg-section-x sg-section-y">
        <div className="mx-auto grid max-w-[var(--spacing-container)] grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="sg-eyebrow mb-4">Overview</div>
            <h2 className="sg-heading mb-6 text-[clamp(26px,3vw,38px)] leading-[1.12]">
              End-to-end delivery by Salik Groups & Co engineers.
            </h2>
            <div className="space-y-5">
              {service.overview.map((paragraph) => (
                <p key={paragraph} className="sg-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-sg-xl border border-sg-border bg-gradient-to-br from-sg-panel to-sg-panel-2 p-8">
              <div className="sg-eyebrow mb-4">Industries we serve</div>
              <ul className="space-y-3">
                {service.industries.map((industry) => (
                  <li
                    key={industry}
                    className="flex items-start gap-3 text-[15px] leading-[1.6] text-sg-text-mid"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sg-accent" />
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-sg-border-soft bg-sg-panel-2 sg-section-x sg-section-y">
        <div className="mx-auto max-w-[var(--spacing-container)]">
          <Reveal>
            <div className="mb-12 max-w-[620px]">
              <div className="sg-eyebrow mb-4">Capabilities</div>
              <h2 className="sg-heading text-[clamp(26px,3vw,38px)] leading-[1.12]">
                What this service includes.
              </h2>
            </div>
          </Reveal>

          <div className="sg-grid-2">
            {service.capabilities.map((item, index) => (
              <Reveal key={item} delay={index * 40}>
                <div className="rounded-sg-lg border border-sg-border bg-sg-panel p-6">
                  <div className="mb-3 font-display text-sm font-extrabold text-sg-accent">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-[15px] leading-[1.65] text-sg-text-mid">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section-x sg-section-y">
        <div className="mx-auto grid max-w-[var(--spacing-container)] grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="sg-eyebrow mb-4">Deliverables</div>
            <h2 className="sg-heading mb-6 text-[clamp(26px,3vw,38px)] leading-[1.12]">
              From survey to handover.
            </h2>
            <ul className="space-y-4">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-sg-md border border-sg-border bg-sg-panel px-5 py-4 text-[15px] leading-[1.6] text-sg-text-mid"
                >
                  <span className="mt-0.5 text-sg-accent">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="sg-eyebrow mb-4">How we work</div>
            <h2 className="sg-heading mb-6 text-[clamp(26px,3vw,38px)] leading-[1.12]">
              A disciplined delivery path.
            </h2>
            <div className="space-y-5">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-sg-lg border border-sg-border bg-sg-panel p-6"
                >
                  <div className="font-display text-sm font-extrabold text-sg-accent">
                    {step.step}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-sg-text-2">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sg-section-x pb-16 sm:pb-[100px]">
        <div className="mx-auto max-w-[var(--spacing-container)]">
          <Reveal>
            <div className="overflow-hidden rounded-sg-2xl border border-white/10 bg-gradient-to-br from-[rgba(31,55,106,0.55)] to-[rgba(10,20,48,0.3)] p-6 text-[#f3f6fc] sm:p-[clamp(34px,5vw,64px)]">
              <div className="max-w-[640px]">
                <div className="sg-eyebrow mb-4">Ready to start?</div>
                <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold leading-[1.12] tracking-[-0.04em]">
                  Plan your {service.shortLabel.toLowerCase()} project with our technical team.
                </h2>
                <p className="mt-4 text-base leading-[1.65] text-[#aab4cf]">
                  Tell us about your site and requirements — we begin every engagement with a
                  detailed survey and assessment.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Button href="/#contact" className="w-full justify-center sm:w-auto">
                    Request a Technical Survey →
                  </Button>
                  <Button href="/#projects" variant="secondary" className="w-full justify-center sm:w-auto">
                    See Related Projects
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
