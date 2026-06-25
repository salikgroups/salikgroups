import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "className">;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-sg-accent text-sg-hero shadow-[0_12px_34px_rgba(244,159,28,0.32)] hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(244,159,28,0.38)]",
  secondary:
    "border border-white/16 bg-white/5 text-sg-text-hi hover:bg-white/10",
  ghost:
    "border border-sg-border bg-sg-panel text-sg-text-hi hover:border-sg-accent/45",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sg-pill px-[30px] py-4 text-base font-bold transition-[transform,box-shadow,background-color,border-color] duration-200";

export function Button({
  variant = "primary",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export function NavCta({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-sg-pill bg-sg-accent px-5 py-[11px] text-sm font-bold text-sg-hero shadow-[0_8px_24px_rgba(244,159,28,0.28)] transition-transform hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </Link>
  );
}
