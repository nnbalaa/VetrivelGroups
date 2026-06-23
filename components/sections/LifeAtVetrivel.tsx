import { Users2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { lifeAtVetrivel } from "@/lib/content";

export function LifeAtVetrivel() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-dark">
            Life at Vetrivel
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {lifeAtVetrivel.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="overflow-hidden rounded-2xl shadow-card">
                <div className="relative h-44 bg-navy-gradient flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 30%, white 0, transparent 45%)",
                    }}
                    aria-hidden="true"
                  />
                  <Users2 className="h-10 w-10 text-gold relative" strokeWidth={1.5} />
                </div>
                <div className="bg-white p-5">
                  <h3 className="font-display text-base font-semibold text-navy mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
