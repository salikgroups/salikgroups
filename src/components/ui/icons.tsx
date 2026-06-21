import type { Service } from "@/types/content";

type ServiceIconProps = {
  icon: Service["icon"];
  className?: string;
};

export function ServiceIcon({ icon, className = "h-[26px] w-[26px]" }: ServiceIconProps) {
  const stroke = "currentColor";

  switch (icon) {
    case "solar":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.2" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
          <line x1="4.9" y1="4.9" x2="7" y2="7" />
          <line x1="17" y1="17" x2="19.1" y2="19.1" />
          <line x1="4.9" y1="19.1" x2="7" y2="17" />
          <line x1="17" y1="7" x2="19.1" y2="4.9" />
        </svg>
      );
    case "cctv":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2.5" y="7" width="14" height="7" rx="2" />
          <circle cx="9.5" cy="10.5" r="2" />
          <path d="M16.5 9.5 21 7.5v6l-4.5-2" />
          <line x1="6" y1="17.5" x2="6" y2="20" />
          <line x1="2.5" y1="20" x2="9.5" y2="20" />
        </svg>
      );
    case "telephone":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M6 8v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8M12 13v3" />
        </svg>
      );
    case "fence":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="4" x2="4" y2="21" />
          <line x1="11" y1="4" x2="11" y2="21" />
          <line x1="18" y1="4" x2="18" y2="21" />
          <path d="M4 9h14M4 14h14" />
          <circle cx="11" cy="9" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      );
    case "generator":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <polyline points="12,8 10,12 13,12 11,16" />
        </svg>
      );
    case "intercom":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <circle cx="9" cy="10" r="2.4" />
          <path d="M14 8h4M14 12h4" />
          <line x1="8" y1="19" x2="16" y2="19" />
          <line x1="12" y1="16" x2="12" y2="19" />
        </svg>
      );
    case "attendance":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M12 7.5a3 3 0 0 0-3 3M12 7.5a3 3 0 0 1 3 3M12 10a1 1 0 0 0-1 1v2M12 10a1 1 0 0 1 1 1v2" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
      );
    case "network":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2.4" />
          <circle cx="5" cy="5" r="1.8" />
          <circle cx="19" cy="5" r="1.8" />
          <circle cx="5" cy="19" r="1.8" />
          <circle cx="19" cy="19" r="1.8" />
          <path d="M10.3 10.3 6.3 6.3M13.7 10.3l4-4M10.3 13.7l-4 4M13.7 13.7l4 4" />
        </svg>
      );
    case "it":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <line x1="8" y1="20" x2="16" y2="20" />
          <line x1="12" y1="16" x2="12" y2="20" />
          <path d="M7 8h10M7 11h6" />
        </svg>
      );
    case "repair":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 5.5a3.5 3.5 0 0 0-4.7 4.3l-5 5a1.6 1.6 0 0 0 2.3 2.3l5-5a3.5 3.5 0 0 0 4.3-4.7l-2 2-1.8-.3-.3-1.8z" />
        </svg>
      );
  }
}

export function ThemeSunIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2.5" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="21.5" />
      <line x1="2.5" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="21.5" y2="12" />
      <line x1="4.9" y1="4.9" x2="6.7" y2="6.7" />
      <line x1="17.3" y1="17.3" x2="19.1" y2="19.1" />
      <line x1="4.9" y1="19.1" x2="6.7" y2="17.3" />
      <line x1="17.3" y1="6.7" x2="19.1" y2="4.9" />
    </svg>
  );
}

export function ThemeMoonIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z" />
    </svg>
  );
}
