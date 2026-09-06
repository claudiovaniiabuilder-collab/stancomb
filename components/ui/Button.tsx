import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-brass text-ink hover:bg-brass-soft border border-brass-soft/40 shadow-[0_0_22px_rgba(228,188,114,0.28)]",
  secondary:
    "border border-steel/45 bg-white/4 text-steel hover:border-spark/55 hover:text-spark",
  ghost: "border border-transparent text-muted hover:text-foreground",
} as const;

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  type = "button",
  onClick,
  disabled,
  external,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center px-6 text-[0.92rem] tracking-[0.04em] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
