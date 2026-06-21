import { Footer } from "@/components/layout/footer";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServiceNotFound() {
  return (
    <SiteShell>
      <main className="flex min-h-[50vh] flex-col items-center justify-center px-[var(--spacing-section-x)] py-20 text-center">
        <div className="sg-eyebrow mb-4">404</div>
        <h1 className="sg-heading text-3xl">Service not found</h1>
        <p className="mt-4 max-w-md text-sg-text-mid">
          The service page you requested does not exist. Browse our available solutions below.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/#services">View Services</Button>
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-sg-accent">
            Back to home →
          </Link>
        </div>
      </main>
      <Footer />
    </SiteShell>
  );
}
