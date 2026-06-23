import { Target, User, Building2, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

const factCards = [
  { icon: Target, label: "Founded", value: String(site.founded) },
  { icon: User, label: "Founder", value: site.founder.name },
  { icon: Building2, label: "Headquarters", value: "Chennai, TN" },
  { icon: Users, label: "Team", value: "50+ Pros" },
];

export function CompanyStory() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <p className="eyebrow mb-3">Our Story</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.15] font-semibold text-navy-dark mb-6">
              From a single vision in {site.founded} to a multi-business enterprise.
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-4">
              Vetrivel Groups was founded in {site.founded} by{" "}
              <strong className="text-navy-dark font-semibold">{site.founder.name}</strong> with
              the belief that one disciplined organisation could deliver excellence across very
              different industries — engineering, hospitality, and creative services alike.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Today, the group operates from Chennai with more than 50 professionals across
              five business divisions. Each division has its own leadership and craft, while
              sharing one set of values: integrity, accountability, and customer-first thinking.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 gap-4">
              {factCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl bg-ivory p-6 shadow-card"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white mb-4">
                    <card.icon className="h-5 w-5 text-navy" />
                  </span>
                  <p className="text-xs uppercase tracking-wide text-slate-500 mb-1.5">
                    {card.label}
                  </p>
                  <p className="font-display text-2xl font-bold text-navy-dark">{card.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
