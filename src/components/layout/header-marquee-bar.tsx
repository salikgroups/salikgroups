import { Marquee, MarqueeDiamond } from "@/components/ui/stat-counter";
import { trustMarqueeItems } from "@/content/services";
import { cn } from "@/lib/cn";

export function HeaderMarqueeBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden border-b border-sg-border bg-[var(--sg-nav-bg)] py-2 backdrop-blur-[14px] sm:py-2.5 md:py-3",
        className,
      )}
    >
      <Marquee>
        <div className="flex items-center gap-6 font-display text-[11px] font-semibold uppercase tracking-wide text-[#f3f6fc] sm:gap-10 sm:text-[12px] md:gap-[54px] md:text-[13px]">
          {trustMarqueeItems.map((item) => (
            <span key={item} className="flex items-center gap-6 sm:gap-10 md:gap-[54px]">
              <span>{item}</span>
              <MarqueeDiamond />
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
