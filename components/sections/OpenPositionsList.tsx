import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { openPositions, site } from "@/lib/content";

export function OpenPositionsList() {
  return (
    <section id="open-positions" className="bg-white py-16 sm:py-20 scroll-mt-20">
      <div className="container-page">
        <Reveal className="flex items-end justify-between mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-dark">
            Open positions
          </h2>
          <span className="text-sm font-semibold text-navy">{openPositions.length} roles</span>
        </Reveal>

        <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 shadow-card overflow-hidden">
          {openPositions.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.04}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5 hover:bg-ivory/50 transition-colors">
                <div>
                  <h3 className="font-semibold text-navy-dark mb-1.5">{role.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="rounded-full bg-ivory px-2.5 py-1 font-medium text-navy">
                      {role.category}
                    </span>
                    <span>·</span>
                    <span>{role.experience}</span>
                    <span>·</span>
                    <span>{role.type}</span>
                    <span>·</span>
                    <span>{role.location}</span>
                  </div>
                </div>
                <Link
                  href={`/contact?division=Careers&role=${encodeURIComponent(role.title)}`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors whitespace-nowrap"
                >
                  View Role <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 text-sm text-slate-500 leading-relaxed">
            Don&rsquo;t see your role? Send your CV to{" "}
            <a
              href={`mailto:${site.contact.careersEmail}`}
              className="font-semibold text-navy hover:text-gold-dark transition-colors"
            >
              {site.contact.careersEmail}
            </a>{" "}
            and we&rsquo;ll keep your profile in our active talent pool across divisions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
