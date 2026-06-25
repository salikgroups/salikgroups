import { Logo } from "@/components/ui/logo";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-sg-border-soft sg-section-x pb-8 pt-10 sm:pb-10 sm:pt-[60px]">
      <div className="mx-auto grid max-w-[var(--spacing-container)] grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div className="col-span-2 lg:col-span-1">
          <Logo variant="full" size="sm" className="mb-4 sm:mb-[18px]" />
          <p className="max-w-xs text-sm leading-[1.65] text-sg-text-dim">
            {siteConfig.tagline}
          </p>
        </div>

        <FooterColumn title="Company" links={footerNav.company} />
        <FooterColumn title="Solutions" links={footerNav.solutions} />
        <FooterColumn title="Legal" links={footerNav.legal} />

        <div className="col-span-2 lg:col-span-1">
          <div className="mb-3 font-display text-sm font-bold sm:mb-4">Contact</div>
          <div className="flex flex-col gap-2 text-sm text-sg-text-dim sm:gap-[11px]">
            <Link href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</Link>
            <Link href={siteConfig.contact.phoneSecondaryHref}>
              {siteConfig.contact.phoneSecondary}
            </Link>
            <Link href={siteConfig.contact.emailHref}>Email us</Link>
            <span>{siteConfig.contact.address}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-[var(--spacing-container)] flex-col gap-3 border-t border-sg-border-soft pt-5 text-[12px] text-sg-text-faint sm:mt-11 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:pt-6 sm:text-[13px]">
        <span>{siteConfig.copyright}</span>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {footerNav.legal.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-sg-accent">
              {link.label}
            </Link>
          ))}
        </div>
        <span className="sm:text-right">{siteConfig.footerNote}</span>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="mb-3 font-display text-sm font-bold sm:mb-4">{title}</div>
      <div className="flex flex-col gap-2 text-sm text-sg-text-dim sm:gap-[11px]">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="min-h-6 leading-6">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
