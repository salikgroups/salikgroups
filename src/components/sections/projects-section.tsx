import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { projects } from "@/content/projects";
import { getProjectPath } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="projects" className="sg-section-x pb-16 pt-5 sm:pb-[110px]">
      <div className="mx-auto max-w-[var(--spacing-container)]">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-[46px] sm:gap-6">
            <div className="max-w-[620px]">
              <div className="sg-eyebrow mb-3 sm:mb-4">Proven delivery</div>
              <h2 className="sg-heading text-[clamp(24px,3.4vw,42px)] leading-[1.1]">
                Featured projects
              </h2>
            </div>
            <p className="max-w-[340px] text-sm text-sg-text-dim sm:text-[15px]">
              Government, courts and industry — delivered through survey, installation,
              testing and structured handover.
            </p>
          </div>
        </Reveal>

        <div className="sg-grid-cards-wide">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 60} className="h-full">
              <TiltCard className="group relative h-full min-h-[260px] overflow-hidden rounded-sg-xl border border-white/10 bg-sg-surface sm:min-h-[320px]">
                <Link
                  href={getProjectPath(project.slug)}
                  className="relative block h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,16,40,0.98)_0%,rgba(8,16,40,0.92)_38%,rgba(8,16,40,0.55)_62%,rgba(8,16,40,0.2)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-[#0a1430] via-[rgba(10,20,48,0.92)] to-transparent" />

                  <div className="relative flex h-full min-h-[260px] flex-col justify-end p-4 sm:min-h-[320px] sm:p-[26px]">
                    <div className="rounded-sg-lg border border-white/10 bg-[rgba(10,20,48,0.72)] p-3 backdrop-blur-[2px] sm:p-4">
                      <Badge className="mb-2.5 text-[10px] sm:mb-3 sm:text-sm">{project.tag}</Badge>
                      <h3 className="font-display text-base font-bold leading-snug text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-[21px]">
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-xs leading-[1.6] text-[#d8e0f0] sm:line-clamp-4 sm:text-sm">
                        {project.description}
                      </p>
                      <span className="mt-3 inline-flex text-xs font-bold text-sg-accent sm:mt-4 sm:text-sm">
                        View project details →
                      </span>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
