import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactTrustBadges } from "@/components/sections/ContactTrustBadges";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vetrivel Groups in Chennai. Whether it's engineering expertise, event execution, catering solutions, or photography services — our team is ready to help.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something valuable together."
        description="Whether you need engineering expertise, event execution, catering solutions, photography services, or a strategic business partner, our team is ready to help."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <ContactInfo />
          <Suspense fallback={<ContactFormFallback />}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      <ContactTrustBadges />
    </>
  );
}

function ContactFormFallback() {
  return (
    <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-card animate-pulse">
      <div className="h-7 w-48 bg-slate-100 rounded mb-8" />
      <div className="space-y-5">
        <div className="h-12 bg-slate-50 rounded-xl" />
        <div className="h-12 bg-slate-50 rounded-xl" />
        <div className="h-12 bg-slate-50 rounded-xl" />
        <div className="h-28 bg-slate-50 rounded-xl" />
        <div className="h-12 w-40 bg-slate-100 rounded-full" />
      </div>
    </div>
  );
}
