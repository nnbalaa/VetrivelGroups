import { Headphones, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const badges = [
  {
    icon: Headphones,
    title: "Quick Response",
    description: "We aim to respond within one business day.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential & Secure",
    description: "Your information is handled with the highest confidentiality.",
  },
  {
    icon: Users,
    title: "Partnership Focused",
    description: "We're here to build long-term relationships, not just projects.",
  },
];

export function ContactTrustBadges() {
  return (
    <section className="bg-ivory py-14">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {badges.map((badge, i) => (
            <Reveal key={badge.title} delay={i * 0.08}>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-card">
                  <badge.icon className="h-5 w-5 text-navy" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy-dark mb-1">{badge.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{badge.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
