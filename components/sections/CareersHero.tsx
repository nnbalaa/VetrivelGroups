import { Users, Building2, Calendar, MapPin } from "lucide-react";

const heroStats = [
  { icon: Users, value: "50+", label: "Professionals" },
  { icon: Building2, value: "5", label: "Business Divisions" },
  { icon: Calendar, value: "2020", label: "Founded" },
  { icon: MapPin, value: "Chennai", label: "Headquarters" },
];

export function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <p className="eyebrow mb-4">Careers</p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] font-semibold text-white max-w-2xl">
          Build a career with purpose.
        </h1>
        <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/75 max-w-xl">
          Join a team of engineers, creators, operators, and specialists working across
          multiple industries with a shared commitment to excellence.
        </p>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <stat.icon className="h-5 w-5 text-gold" />
              </span>
              <div>
                <p className="font-display text-xl font-bold text-white leading-none">
                  {stat.value}
                </p>
                <p className="text-xs text-white/60 mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
