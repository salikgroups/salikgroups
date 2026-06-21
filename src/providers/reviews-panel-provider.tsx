"use client";

import type { ReviewPlatform } from "@/content/reviews";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ReviewsPanelContextValue = {
  open: boolean;
  platform: ReviewPlatform;
  openPanel: (platform?: ReviewPlatform) => void;
  closePanel: () => void;
  setPlatform: (platform: ReviewPlatform) => void;
};

const ReviewsPanelContext = createContext<ReviewsPanelContextValue | null>(null);

export function ReviewsPanelProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [platform, setPlatform] = useState<ReviewPlatform>("google");

  const openPanel = useCallback((nextPlatform: ReviewPlatform = "google") => {
    setPlatform(nextPlatform);
    setOpen(true);
  }, []);

  const closePanel = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      open,
      platform,
      openPanel,
      closePanel,
      setPlatform,
    }),
    [closePanel, open, openPanel, platform],
  );

  return (
    <ReviewsPanelContext.Provider value={value}>{children}</ReviewsPanelContext.Provider>
  );
}

export function useReviewsPanel() {
  const context = useContext(ReviewsPanelContext);

  if (!context) {
    throw new Error("useReviewsPanel must be used within ReviewsPanelProvider");
  }

  return context;
}
