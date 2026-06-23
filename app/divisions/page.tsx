import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { DivisionCard } from "@/components/divisions/DivisionCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { divisions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Business Divisions",
  description:
    "Explore Vetrivel Groups' five business divisions: vending machine manufacturing, PCB design & electronics, professional photography, event management, and hospital catering services.",
};

export default function DivisionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Divisions"
        title="Five disciplines. One disciplined group."
        description="Each division is led by domain specialists and supported by Vetrivel's shared operational backbone."
      />

      <section className="bg-ivory py-16 sm:py-20">
        <div className="container-page space-y-8">
          {divisions.map((division, i) => (
            <DivisionCard key={division.id} division={division} reversed={i % 2 === 1} />
          ))}
        </div>
      </section>

      <CTABanner
        title="Not sure which division fits your need?"
        description="Tell us about your project and we'll connect you with the right team — or recommend a combination of divisions."
        primaryLabel="Talk to Our Team"
        primaryHref="/contact"
      />
    </>
  );
}
