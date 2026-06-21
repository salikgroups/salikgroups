"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <h1 className="text-2xl font-semibold text-[var(--sg-text)]">
        Something went wrong
      </h1>
      <p className="text-sm text-[var(--sg-muted)]">
        {error.message || "We could not load this page right now."}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full bg-[var(--sg-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
      >
        Try again
      </button>
    </main>
  );
}
