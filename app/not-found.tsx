import { Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-ivory">
      <div className="container-page text-center py-20">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-card mb-7">
          <Compass className="h-7 w-7 text-navy" />
        </span>
        <p className="eyebrow mb-3">404</p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-navy-dark mb-4">
          This page has wandered off.
        </h1>
        <p className="text-base text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Let&rsquo;s get
          you back on track.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/contact" variant="secondary" showArrow={false}>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
