import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { site, navLinks } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="Vetrivel Groups — Home">
              <span className="relative h-9 w-9 shrink-0 rounded-full bg-white p-1.5">
                <Image src="/images/logo-icon.png" alt="" fill className="object-contain p-1" />
              </span>
              <span className="font-display text-xl font-semibold">Vetrivel Groups</span>
            </Link>
            <p className="font-display italic text-white/80 text-lg leading-snug mb-4">
              {site.tagline}
            </p>
            <p className="text-sm text-white/55 leading-relaxed max-w-sm">
              A diversified Chennai-based enterprise serving businesses, institutions, and
              organisations across India since {site.founded}.
            </p>
          </div>

          {/* Navigate column */}
          <div>
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach us column */}
          <div>
            <p className="eyebrow mb-5">Reach Us</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <span className="text-sm text-white/70 leading-relaxed">
                  {site.contact.addressLines.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-sm text-white/70 hover:text-white transition-colors break-all"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <a
                  href={`tel:${site.contact.phoneHref}`}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {site.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/45">
          <p>© {year} Vetrivel Groups. All rights reserved.</p>
          <p>
            Founded by {site.founder.name} · Est. {site.founded}
          </p>
        </div>
      </div>
    </footer>
  );
}
