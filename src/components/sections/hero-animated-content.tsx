"use client";

import { Button } from "@/components/ui/button";
import { StatCounter, StatDivider } from "@/components/ui/stat-counter";
import { heroStats, heroSubtitle } from "@/content/hero";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";

type HeroAnimatedContentProps = {
  className?: string;
};

export function HeroAnimatedContent({ className }: HeroAnimatedContentProps) {
  const [showStats, setShowStats] = useState(false);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    const statsTimer = window.setTimeout(() => setShowStats(true), 1200);
    const actionsTimer = window.setTimeout(() => setShowActions(true), 600);

    return () => {
      window.clearTimeout(statsTimer);
      window.clearTimeout(actionsTimer);
    };
  }, []);

  return (
    <div className={className}>
      <div
        className={cn(
          "mb-5 inline-flex max-w-full items-center gap-2 rounded-sg-pill border border-white/12 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-[#cdd5ea] sm:mb-[26px] sm:gap-2.5 sm:px-4 sm:py-2 sm:text-[13px]",
          "animate-[sg-fade-up_0.8s_cubic-bezier(0.16,0.8,0.3,1)_both]",
        )}
      >
        <span className="animate-sg-glow h-2 w-2 shrink-0 rounded-full bg-sg-success shadow-[0_0_10px_var(--sg-success)]" />
        <span className="line-clamp-2 sm:line-clamp-none">
          Integrated electronic & energy solutions · Est. {siteConfig.established}
        </span>
      </div>

      <h1
        className={cn(
          "font-display text-[clamp(30px,8vw,68px)] font-extrabold leading-[1.05] tracking-[-0.04em] sm:leading-[1.03]",
          "animate-[sg-fade-up_0.9s_cubic-bezier(0.16,0.8,0.3,1)_0.1s_both]",
        )}
      >
        Power, security &<br />
        connectivity, <span className="text-sg-accent">engineered</span> as one.
      </h1>

      <p className="mt-4 max-w-[540px] text-[clamp(15px,2.5vw,19px)] leading-[1.65] text-[#aab4cf] sm:mt-6">
        {heroSubtitle}
      </p>

      <div
        className={cn(
          "mt-6 flex flex-col gap-3 transition-all duration-700 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4",
          showActions ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        )}
      >
        <Button href="/#contact" className="w-full justify-center sm:w-auto">
          Request a Technical Survey →
        </Button>
        <Button href="/#projects" variant="secondary" className="w-full justify-center sm:w-auto">
          Explore Our Projects
        </Button>
      </div>

      <div
        className={cn(
          "mt-8 grid grid-cols-2 gap-x-4 gap-y-5 transition-all duration-700 sm:mt-[46px] sm:flex sm:flex-wrap sm:gap-[30px]",
          showStats ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        )}
      >
        {heroStats.map((stat, index) => (
          <div key={stat.label} className="flex items-center gap-4 sm:gap-[30px]">
            {index > 0 ? <StatDivider /> : null}
            <StatCounter
              value={stat.value}
              suffix={stat.suffix}
              accentSuffix={stat.accentSuffix}
              label={stat.label}
              start={showStats}
              delay={index * 120}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
