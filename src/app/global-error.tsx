"use client";

import { siteConfig } from "@/config/site";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en" data-theme="dark">
      <body className="min-h-full bg-[#0a0f1e] text-white antialiased">
        <main className="mx-auto flex min-h-full max-w-lg flex-col items-center justify-center gap-6 px-6 py-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            {siteConfig.name}
          </p>
          <h1 className="text-3xl font-semibold">Something went wrong</h1>
          <p className="text-sm text-white/70">
            {error.message || "An unexpected error occurred while loading this page."}
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0a0f1e] transition hover:bg-white/90"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
