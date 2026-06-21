import { JsonLd } from "@/components/seo/json-ld";
import { homepageSeo, seoConfig } from "@/config/seo";
import {
  getLocalBusinessJsonLd,
  getOrganizationJsonLd,
} from "@/lib/seo";
import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: homepageSeo.title,
    template: "%s",
  },
  description: homepageSeo.description,
  keywords: [...homepageSeo.keywords],
  authors: [{ name: seoConfig.siteName, url: seoConfig.siteUrl }],
  creator: seoConfig.siteName,
  publisher: seoConfig.siteName,
  applicationName: seoConfig.siteName,
  category: "technology",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: seoConfig.locale,
    siteName: seoConfig.siteName,
    title: homepageSeo.title,
    description: homepageSeo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: homepageSeo.title,
    description: homepageSeo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} h-full scroll-smooth`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('sg-theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full">
        <JsonLd
          data={[getOrganizationJsonLd(), getLocalBusinessJsonLd()]}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
