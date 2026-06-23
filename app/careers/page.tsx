import type { Metadata } from "next";
import { CareersHero } from "@/components/sections/CareersHero";
import { CareerBenefits } from "@/components/sections/CareerBenefits";
import { OpenPositionsList } from "@/components/sections/OpenPositionsList";
import { LifeAtVetrivel } from "@/components/sections/LifeAtVetrivel";
import { TeamTestimonials } from "@/components/sections/TeamTestimonials";
import { HiringProcess } from "@/components/sections/HiringProcess";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Vetrivel Groups. Explore open positions across engineering, electronics, events, hospitality, and photography in Chennai and pan-India.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareerBenefits />
      <OpenPositionsList />
      <LifeAtVetrivel />
      <TeamTestimonials />
      <HiringProcess />
      <CTABanner
        title="Ready to build with us?"
        description="We're always looking for people who take pride in doing the work properly."
        primaryLabel="View Open Roles"
        primaryHref="/careers#open-positions"
        secondaryLabel="Send Your Resume"
        secondaryHref="/contact?division=Careers"
      />
    </>
  );
}
