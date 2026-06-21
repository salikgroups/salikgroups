import { cn } from "@/lib/cn";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex self-start rounded-sg-pill border border-sg-accent/30 bg-sg-accent/15 px-3 py-1.5 text-xs font-bold text-sg-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function PartnerChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-[9px] bg-white/94 px-[15px] py-[9px] font-display text-sm font-bold tracking-wide text-sg-surface shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
      {children}
    </span>
  );
}

export function ClientPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="shrink-0 whitespace-nowrap rounded-sg-pill border border-sg-border-soft bg-sg-panel px-5 py-[11px] text-sm font-semibold text-sg-text-soft">
      {children}
    </span>
  );
}
