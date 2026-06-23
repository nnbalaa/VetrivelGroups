import { FileText, MessageCircle, Code2, Users, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { hiringProcess } from "@/lib/content";

const stepIcons = [FileText, MessageCircle, Code2, Users, CheckCircle2];

export function HiringProcess() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-dark">
            Our hiring process
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-slate-100 bg-ivory/40 p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-4 relative">
              <div
                className="hidden sm:block absolute top-6 left-[10%] right-[10%] h-px border-t border-dashed border-navy/20"
                aria-hidden="true"
              />
              {hiringProcess.map((item, i) => {
                const Icon = stepIcons[i];
                return (
                  <div key={item.step} className="relative flex flex-col items-center text-center">
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-card mb-4">
                      <Icon className="h-5 w-5 text-navy" />
                    </span>
                    <p className="font-display text-lg font-bold text-navy mb-1">{item.step}</p>
                    <p className="text-sm font-semibold text-navy-dark leading-snug mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
