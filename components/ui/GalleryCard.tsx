import { Reveal } from "@/components/ui/Reveal";
import { getIcon } from "@/lib/icons";
import type { GalleryItem } from "@/lib/content";

interface GalleryCardProps {
  item: GalleryItem;
  delay?: number;
  tall?: boolean;
}

export function GalleryCard({ item, delay = 0, tall = false }: GalleryCardProps) {
  const Icon = getIcon(item.icon);

  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`group relative h-full overflow-hidden rounded-2xl bg-navy-gradient p-7 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
          tall ? "min-h-[280px]" : "min-h-[200px]"
        }`}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 20%, rgba(212,162,77,0.18) 0, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
          <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
        </span>
        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-gold/80 mb-1.5">
            {item.division}
          </p>
          <p className="font-display text-lg font-semibold text-white leading-snug">
            {item.category}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
