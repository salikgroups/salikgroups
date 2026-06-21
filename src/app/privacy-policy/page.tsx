import { Footer } from "@/components/layout/footer";
import { SiteShell } from "@/components/layout/site-shell";
import { LegalPageContent } from "@/components/pages/legal-page-content";
import {
  privacyPolicyMeta,
  privacyPolicySections,
} from "@/content/legal";
import { buildLegalMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildLegalMetadata(
  "privacy",
  privacyPolicyMeta.title,
  privacyPolicyMeta.description,
  "/privacy-policy",
);

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <LegalPageContent
        eyebrow="Legal"
        title={privacyPolicyMeta.title}
        lastUpdated={privacyPolicyMeta.lastUpdated}
        sections={privacyPolicySections}
      />
      <Footer />
    </SiteShell>
  );
}
