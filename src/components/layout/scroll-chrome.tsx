"use client";

import { cn } from "@/lib/cn";

export function ScrollProgress({ progress }: { progress: number }) {
  return (
    <div
      className="fixed left-0 top-0 z-[120] h-[3px] bg-gradient-to-r from-sg-accent to-sg-accent-light shadow-[0_0_12px_rgba(244,159,28,0.6)] transition-[width] duration-150 ease-out"
      style={{ width: `${progress}%` }}
      aria-hidden
    />
  );
}

export function BackToTop({
  visible,
  onClick,
}: {
  visible: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={onClick}
      className={cn(
        "sg-safe-fixed-bottom sg-safe-fixed-left fixed z-[90] grid h-11 w-11 place-items-center rounded-sg-md border-none bg-sg-accent text-sg-hero shadow-[0_10px_26px_rgba(244,159,28,0.4)] transition-all duration-300 hover:-translate-y-0.5 sm:h-12 sm:w-12",
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-2 scale-90 opacity-0",
      )}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
