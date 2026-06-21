import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  children?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
  children,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-[680px] text-center",
        align === "left" && "max-w-[620px] text-left",
        className,
      )}
    >
      <div className="sg-eyebrow mb-4">{eyebrow}</div>
      <h2
        className={cn(
          "sg-heading text-[clamp(26px,3.2vw,44px)] leading-[1.1]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="sg-body mt-3 text-[15px] sm:mt-4 sm:text-[17px]">{description}</p>
      ) : null}
      {children}
    </div>
  );
}
