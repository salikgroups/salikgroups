"use client";

import { cn } from "@/lib/cn";
import { useEffect, useRef, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = ref.current;
    if (!card || window.matchMedia("(hover: none)").matches) return;

    const onMove = (event: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-6px)`;
      card.style.borderColor = "rgba(244,159,28,0.45)";
      card.style.boxShadow = "0 24px 50px rgba(0,0,0,0.4)";
    };

    const onLeave = () => {
      card.style.transform = "";
      card.style.borderColor = "";
      card.style.boxShadow = "";
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-transform transition-[transform,border-color,box-shadow] duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
