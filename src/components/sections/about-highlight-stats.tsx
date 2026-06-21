"use client";

import { AnimatedNumber } from "@/components/ui/animated-number";
import { useInView } from "@/hooks/use-in-view";

export function AboutHighlightStats() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2 sm:inset-x-5 sm:bottom-5 sm:flex sm:flex-wrap sm:gap-3">
      <div className="rounded-sg-md border border-white/12 bg-sg-surface/82 p-3 backdrop-blur-sm sm:min-w-[120px] sm:flex-1 sm:p-4">
        <div className="font-display text-lg font-extrabold text-white sm:text-[22px]">
          <AnimatedNumber value={10} suffix="+" start={inView} duration={1400} />
        </div>
        <div className="mt-0.5 text-[11px] text-sg-text-soft sm:text-[12.5px]">
          Solution areas, one roof
        </div>
      </div>
      <div className="rounded-sg-md border border-white/12 bg-sg-surface/82 p-3 backdrop-blur-sm sm:min-w-[120px] sm:flex-1 sm:p-4">
        <div className="font-display text-lg font-extrabold text-sg-cyan sm:text-[22px]">
          Gov-grade
        </div>
        <div className="mt-0.5 text-[11px] text-sg-text-soft sm:text-[12.5px]">
          Courts, CTD & Safe City
        </div>
      </div>
    </div>
  );
}
