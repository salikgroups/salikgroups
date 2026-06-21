import { Reveal } from "@/components/ui/reveal";
import { deliveryFeatures } from "@/content/trust";

function FeatureIcon({ type }: { type: (typeof deliveryFeatures)[number]["icon"] }) {
  const className = "h-6 w-6 text-sg-accent sm:h-8 sm:w-8";

  switch (type) {
    case "survey":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3 4 7v6c0 5 3.5 8 8 8s8-3 8-8V7l-8-4z" />
          <circle cx="12" cy="11" r="2.5" />
        </svg>
      );
    case "install":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "integrate":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="2.4" />
          <circle cx="5" cy="5" r="1.8" />
          <circle cx="19" cy="5" r="1.8" />
          <circle cx="5" cy="19" r="1.8" />
          <circle cx="19" cy="19" r="1.8" />
          <path d="M10.3 10.3 6.3 6.3M13.7 10.3l4-4M10.3 13.7l-4 4M13.7 13.7l4 4" />
        </svg>
      );
    case "support":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
      );
  }
}

export function FeaturesStripSection() {
  return (
    <section className="border-y border-sg-border bg-sg-surface sg-section-x py-8 sm:py-12">
      <div className="mx-auto max-w-[var(--spacing-container)]">
        <Reveal>
          <p className="sg-eyebrow mb-6 text-center sm:mb-8">How every project is delivered</p>
        </Reveal>
        <div className="sg-grid-2 lg:grid-cols-4">
          {deliveryFeatures.map((feature, index) => (
            <Reveal key={feature.id} delay={index * 70}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 grid h-12 w-12 place-items-center rounded-sg-md border border-sg-border bg-sg-panel-2 sm:mb-4 sm:h-16 sm:w-16">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="font-display text-[13px] font-bold text-sg-text-hi sm:text-[15px]">
                  {feature.title}
                </h3>
                <p className="mt-1.5 max-w-[200px] text-[11px] leading-[1.55] text-sg-text-dim sm:mt-2 sm:text-[13px]">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
