"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-card"
          : "bg-white"
      )}
    >
      <div className="container-page flex h-[72px] items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative text-sm font-medium transition-colors py-2",
                  isActive ? "text-navy" : "text-slate-600 hover:text-navy"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="md" showArrow={false}>
            Get in Touch
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-navy-dark"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={clsx(
          "lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white transition-transform duration-300 ease-out overflow-y-auto",
          mobileOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        )}
      >
        <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-6">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                  isActive ? "bg-ivory text-navy" : "text-slate-700 hover:bg-ivory/60"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-4 px-4">
            <Button href="/contact" size="lg" showArrow={false} className="w-full">
              Get in Touch
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
