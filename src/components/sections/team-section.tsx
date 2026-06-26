import { teamMembers } from "@/content/media";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";

export function TeamSection() {
  return (
    <section id="team" className="border-y border-sg-border-soft bg-sg-panel-2 sg-section-x py-16 sm:py-[100px]">
      <div className="mx-auto max-w-[var(--spacing-container)]">
        <Reveal>
          <div className="mb-10 max-w-[720px] sm:mb-14">
            <div className="sg-eyebrow mb-3 sm:mb-4">Leadership & engineering</div>
            <h2 className="sg-heading text-[clamp(24px,3.4vw,42px)] leading-[1.1]">
              The people behind every installation.
            </h2>
            <p className="mt-4 text-sm leading-[1.7] text-sg-text-dim sm:text-[16px]">
              Salik Groups & Co is led by experienced technical professionals who stay
              involved from survey and design through commissioning and support.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Reveal key={member.id} delay={index * 80} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-sg-xl border border-white/10 bg-sg-panel shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#0a1430]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,16,40,0.96)] via-[rgba(8,16,40,0.35)] to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="font-display text-xl font-bold text-white sm:text-2xl">
                      {member.name}
                    </p>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-sg-accent">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-sm leading-[1.75] text-sg-text-mid sm:text-[15px]">
                    {member.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
