import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content";

interface FounderSectionProps {
  showBio?: boolean;
}

export function FounderSection({ showBio = false }: FounderSectionProps) {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-10 lg:gap-14 items-center">
          <Reveal>
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl shadow-card-hover">
              <Image
                src="/images/founder-portrait.jpg"
                alt={`${site.founder.name}, ${site.founder.title} of Vetrivel Groups`}
                width={1023}
                height={1537}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 90vw, 400px"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-card">
              <p className="eyebrow mb-5">Founder&rsquo;s Note</p>
              <Quote className="h-8 w-8 text-gold/40 mb-3" />
              <p className="font-display text-xl sm:text-2xl leading-snug text-navy-dark italic">
                &ldquo;{site.founder.quote}&rdquo;
              </p>

              {showBio && (
                <p className="mt-6 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-6">
                  {site.founder.bio}
                </p>
              )}

              <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    SS
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-dark">{site.founder.name}</p>
                    <p className="text-xs text-slate-500">
                      {site.founder.title}, Vetrivel Groups
                    </p>
                  </div>
                </div>
                <Button href="/contact" variant="primary" size="md">
                  Work with us
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
