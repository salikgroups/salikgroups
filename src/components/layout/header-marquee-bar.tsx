import { Marquee, MarqueeDiamond } from "@/components/ui/stat-counter";
import { trustMarqueeItems } from "@/content/services";

export function HeaderMarqueeBar() {
  return (
    <div className="overflow-hidden border-b border-sg-border bg-[var(--sg-nav-bg)] py-2.5 backdrop-blur-[14px] sm:py-3">
      <Marquee>
        <div className="flex items-center gap-8 font-display text-[12px] font-semibold uppercase tracking-wide text-[#f3f6fc] sm:gap-[54px] sm:text-[13px]">
          {trustMarqueeItems.map((item) => (
            <span key={item} className="flex items-center gap-8 sm:gap-[54px]">
              <span>{item}</span>
              <MarqueeDiamond />
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
