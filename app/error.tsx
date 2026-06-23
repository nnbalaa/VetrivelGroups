"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production, send this to an error-tracking service (Sentry, etc.)
    console.error("Route error boundary caught:", error);
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-ivory">
      <div className="container-page text-center py-20">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-card mb-7">
          <AlertTriangle className="h-7 w-7 text-gold-dark" />
        </span>
        <p className="eyebrow mb-3">Something went wrong</p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-navy-dark mb-4">
          We hit a snag loading this page.
        </h1>
        <p className="text-base text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
          Our team has been notified. Please try again, or head back to the homepage.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-dark"
          >
            Try Again
          </button>
          <Button href="/" variant="secondary" showArrow={false}>
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
