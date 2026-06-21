import type { ReviewPlatform } from "@/content/reviews";
import { cn } from "@/lib/cn";

export function PlatformWordmark({
  platform,
  className,
}: {
  platform: ReviewPlatform;
  className?: string;
}) {
  switch (platform) {
    case "google":
      return (
        <span
          className={cn(
            "font-[Roboto,Arial,sans-serif] font-medium tracking-tight",
            className,
          )}
        >
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>
      );
    case "instagram":
      return (
        <span
          className={cn(
            "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] bg-clip-text font-display font-bold text-transparent",
            className,
          )}
        >
          Instagram
        </span>
      );
    case "facebook":
      return (
        <span className={cn("font-display font-bold text-[#1877F2]", className)}>
          Facebook
        </span>
      );
    case "linkedin":
      return (
        <span className={cn("font-display font-bold text-[#0A66C2]", className)}>
          LinkedIn
        </span>
      );
  }
}

export function PlatformIcon({
  platform,
  size = 18,
  className,
}: {
  platform: ReviewPlatform;
  size?: number;
  className?: string;
}) {
  switch (platform) {
    case "google":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          aria-label="Google"
          role="img"
        >
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          aria-label="Instagram"
          role="img"
        >
          <defs>
            <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F58529" />
              <stop offset="50%" stopColor="#DD2A7B" />
              <stop offset="100%" stopColor="#8134AF" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-gradient)" />
          <circle cx="12" cy="12" r="4.5" fill="none" stroke="#fff" strokeWidth="1.8" />
          <circle cx="17.2" cy="6.8" r="1.2" fill="#fff" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          aria-label="Facebook"
          role="img"
        >
          <path
            fill="#1877F2"
            d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={className}
          aria-label="LinkedIn"
          role="img"
        >
          <path
            fill="#0A66C2"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      );
  }
}
