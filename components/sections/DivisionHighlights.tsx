import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { divisions } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export function DivisionHighlights() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <Reveal>
            <p className="eyebrow mb-3">Business Divisions</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] font-semibold text-navy-dark max-w-lg">
              Built across five verticals.
            </h2>
            <p className="mt-4 max-w-md text-base text-slate-600 leading-relaxed">
              A multi-disciplinary group with focused leadership in each business —
              engineered, manufactured, served, and produced in-house.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/divisions"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-navy-dark transition-colors whitespace-nowrap"
            >
              View all divisions <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {divisions.map((division, i) => {
            const Icon = getIcon(division.icon);
            const isFeatured = i === 0;
            return (
              <Reveal key={division.id} delay={i * 0.07}>
                <div
                  className={clsx(
                    "group relative flex h-full flex-col rounded-2xl p-7 transition-all duration-300",
                    isFeatured
                      ? "bg-navy-gradient text-white shadow-card-hover lg:row-span-1"
                      : "bg-white text-navy-dark shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
                  )}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={clsx(
                        "flex h-11 w-11 items-center justify-center rounded-xl",
                        isFeatured ? "bg-white/15" : "bg-ivory"
                      )}
                    >
                      <Icon className={clsx("h-5 w-5", isFeatured ? "text-gold" : "text-navy")} />
                    </span>
                    <span
                      className={clsx(
                        "text-xs font-semibold tracking-wide",
                        isFeatured ? "text-gold/80" : "text-slate-400"
                      )}
                    >
                      {division.number}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold leading-snug mb-2.5">
                    {division.name}
                  </h3>

                  <p
                    className={clsx(
                      "text-sm leading-relaxed mb-5",
                      isFeatured ? "text-white/75" : "text-slate-600"
                    )}
                  >
                    {division.tagline}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 mb-5">
                    {division.services.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className={clsx(
                          "rounded-full px-3 py-1 text-[11px] font-medium",
                          isFeatured
                            ? "bg-white/10 text-white/80"
                            : "bg-ivory text-navy/70"
                        )}
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/divisions#${division.id}`}
                    className={clsx(
                      "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide transition-colors",
                      isFeatured ? "text-gold hover:text-gold-light" : "text-navy hover:text-gold-dark"
                    )}
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3} className="mt-10 flex justify-center sm:hidden">
          <Button href="/divisions" variant="primary">
            View All Divisions
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
