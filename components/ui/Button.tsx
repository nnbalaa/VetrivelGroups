import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "gold";
type ButtonSize = "md" | "lg";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  className?: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-dark shadow-card hover:shadow-card-hover",
  secondary:
    "bg-white text-navy hover:bg-ivory shadow-card hover:shadow-card-hover",
  ghost:
    "bg-transparent text-white border border-white/30 hover:bg-white/10",
  gold:
    "bg-gold text-navy-dark hover:bg-gold-dark shadow-gold-glow",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  showArrow = true,
  className,
  external = false,
}: ButtonProps) {
  const classes = clsx(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const arrow = showArrow && (
    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}
