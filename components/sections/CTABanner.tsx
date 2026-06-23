import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Building2 } from "lucide-react";

interface CTABannerProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-gradient px-8 py-12 sm:px-14 sm:py-14">
            <div
              className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex items-start gap-4 max-w-xl">
                <span className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Building2 className="h-6 w-6 text-gold" />
                </span>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white leading-snug">
                    {title}
                  </h2>
                  <p className="mt-2 text-white/70 text-sm sm:text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Button href={primaryHref} variant="secondary" size="lg">
                  {primaryLabel}
                </Button>
                {secondaryLabel && secondaryHref && (
                  <Button href={secondaryHref} variant="ghost" size="lg" showArrow={false}>
                    {secondaryLabel}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
