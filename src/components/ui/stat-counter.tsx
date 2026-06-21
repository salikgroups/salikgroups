"use client";

import { cn } from "@/lib/cn";
import { useInView, usePrefersReducedMotion } from "@/hooks/use-in-view";
import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: number;
  suffix?: string;
  accentSuffix?: string;
  label: string;
  className?: string;
  start?: boolean;
  delay?: number;
  duration?: number;
};

export function StatCounter({
  value,
  suffix = "",
  accentSuffix,
  label,
  className,
  start,
  delay = 0,
  duration = 1600,
}: StatCounterProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 });
  const reducedMotion = usePrefersReducedMotion();
  const shouldStart = start ?? inView;
  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  const shownValue = reducedMotion && shouldStart ? value : display;

  useEffect(() => {
    if (!shouldStart || started.current || reducedMotion) return;
    started.current = true;

    let raf = 0;
    const timeout = window.setTimeout(() => {
      const t0 = performance.now();

      const step = (time: number) => {
        const progress = Math.min((time - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));

        if (progress < 1) {
          raf = requestAnimationFrame(step);
        }
      };

      raf = requestAnimationFrame(step);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [delay, duration, reducedMotion, shouldStart, value]);

  return (
    <div ref={ref} className={className}>
      <div className="font-display text-[24px] font-extrabold text-white sm:text-[28px]">
        {shownValue}
        {suffix}
        {accentSuffix ? (
          <span className="text-sg-accent">{accentSuffix}</span>
        ) : null}
      </div>
      <div className="mt-0.5 text-[12px] text-[#7c89a8] sm:text-[13px]">{label}</div>
    </div>
  );
}

export function StatDivider() {
  return <div className="hidden h-auto w-px bg-white/12 sm:block" />;
}

export function Marquee({
  children,
  className,
  speed = "normal",
}: {
  children: React.ReactNode;
  className?: string;
  speed?: "normal" | "slow";
}) {
  return (
    <div className={cn("group overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max gap-14 whitespace-nowrap",
          speed === "slow" ? "animate-sg-marquee-slow" : "animate-sg-marquee",
          "group-hover-pause-marquee",
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

export function MarqueeDiamond() {
  return <span className="text-sg-accent">◆</span>;
}
