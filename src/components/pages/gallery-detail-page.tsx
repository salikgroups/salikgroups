import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/components/ui/image-gallery";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import type { FieldWorkShowcase } from "@/types/content";
import Image from "next/image";
import Link from "next/link";

type GalleryDetailPageProps = {
  showcase: FieldWorkShowcase;
};

export function GalleryDetailPage({ showcase }: GalleryDetailPageProps) {
  return (
    <main>
      <section className="relative overflow-hidden bg-sg-hero sg-section-x pb-12 pt-8 text-[#f3f6fc] sm:pb-16 sm:pt-10">
        <Image
          src={showcase.images[0]}
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
            <Link href="/#field-work" className="transition-colors hover:text-sg-accent">
              Field work
            </Link>
            <span>/</span>
            <span className="text-sg-accent">{showcase.title}</span>
          </nav>

          <Reveal>
            <Badge className="mb-4">{showcase.tag}</Badge>
            <h1 className="font-display text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.05] tracking-[-0.04em]">
              {showcase.title}
            </h1>
            <p className="mt-5 max-w-[720px] text-[clamp(15px,1.5vw,18px)] leading-[1.65] text-[#aab4cf]">
              {showcase.description}
            </p>
            <p className="mt-4 text-sm font-semibold text-sg-accent">
              {showcase.images.length} site photo{showcase.images.length === 1 ? "" : "s"}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button href="/#contact" className="w-full justify-center sm:w-auto">
                Request a Survey →
              </Button>
              <Button href="/#field-work" variant="secondary" className="w-full justify-center sm:w-auto">
                Back to field work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sg-section-x sg-section-y">
        <div className="mx-auto max-w-[var(--spacing-container)]">
          <Reveal>
            <div className="mb-8 max-w-[620px] sm:mb-10">
              <div className="sg-eyebrow mb-4">Site photos</div>
              <h2 className="sg-heading text-[clamp(24px,3vw,36px)] leading-[1.12]">
                Browse installation photos from this deployment.
              </h2>
              <p className="mt-3 text-sm leading-[1.65] text-sg-text-dim sm:text-[15px]">
                Use the arrows or click a thumbnail below to view each photo in the main panel.
              </p>
            </div>
          </Reveal>

          <ImageGallery images={showcase.images} altPrefix={showcase.title} />
        </div>
      </section>
    </main>
  );
}
