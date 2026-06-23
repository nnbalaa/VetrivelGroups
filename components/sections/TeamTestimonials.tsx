import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { teamTestimonials } from "@/lib/content";

export function TeamTestimonials() {
  return (
    <section className="bg-ivory py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-dark">
            What our team says
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {teamTestimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-card">
                <Quote className="h-6 w-6 text-gold/50 mb-3" />
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-dark">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
