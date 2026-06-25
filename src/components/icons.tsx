import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export function IconMic({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-6", className)} aria-hidden>
      <path
        d="M12 15a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M19 11a7 7 0 0 1-14 0M12 18v3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconCamera({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-6", className)} aria-hidden>
      <path
        d="M4 8.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2h-2.2l-1-2H9.2l-1 2H6a2 2 0 0 0-2 2Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="12.5" r="3" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function IconFile({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-6", className)} aria-hidden>
      <path
        d="M8 4h6l4 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M14 4v4h4M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconContacts({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-6", className)} aria-hidden>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M16 8.5a2.5 2.5 0 1 1 0 5M15.5 19c.3-2 1.8-3.5 4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconMobile({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-6", className)} aria-hidden>
      <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M11 18h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconSync({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-6", className)} aria-hidden>
      <path
        d="M17 7V4h3M7 17v3h3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10a6 6 0 0 1 10-4.5L17 7M18 14a6 6 0 0 1-10 4.5L7 17"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-5", className)} aria-hidden>
      <path
        d="m5 12.5 4.2 4.2L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconReport({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-6", className)} aria-hidden>
      <path
        d="M7 3h7l4 4v12.5A1.5 1.5 0 0 1 16.5 21h-9A1.5 1.5 0 0 1 6 19.5V4.5A1.5 1.5 0 0 1 7.5 3H7Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v4h4M9.5 12h5M9.5 15.5h5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPdf({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-6", className)} aria-hidden>
      <path
        d="M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path
        d="M9.5 16.5v-3h1.2a1 1 0 0 1 0 2H9.5M13.4 16.5v-3h.9a1.5 1.5 0 0 1 0 3h-.9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconHistory({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-6", className)} aria-hidden>
      <path
        d="M3.5 12a8.5 8.5 0 1 1 2.6 6.1M3.5 12V7.5M3.5 12H8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 8v4.2l2.8 1.8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPalette({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-6", className)} aria-hidden>
      <path
        d="M12 3.5a8.5 8.5 0 0 0 0 17c1.4 0 2-1 2-1.8 0-.6-.4-1-.4-1.6 0-.7.6-1.2 1.4-1.2H17a4 4 0 0 0 4-4c0-4.6-4-8.4-9-8.4Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="11" r="1.1" fill="currentColor" />
      <circle cx="12" cy="8" r="1.1" fill="currentColor" />
      <circle cx="16" cy="10.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-6", className)} aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="m4.5 7 7.5 5.5L19.5 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const featureIconMap = {
  mic: IconMic,
  camera: IconCamera,
  file: IconFile,
  contacts: IconContacts,
  mobile: IconMobile,
  sync: IconSync,
  report: IconReport,
  pdf: IconPdf,
  history: IconHistory,
  palette: IconPalette,
  mail: IconMail,
} as const;

export function FeatureIcon({ name, className }: { name: keyof typeof featureIconMap; className?: string }) {
  const Icon = featureIconMap[name];
  return <Icon className={className} />;
}
