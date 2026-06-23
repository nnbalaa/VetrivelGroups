import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryCard } from "@/components/ui/GalleryCard";
import { Reveal } from "@/components/ui/Reveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { galleryItems, galleryNotice } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A growing archive of projects, installations, and moments produced by Vetrivel Groups teams across engineering, photography, events, and catering.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Selected work, across every discipline."
        description="A growing archive of projects, installations, and moments produced by Vetrivel teams."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
            {galleryItems.map((item, i) => (
              <GalleryCard key={item.category} item={item} delay={i * 0.05} tall={i === 0} />
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="mx-auto max-w-2xl rounded-2xl border border-gold/20 bg-ivory px-6 py-5 flex items-start gap-3.5 text-center sm:text-left sm:items-center">
              <Info className="hidden sm:block h-5 w-5 text-gold shrink-0" />
              <p className="text-sm text-slate-600 leading-relaxed">{galleryNotice}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Have a project worth documenting?"
        description="If you're working with one of our divisions, ask about adding your project to our growing case study archive."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}
