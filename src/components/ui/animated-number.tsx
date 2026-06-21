"use client";

import { cn } from "@/lib/cn";
import { useInView, usePrefersReducedMotion } from "@/hooks/use-in-view";
import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  start?: boolean;
};

export function AnimatedNumber({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1600,
  delay = 0,
  className,
  start = true,
}: AnimatedNumberProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  const shownValue = reducedMotion && start ? value : display;

  useEffect(() => {
    if (!start || started.current || reducedMotion) return;
    started.current = true;

    let raf = 0;
    const timeout = window.setTimeout(() => {
      const t0 = performance.now();

      const step = (time: number) => {
        const progress = Math.min((time - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const next = value * eased;
        setDisplay(decimals > 0 ? Number(next.toFixed(decimals)) : Math.round(next));

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
  }, [decimals, delay, duration, reducedMotion, start, value]);

  const formatted =
    decimals > 0 ? shownValue.toFixed(decimals) : String(shownValue);

  return (
    <span className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

type AnimatedStatProps = {
  displayValue: string;
  className?: string;
  valueClassName?: string;
  delay?: number;
};

export function parseStatDisplayValue(displayValue: string) {
  const match = displayValue.match(/^([^0-9.-]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);

  if (!match) {
    return {
      prefix: "",
      value: 0,
      suffix: displayValue,
      decimals: 0,
    };
  }

  const [, prefix, numeric, suffix] = match;
  const value = Number(numeric);
  const decimals = numeric.includes(".") ? numeric.split(".")[1]?.length ?? 0 : 0;

  return { prefix, value, suffix, decimals };
}

export function AnimatedStatValue({
  displayValue,
  className,
  valueClassName,
  delay = 0,
}: AnimatedStatProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const parsed = parseStatDisplayValue(displayValue);

  return (
    <span ref={ref} className={className}>
      <AnimatedNumber
        value={parsed.value}
        decimals={parsed.decimals}
        prefix={parsed.prefix}
        suffix={parsed.suffix}
        delay={delay}
        start={inView}
        className={cn("font-display font-extrabold text-sg-accent", valueClassName)}
      />
    </span>
  );
}
