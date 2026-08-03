import { teamMembers } from "@/content/media";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";

export function TeamSection() {
  const ceo = teamMembers.find((m) => m.id === "ceo");
  const md = teamMembers.find((m) => m.id === "md");
  const otherMembers = teamMembers.filter((m) => m.id !== "ceo" && m.id !== "md");

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

        {/* CEO Section (First Grid / Block) */}
        {ceo && (
          <Reveal className="mb-16">
            <article className="overflow-hidden rounded-sg-xl border border-white/10 bg-sg-panel shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
              <div className="grid grid-cols-1 items-stretch md:grid-cols-12">
                {/* Image side */}
                <div className="relative min-h-[300px] overflow-hidden bg-[#0a1430] md:col-span-5 md:min-h-[420px] lg:col-span-4">
                  <Image
                    src={ceo.image}
                    alt={ceo.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,16,40,0.6)] via-[rgba(8,16,40,0.1)] to-transparent" />
                </div>

                {/* Content side */}
                <div className="flex flex-col justify-center p-6 sm:p-8 md:col-span-7 md:p-10 lg:col-span-8">
                  <div className="sg-eyebrow mb-2 text-sg-accent">Executive leadership</div>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    {ceo.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-sg-accent">
                    {ceo.role}
                  </p>
                  
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <p className="text-base leading-[1.8] text-sg-text-soft sm:text-[17px]">
                      {ceo.bio}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        )}

        {/* MD Section (Second Grid / Block, Alternating layout) */}
        {md && (
          <Reveal className="mb-16">
            <article className="overflow-hidden rounded-sg-xl border border-white/10 bg-sg-panel shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
              <div className="grid grid-cols-1 items-stretch md:grid-cols-12">
                {/* Content side first on desktop, Image side second */}
                <div className="flex flex-col justify-center p-6 sm:p-8 md:col-span-7 md:p-10 lg:col-span-8 order-2 md:order-1">
                  <div className="sg-eyebrow mb-2 text-sg-accent">Executive leadership</div>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    {md.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-sg-accent">
                    {md.role}
                  </p>
                  
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <div className="text-base leading-[1.8] text-sg-text-soft sm:text-[17px] space-y-4">
                      {md.bio.split("\n\n").map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[300px] overflow-hidden bg-[#0a1430] md:col-span-5 md:min-h-[420px] lg:col-span-4 order-1 md:order-2">
                  <Image
                    src={md.image}
                    alt={md.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,16,40,0.6)] via-[rgba(8,16,40,0.1)] to-transparent" />
                </div>
              </div>
            </article>
          </Reveal>
        )}

        {/* Other Team Members (Bottom Grid) */}
        {otherMembers.length > 0 && (
          <div className="mt-16">
            <div className="mb-8 border-b border-white/5 pb-4">
              <h3 className="font-display text-lg font-bold tracking-wider text-sg-text-mid uppercase sm:text-xl">
                Engineering & Support Team
              </h3>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {otherMembers.map((member, index) => (
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
        )}
      </div>
    </section>
  );
}
