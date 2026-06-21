import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md";
  className?: string;
  priority?: boolean;
};

export function Logo({ size = "md", className, priority = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={siteConfig.logoSrc}
        alt={`${siteConfig.name} logo`}
        width={941}
        height={370}
        priority={priority}
        className={cn(
          "h-auto w-auto object-contain",
          size === "sm"
            ? "max-h-[56px] sm:max-h-[72px]"
            : "max-h-[56px] sm:max-h-[72px] md:max-h-[88px]",
        )}
      />
    </span>
  );
}
