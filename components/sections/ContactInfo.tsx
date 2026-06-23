import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <Reveal>
        <InfoCard icon={MapPin} label="Headquarters">
          {site.contact.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </InfoCard>
      </Reveal>

      <Reveal delay={0.06}>
        <InfoCard icon={Mail} label="Email">
          <a href={`mailto:${site.contact.email}`} className="hover:text-gold-dark transition-colors break-all">
            {site.contact.email}
          </a>
        </InfoCard>
      </Reveal>

      <Reveal delay={0.12}>
        <InfoCard icon={Phone} label="Phone">
          <a href={`tel:${site.contact.phoneHref}`} className="hover:text-gold-dark transition-colors">
            {site.contact.phone}
          </a>
        </InfoCard>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="rounded-2xl bg-navy-gradient p-6 text-white">
          <div className="flex items-center gap-2.5 mb-2">
            <Clock className="h-4 w-4 text-gold" />
            <p className="text-xs font-semibold uppercase tracking-wide text-gold">Office Hours</p>
          </div>
          <p className="font-display text-lg font-semibold mb-2">{site.contact.hours}</p>
          <p className="text-xs text-white/65 leading-relaxed">
            Field service and event teams operate flexibly depending on engagement schedules.
          </p>
        </div>
      </Reveal>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-card flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ivory">
        <Icon className="h-5 w-5 text-navy" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1.5">
          {label}
        </p>
        <p className="text-sm font-semibold text-navy-dark leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
