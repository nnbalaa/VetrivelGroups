import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { DivisionHighlights } from "@/components/sections/DivisionHighlights";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Vetrivel Groups | Driving Innovation. Delivering Excellence. Creating Value.",
  description:
    "A diversified Chennai enterprise spanning vending machine manufacturing, PCB design & electronics, professional photography, event management, and hospital catering services.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <DivisionHighlights />
      <TimelineSection compact />
      <FounderSection />
      <WhyChooseUs />
      <CTABanner
        title="Let's build something enduring."
        description="Whether you need a single division or a partner across multiple disciplines, our team in Chennai is ready to hear from you."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="Browse Divisions"
        secondaryHref="/divisions"
      />
    </>
  );
}
