import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export function Logo({ variant = "default", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={clsx("flex items-center gap-2.5 group", className)}
      aria-label="Vetrivel Groups — Home"
    >
      <span className="relative h-9 w-9 shrink-0 sm:h-10 sm:w-10">
        <Image
          src="/images/logo-icon.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </span>
      <span
        className={clsx(
          "font-display text-lg sm:text-xl font-semibold tracking-tight whitespace-nowrap",
          variant === "white" ? "text-white" : "text-navy-dark"
        )}
      >
        Vetrivel Groups
      </span>
    </Link>
  );
}
