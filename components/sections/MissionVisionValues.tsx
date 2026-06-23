import { Target, Eye, Heart } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { coreValues } from "@/lib/content";

const pillars = [
  {
    icon: Target,
    title: "Mission",
    description:
      "Deliver quality, innovation, and value across diverse industries through disciplined execution and customer-focused solutions.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To become one of India's most trusted diversified business groups.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Integrity. Accountability. Innovation. Customer-first thinking in every decision we make.",
  },
];

export function MissionVisionValues() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-7 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ivory mb-5">
                  <pillar.icon className="h-5 w-5 text-navy" />
                </span>
                <h3 className="font-display text-xl font-semibold text-navy-dark mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-3">Core Values</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.15] font-semibold text-navy-dark">
            The principles behind every division.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {coreValues.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 text-center">
                <p className="font-display text-base font-semibold text-navy mb-2">
                  {value.title}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
