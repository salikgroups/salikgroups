import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/components/ui/image-gallery";
import { Reveal } from "@/components/ui/reveal";
import { SeoContentSection } from "@/components/sections/seo-content-section";
import { SurfaceCard } from "@/components/ui/surface-card";
import { getProjectSeoExtension } from "@/content/seo-extensions";
import type { Project } from "@/types/content";
import Image from "next/image";
import Link from "next/link";

type ProjectDetailPageProps = {
  project: Project;
};

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const seoExtension = getProjectSeoExtension(project.slug);

  return (
    <main>
      <section className="relative overflow-hidden bg-sg-hero sg-section-x pb-12 pt-8 text-[#f3f6fc] sm:pb-16 sm:pt-10">
        <Image
          src={project.image}
          alt=""
          fill
          priority
          className="object-cover opacity-[0.22]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,20,48,0.88)] via-[rgba(10,20,48,0.78)] to-sg-hero" />

        <div className="relative mx-auto max-w-[var(--spacing-container)]">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#aab4cf]">
            <Link href="/" className="transition-colors hover:text-sg-accent">
              Home
            </Link>
            <span>/</span>
            <Link href="/#projects" className="transition-colors hover:text-sg-accent">
              Projects
            </Link>
            <span>/</span>
            <span className="text-sg-accent">{project.title}</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <Reveal>
              <div className="mb-4 inline-flex rounded-sg-pill border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold text-[#cdd5ea] sm:text-sm">
                {project.tag}
              </div>
              <h1 className="font-display text-[clamp(28px,4.5vw,54px)] font-extrabold leading-[1.05] tracking-[-0.04em]">
                {project.title}
              </h1>
              <p className="mt-5 max-w-[620px] text-[clamp(15px,1.5vw,19px)] leading-[1.65] text-[#aab4cf]">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#cdd5ea] sm:mt-8 sm:gap-4">
                <span className="rounded-sg-md border border-white/12 bg-white/6 px-3 py-2">
                  Year: {project.year}
                </span>
                <span className="rounded-sg-md border border-white/12 bg-white/6 px-3 py-2">
                  {project.location}
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                <Button href="/#contact" className="w-full justify-center sm:w-auto">
                  Discuss a Similar Project →
                </Button>
                <Button href="/#projects" variant="secondary" className="w-full justify-center sm:w-auto">
                  Back to Projects
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative min-h-[240px] overflow-hidden rounded-sg-xl border border-white/10 sm:min-h-[280px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,20,48,0.65)] to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {project.gallery.length > 0 ? (
        <section
          id="gallery"
          className="border-y border-sg-border-soft bg-sg-panel-2 sg-section-x sg-section-y scroll-mt-28"
        >
          <div className="mx-auto max-w-[var(--spacing-container)]">
            <Reveal>
              <div className="mb-8 max-w-[620px] sm:mb-12">
                <div className="sg-eyebrow mb-4">Project gallery</div>
                <h2 className="sg-heading text-[clamp(24px,3vw,38px)] leading-[1.12]">
                  On-site photos from this deployment.
                </h2>
                <p className="mt-3 text-sm leading-[1.65] text-sg-text-dim sm:text-[15px]">
                  Use the arrows or click a thumbnail below to view each photo in the main panel.
                </p>
              </div>
            </Reveal>

            <ImageGallery images={project.gallery} altPrefix={project.title} />
          </div>
        </section>
      ) : null}

      <section className="sg-section-x sg-section-y">
        <div className="mx-auto grid max-w-[var(--spacing-container)] grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal>
            <div className="sg-eyebrow mb-4">Project overview</div>
            <h2 className="sg-heading mb-6 text-[clamp(24px,3vw,38px)] leading-[1.12]">
              Scope, execution and outcomes.
            </h2>
            <div className="space-y-5">
              {project.overview.map((paragraph) => (
                <p key={paragraph} className="sg-body text-[15px] sm:text-[17px]">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SurfaceCard>
              <div className="sg-eyebrow mb-4">Project details</div>
              <dl className="space-y-4">
                <DetailRow label="Client" value={project.client} />
                <DetailRow label="Location" value={project.location} />
                <DetailRow label="Year" value={project.year} />
                <DetailRow label="Category" value={project.tag} />
              </dl>
            </SurfaceCard>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-sg-border-soft bg-sg-panel-2 sg-section-x sg-section-y">
        <div className="mx-auto max-w-[var(--spacing-container)]">
          <Reveal>
            <div className="mb-8 max-w-[620px] sm:mb-12">
              <div className="sg-eyebrow mb-4">Key highlights</div>
              <h2 className="sg-heading text-[clamp(24px,3vw,38px)] leading-[1.12]">
                What this project delivered.
              </h2>
            </div>
          </Reveal>

          <div className="sg-grid-2 lg:grid-cols-3">
            {project.highlights.map((item, index) => (
              <Reveal key={item} delay={index * 40}>
                <SurfaceCard className="h-full">
                  <div className="mb-3 font-display text-sm font-extrabold text-sg-accent">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-[14px] leading-[1.65] text-sg-text-mid sm:text-[15px]">{item}</p>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section-x sg-section-y">
        <div className="mx-auto max-w-[var(--spacing-container)]">
          <Reveal>
            <div className="mb-8 max-w-[620px] sm:mb-10">
              <div className="sg-eyebrow mb-4">Deliverables</div>
              <h2 className="sg-heading text-[clamp(24px,3vw,38px)] leading-[1.12]">
                From survey to handover.
              </h2>
            </div>
          </Reveal>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.deliverables.map((item, index) => (
              <Reveal key={item} delay={index * 40}>
                <li className="flex items-start gap-3 rounded-sg-md border border-sg-border bg-sg-panel px-4 py-4 text-[14px] leading-[1.6] text-sg-text-mid sm:px-5 sm:text-[15px]">
                  <span className="mt-0.5 text-sg-accent">✓</span>
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {seoExtension ? <SeoContentSection extension={seoExtension} /> : null}
    </main>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[1px] text-sg-text-dim">{label}</dt>
      <dd className="mt-1 text-[15px] leading-[1.55] text-sg-text-hi">{value}</dd>
    </div>
  );
}
