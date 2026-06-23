import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content";

export function AboutPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
        <Reveal>
          <p className="eyebrow mb-3">About the Company</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] font-semibold text-navy-dark">
            One enterprise.
            <br />
            Five disciplines.
            <br />
            Boundless ambition.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600">
            Founded in {site.founded} by{" "}
            <strong className="text-navy-dark font-semibold">{site.founder.name}</strong>,
            Vetrivel Groups has grown into a diversified group of more than 50 professionals
            headquartered in Chennai, Tamil Nadu.
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            We serve businesses, institutions, and organisations through a combination of
            engineering ingenuity, manufacturing precision, hospitality discipline, and
            creative craft — under one accountable banner.
          </p>
          <div className="mt-7">
            <Button href="/about" variant="primary">
              Learn About Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
