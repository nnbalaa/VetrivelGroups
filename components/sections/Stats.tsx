import { stats } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="bg-navy">
      <div className="container-page">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="px-4 py-10 text-center">
              <p className="font-display text-3xl sm:text-4xl font-bold text-gold">
                {stat.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm uppercase tracking-wider text-white/60">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
