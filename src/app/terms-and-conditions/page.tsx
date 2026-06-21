import { Footer } from "@/components/layout/footer";
import { SiteShell } from "@/components/layout/site-shell";
import { LegalPageContent } from "@/components/pages/legal-page-content";
import { termsMeta, termsSections } from "@/content/legal";
import { buildLegalMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildLegalMetadata(
  "terms",
  termsMeta.title,
  termsMeta.description,
  "/terms-and-conditions",
);

export default function TermsPage() {
  return (
    <SiteShell>
      <LegalPageContent
        eyebrow="Legal"
        title={termsMeta.title}
        lastUpdated={termsMeta.lastUpdated}
        sections={termsSections}
      />
      <Footer />
    </SiteShell>
  );
}
