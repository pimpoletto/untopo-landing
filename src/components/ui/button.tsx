import { Link } from "@/i18n/navigation";
import type { Pathnames } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: Pathnames | (string & {});
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary:
    "brand-gradient text-white shadow-sm hover:brightness-105 active:brightness-95",
  secondary:
    "border border-border bg-card text-foreground hover:bg-muted/60",
  ghost: "text-muted-foreground hover:text-foreground hover:bg-muted/50",
};

const sizes = {
  sm: "min-h-9 px-3.5 text-sm",
  md: "min-h-11 px-5 text-sm font-medium",
  lg: "min-h-12 px-6 text-base font-medium",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const { onClick } = props;
    if (external || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href as Pathnames}
        className={classes}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
