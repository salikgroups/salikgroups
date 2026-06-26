"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type ImageGalleryProps = {
  images: string[];
  altPrefix: string;
  className?: string;
};

export function ImageGallery({ images, altPrefix, className }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      if (images.length === 0) return;
      const nextIndex = (index + images.length) % images.length;
      setActiveIndex(nextIndex);
    },
    [images.length],
  );

  const goPrevious = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrevious();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrevious]);

  useEffect(() => {
    const container = thumbnailsRef.current;
    const activeThumb = container?.querySelector<HTMLElement>(
      `[data-thumb-index="${activeIndex}"]`,
    );
    activeThumb?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeIndex]);

  if (images.length === 0) {
    return null;
  }

  const activeImage = images[activeIndex] ?? images[0];
  const showControls = images.length > 1;

  return (
    <div className={cn("space-y-4", className)}>
      <div className="relative overflow-hidden rounded-sg-xl border border-white/10 bg-sg-surface">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={activeImage}
            alt={`${altPrefix} ${activeIndex + 1}`}
            fill
            className="object-contain bg-[#060d1f]"
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority={activeIndex === 0}
          />
        </div>

        {showControls ? (
          <>
            <button
              type="button"
              onClick={goPrevious}
              className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/12 bg-[rgba(10,20,48,0.82)] text-xl text-white backdrop-blur-sm transition hover:border-sg-accent/45 hover:text-sg-accent sm:left-4 sm:h-12 sm:w-12"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/12 bg-[rgba(10,20,48,0.82)] text-xl text-white backdrop-blur-sm transition hover:border-sg-accent/45 hover:text-sg-accent sm:right-4 sm:h-12 sm:w-12"
              aria-label="Next photo"
            >
              ›
            </button>
          </>
        ) : null}

        <div className="absolute bottom-3 right-3 rounded-sg-pill border border-white/12 bg-[rgba(10,20,48,0.78)] px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          Photo {activeIndex + 1} of {images.length}
        </div>
      </div>

      {showControls ? (
        <div
          ref={thumbnailsRef}
          className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              data-thumb-index={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative h-20 w-28 shrink-0 overflow-hidden rounded-sg-md border bg-sg-surface transition sm:h-24 sm:w-32",
                activeIndex === index
                  ? "border-sg-accent ring-2 ring-sg-accent/35"
                  : "border-white/10 hover:border-sg-accent/45",
              )}
              aria-label={`View photo ${index + 1}`}
              aria-current={activeIndex === index}
            >
              <Image
                src={image}
                alt={`${altPrefix} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="128px"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
