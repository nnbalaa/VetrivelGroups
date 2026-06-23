import { Reveal } from "@/components/ui/Reveal";
import { timeline } from "@/lib/content";
import { clsx } from "clsx";

interface TimelineSectionProps {
  compact?: boolean;
}

export function TimelineSection({ compact = false }: TimelineSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-3">Our Journey</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.15] font-semibold text-navy-dark">
              From a single idea to a multi-business group.
            </h2>
            {!compact && (
              <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-sm">
                Five years of disciplined growth — building capability before scale,
                and trust before footprint.
              </p>
            )}
          </Reveal>

          <div className="relative">
            <div
              className={clsx(
                "absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-navy/30 to-transparent"
              )}
              aria-hidden="true"
            />
            <ol className="space-y-9">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <li className="relative pl-9">
                    <span className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full border-2 border-gold bg-white" />
                    <p className="font-display text-xl font-bold text-navy">{item.year}</p>
                    <p className="mt-1 text-base font-semibold text-navy-dark">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
