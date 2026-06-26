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
    <div className={cn("text-center sm:text-left", className)}>
      <div
        className={cn(
          "mx-auto mb-5 inline-flex max-w-full items-center gap-2 rounded-sg-pill border border-white/12 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-[#cdd5ea] sm:mx-0 sm:mb-[26px] sm:gap-2.5 sm:px-4 sm:py-2 sm:text-[13px]",
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

      <p className="mx-auto mt-4 max-w-[540px] text-[clamp(15px,2.5vw,19px)] leading-[1.65] text-[#aab4cf] sm:mx-0 sm:mt-6">
        {heroSubtitle}
      </p>

      <div
        className={cn(
          "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 transition-all duration-700 sm:mt-9 sm:justify-start sm:gap-4",
          showActions ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        )}
      >
        <Button
          href="/#contact"
          className="px-3.5 py-2.5 text-xs sm:px-[30px] sm:py-4 sm:text-base"
        >
          <span className="sm:hidden">Request Survey →</span>
          <span className="hidden sm:inline">Request a Technical Survey →</span>
        </Button>
        <Button
          href="/#projects"
          variant="secondary"
          className="px-3.5 py-2.5 text-xs sm:px-[30px] sm:py-4 sm:text-base"
        >
          <span className="sm:hidden">Our Projects</span>
          <span className="hidden sm:inline">Explore Our Projects</span>
        </Button>
      </div>

      <div
        className={cn(
          "mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 transition-all duration-700 sm:mt-[46px] sm:justify-start sm:gap-[30px]",
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
              className="text-center sm:text-left"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
