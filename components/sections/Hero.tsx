"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { trustStrip } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-dark">
      {/* Background: layered navy gradient with subtle skyline-style geometric accents */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-[#040f33]" />
        {/* Abstract skyline silhouette using CSS shapes, evoking Chennai's commercial towers */}
        <svg
          className="absolute bottom-0 right-0 h-full w-full opacity-[0.07]"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMaxYMax slice"
          fill="none"
          aria-hidden="true"
        >
          {[...Array(9)].map((_, i) => {
            const x = 60 + i * 85;
            const h = 180 + ((i * 53) % 220);
            const w = 50 + (i % 3) * 10;
            return (
              <rect key={i} x={x} y={600 - h} width={w} height={h} fill="white" />
            );
          })}
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />
      </div>

      <div className="container-page relative z-10 pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="text-xs font-semibold tracking-wide text-gold">
            Est. 2020 · Chennai, India
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display max-w-4xl text-[2.75rem] sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-white"
        >
          Driving Innovation.
          <br />
          <span className="text-gold">Delivering Excellence.</span>
          <br />
          Creating Value.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-white/75"
        >
          A diversified Indian enterprise delivering engineering solutions,
          manufacturing excellence, hospitality services, event management,
          and creative expertise across the nation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/divisions" variant="secondary" size="lg">
            Explore Businesses
          </Button>
          <Button href="/contact" variant="ghost" size="lg" showArrow={false}>
            Contact Us
          </Button>
        </motion.div>
      </div>

      {/* Trust strip */}
      <div className="relative z-10 border-t border-white/10 bg-black/15">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-8 py-5 text-xs sm:text-sm">
            {trustStrip.map((item) => (
              <span key={item} className="text-white/65 font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden sm:flex absolute left-1/2 -translate-x-1/2 bottom-[88px] z-10 flex-col items-center gap-1 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
