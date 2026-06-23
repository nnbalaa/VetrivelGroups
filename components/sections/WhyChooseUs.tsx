import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { whyChooseUs, trustedClients } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3">Why Vetrivel</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.15] font-semibold text-navy-dark">
            A partner you can build with.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {whyChooseUs.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-card hover:shadow-card-hover transition-shadow">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ivory mb-4">
                    <Icon className="h-5 w-5 text-navy" />
                  </span>
                  <h3 className="font-semibold text-navy-dark mb-1.5">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="text-center">
          <p className="eyebrow mb-6">Trusted By</p>
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-navy-dark mb-10">
            Working alongside India&rsquo;s most respected institutions.
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {trustedClients.map((client) => (
              <div
                key={client.name}
                className="flex h-20 w-40 items-center justify-center rounded-xl border border-slate-100 bg-white px-5 py-3 shadow-card transition-shadow hover:shadow-card-hover"
                title={client.name}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
