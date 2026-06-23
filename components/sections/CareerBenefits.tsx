import { Reveal } from "@/components/ui/Reveal";
import { careerBenefits } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export function CareerBenefits() {
  return (
    <section className="bg-ivory py-16 sm:py-20">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {careerBenefits.map((benefit, i) => {
            const Icon = getIcon(benefit.icon);
            return (
              <Reveal key={benefit.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ivory mb-4">
                    <Icon className="h-5 w-5 text-navy" />
                  </span>
                  <h3 className="font-semibold text-navy-dark mb-1.5">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
