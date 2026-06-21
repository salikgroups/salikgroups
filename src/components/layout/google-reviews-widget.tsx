"use client";

import { PlatformIcon, PlatformWordmark } from "@/components/ui/platform-brand";
import {
  getReviewsByPlatform,
  platformReviewSummaries,
  reviewPlatforms,
  reviewsBusinessName,
  type ReviewPlatform,
} from "@/content/reviews";
import { cn } from "@/lib/cn";
import { useReviewsPanel } from "@/providers/reviews-panel-provider";
import { useEffect } from "react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={index < rating ? "#fbbc04" : "#dadce0"}
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const platformTabLabels: Record<ReviewPlatform, string> = {
  google: "Google",
  instagram: "Instagram",
  facebook: "Facebook",
  linkedin: "LinkedIn",
};

export function GoogleReviewsWidget() {
  const { open, platform, closePanel, setPlatform } = useReviewsPanel();
  const summary = platformReviewSummaries[platform];
  const reviews = getReviewsByPlatform(platform);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closePanel, open]);

  return (
    <>
      {open ? (
        <button
          type="button"
          aria-label="Close reviews"
          className="fixed inset-0 z-[115] bg-black/40 backdrop-blur-[2px]"
          onClick={closePanel}
        />
      ) : null}

      <div className="fixed right-0 top-1/2 z-[120] flex -translate-y-1/2 flex-col items-end max-sm:top-auto max-sm:bottom-24 max-sm:translate-y-0">
        {open ? (
          <div
            className="mb-2 mr-2 w-[min(400px,calc(100vw-1rem))] overflow-hidden rounded-2xl border border-[#dadce0] bg-white shadow-[0_12px_40px_rgba(60,64,67,0.28)] sm:mb-3 sm:mr-3 sm:w-[min(400px,calc(100vw-72px))]"
            role="dialog"
            aria-modal="true"
            aria-label={`${summary.label} reviews`}
          >
            <div className="border-b border-[#dadce0] bg-[#f8f9fa] px-3 py-2">
              <div className="flex gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {reviewPlatforms.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setPlatform(item)}
                    className={cn(
                      "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors",
                      platform === item
                        ? "bg-white text-[#202124] shadow-sm ring-1 ring-[#dadce0]"
                        : "text-[#5f6368] hover:bg-white/70",
                    )}
                    aria-pressed={platform === item}
                  >
                    <PlatformIcon platform={item} size={14} />
                    {platformTabLabels[item]}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-b border-[#dadce0] px-4 py-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <PlatformWordmark platform={platform} className="text-base" />
                    <span className="text-[11px] font-medium text-[#5f6368]">Reviews</span>
                  </div>
                  <h3 className="mt-1 font-[Roboto,Arial,sans-serif] text-[17px] font-medium text-[#202124]">
                    {reviewsBusinessName}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="font-[Roboto,Arial,sans-serif] text-[22px] font-medium text-[#202124]">
                      {summary.averageRating}
                    </span>
                    <StarRating rating={Math.round(summary.averageRating)} />
                    <span className="text-[13px] text-[#5f6368]">
                      {summary.totalReviews} reviews
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={closePanel}
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[#5f6368] transition-colors hover:bg-[#f1f3f4]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="max-h-[min(420px,55vh)] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#dadce0]">
              {reviews.map((review) => (
                <article
                  key={review.id}
                  className="border-b border-[#e8eaed] px-4 py-4 last:border-b-0"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: review.avatarColor }}
                    >
                      {review.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-[Roboto,Arial,sans-serif] text-[14px] font-medium text-[#202124]">
                            {review.name}
                          </div>
                          <div className="text-[12px] text-[#5f6368]">{review.date}</div>
                        </div>
                        <PlatformIcon platform={review.platform} size={16} />
                      </div>
                      <div className="mt-2">
                        <StarRating rating={review.rating} />
                      </div>
                      <p className="mt-2 font-[Roboto,Arial,sans-serif] text-[14px] leading-[1.5] text-[#3c4043]">
                        {review.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-[#dadce0] bg-[#f8f9fa] px-4 py-3">
              <a
                href={summary.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-[Roboto,Arial,sans-serif] text-[13px] font-medium text-[#1a73e8] hover:underline"
              >
                <PlatformIcon platform={platform} size={14} />
                See all reviews on {summary.label}
              </a>
            </div>
          </div>
        ) : null}

        <ReviewsSidebarButton open={open} />
      </div>
    </>
  );
}

function ReviewsSidebarButton({ open }: { open: boolean }) {
  const { openPanel, closePanel } = useReviewsPanel();

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-label={open ? "Close reviews" : "Show reviews"}
      onClick={() => (open ? closePanel() : openPanel())}
      className={cn(
        "flex flex-col items-center gap-2 rounded-l-2xl rounded-r-none bg-[#111111] px-3 py-5 font-[Roboto,Arial,sans-serif] text-[13px] font-semibold tracking-[0.12em] text-white shadow-[-6px_0_28px_rgba(0,0,0,0.4)] transition-transform hover:-translate-x-1 sm:gap-3 sm:px-4 sm:py-7 sm:text-[15px] sm:tracking-[0.14em]",
        open && "ring-2 ring-white/20 ring-offset-2 ring-offset-transparent",
      )}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#fbbc04" aria-hidden className="sm:h-[22px] sm:w-[22px]">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <span className="[writing-mode:vertical-rl] rotate-180">Review</span>
    </button>
  );
}
