import { Marquee, MarqueeDiamond } from "@/components/ui/stat-counter";
import { trustMarqueeItems } from "@/content/services";

export function TrustMarqueeSection() {
  return (
    <div className="overflow-hidden border-y border-sg-border-soft bg-sg-panel-2 py-4 sm:py-[22px]">
      <Marquee>
        <div className="flex items-center gap-8 font-display text-[13px] font-semibold text-sg-text-dim sm:gap-[54px] sm:text-[15px]">
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
