import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { clsx } from "clsx";
import { Reveal } from "@/components/ui/Reveal";
import { getIcon } from "@/lib/icons";
import type { Division } from "@/lib/content";

interface DivisionCardProps {
  division: Division;
  reversed?: boolean;
}

export function DivisionCard({ division, reversed = false }: DivisionCardProps) {
  const Icon = getIcon(division.icon);

  return (
    <div id={division.id} className="scroll-mt-24">
      <Reveal>
        <div
          className={clsx(
            "grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl bg-white shadow-card",
            reversed && "lg:[&>*:first-child]:order-2"
          )}
        >
          {/* Text content */}
          <div className="p-8 sm:p-10 lg:p-12 flex flex-col">
            <p className="eyebrow mb-3">Division {division.number}</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-dark leading-snug mb-4">
              {division.name}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {division.overview}
            </p>

            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">
              Services
            </p>
            <div className="grid grid-cols-2 gap-2.5 mb-6">
              {division.services.map((service) => (
                <div key={service} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-gold shrink-0" />
                  <span className="text-sm text-slate-700">{service}</span>
                </div>
              ))}
            </div>

            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">
              Benefits
            </p>
            <ul className="space-y-2 mb-7">
              {division.benefits.map((benefit) => (
                <li key={benefit} className="text-sm text-slate-600 leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-[0.5em] h-1 w-1 rounded-full bg-navy" />
                  {benefit}
                </li>
              ))}
            </ul>

            <Link
              href={`/contact?division=${encodeURIComponent(division.contactLabel)}`}
              className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:text-gold-dark transition-colors"
            >
              Enquire about this division <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Visual placeholder */}
          <div className="relative min-h-[280px] lg:min-h-full bg-navy-gradient flex items-center justify-center p-10">
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, white 0, transparent 45%), radial-gradient(circle at 80% 80%, white 0, transparent 40%)",
              }}
              aria-hidden="true"
            />
            <div className="relative text-center">
              <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10 mb-5">
                <Icon className="h-11 w-11 text-gold" />
              </span>
              <p className="text-xs uppercase tracking-wide text-gold/80 font-semibold mb-1.5">
                Vetrivel · Division {division.number}
              </p>
              <p className="font-display text-lg text-white max-w-xs mx-auto leading-snug">
                {division.tagline}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
