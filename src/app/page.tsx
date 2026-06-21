import { HomePage } from "@/components/pages/home-page";
import { JsonLd } from "@/components/seo/json-ld";
import { buildHomeMetadata, getWebSiteJsonLd } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildHomeMetadata();

export default function Page() {
  return (
    <>
      <JsonLd data={getWebSiteJsonLd()} />
      <HomePage />
    </>
  );
}
