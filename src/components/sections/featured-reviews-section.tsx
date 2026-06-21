"use client";

import { PlatformIcon, PlatformWordmark } from "@/components/ui/platform-brand";
import { Reveal } from "@/components/ui/reveal";
import { SurfaceCard } from "@/components/ui/surface-card";
import { GoogleStarRow } from "@/components/ui/stars";
import { getFeaturedReviews, getTotalReviewCount, reviewPlatforms } from "@/content/reviews";
import { useReviewsPanel } from "@/providers/reviews-panel-provider";

const featuredReviews = getFeaturedReviews();

function ViewAllReviewsButton() {
  const { openPanel } = useReviewsPanel();

  return (
    <button
      type="button"
      onClick={() => openPanel("google")}
      className="sg-touch-target mt-5 inline-flex items-center text-sm font-semibold text-sg-accent transition-colors hover:underline sm:mt-6"
    >
      View all reviews →
    </button>
  );
}

export function FeaturedReviewsSection() {
  return (
    <section className="sg-section-x sg-section-y">
      <div className="mx-auto max-w-[var(--spacing-container)]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-10">
          <Reveal>
            <div className="text-center lg:text-left">
              <div className="font-display text-xl font-extrabold uppercase tracking-wide text-sg-text-hi sm:text-2xl">
                Excellent
              </div>
              <div className="mt-3 flex justify-center lg:justify-start">
                <GoogleStarRow size={20} />
              </div>
              <p className="mt-3 text-sm text-sg-text-mid">
                Based on{" "}
                <span className="font-semibold text-sg-text-hi underline decoration-sg-border underline-offset-4">
                  {getTotalReviewCount()} reviews
                </span>
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:mt-5 sm:gap-3 lg:justify-start">
                {reviewPlatforms.map((platform) => (
                  <PlatformWordmark
                    key={platform}
                    platform={platform}
                    className="text-sm sm:text-base"
                  />
                ))}
              </div>
              <ViewAllReviewsButton />
            </div>
          </Reveal>

          <div className="sg-grid-cards">
            {featuredReviews.map((review, index) => (
              <Reveal key={review.id} delay={index * 80} className="h-full">
                <SurfaceCard className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                      <div
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-semibold text-white sm:h-10 sm:w-10 sm:text-sm"
                        style={{ backgroundColor: review.avatarColor }}
                      >
                        {review.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="truncate font-display text-xs font-bold text-sg-text-hi sm:text-sm">
                          {review.name}
                        </div>
                        <div className="text-[10px] text-sg-text-dim sm:text-xs">{review.date}</div>
                      </div>
                    </div>
                    <PlatformIcon platform={review.platform} size={16} className="shrink-0 sm:h-[18px] sm:w-[18px]" />
                  </div>
                  <div className="mt-2 flex items-center gap-2 sm:mt-3">
                    <GoogleStarRow size={12} />
                    <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-[#1a73e8] text-[8px] font-bold text-white sm:h-4 sm:w-4 sm:text-[10px]">
                      ✓
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-4 flex-1 text-xs leading-[1.55] text-sg-text-mid sm:mt-3 sm:text-[14px] sm:leading-[1.6]">
                    {review.text}
                  </p>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
