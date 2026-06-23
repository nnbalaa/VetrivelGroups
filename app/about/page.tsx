import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CompanyStory } from "@/components/sections/CompanyStory";
import { MissionVisionValues } from "@/components/sections/MissionVisionValues";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Vetrivel Groups is a diversified Indian enterprise founded in Chennai in 2020 by Sukumar S, delivering excellence across engineering, manufacturing, hospitality, and creative services.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="An enterprise built on conviction, craft, and care."
        description="Vetrivel Groups is a diversified Indian group founded in Chennai with a clear mandate — to deliver excellence across every discipline we touch."
      />
      <CompanyStory />
      <MissionVisionValues />
      <TimelineSection />
      <FounderSection showBio />
      <CTABanner
        title="Let's build something enduring."
        description="Partner with a team that brings the same discipline to every division it operates."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="Browse Divisions"
        secondaryHref="/divisions"
      />
    </>
  );
}
