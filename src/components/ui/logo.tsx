import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md";
  variant?: "emblem" | "full";
  className?: string;
  priority?: boolean;
};

export function Logo({
  size = "md",
  variant = "full",
  className,
  priority = false,
}: LogoProps) {
  const isEmblem = variant === "emblem";
  const src = isEmblem ? siteConfig.emblemSrc : siteConfig.logoSrc;

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={src}
        alt={`${siteConfig.name} logo`}
        width={isEmblem ? 403 : 941}
        height={370}
        priority={priority}
        className={cn(
          "h-auto w-auto object-contain",
          isEmblem
            ? size === "sm"
              ? "max-h-[48px] sm:max-h-[56px]"
              : "max-h-[44px] sm:max-h-[52px] md:max-h-[60px]"
            : size === "sm"
              ? "max-h-[56px] sm:max-h-[72px]"
              : "max-h-[56px] sm:max-h-[72px] md:max-h-[88px]",
        )}
      />
    </span>
  );
}
