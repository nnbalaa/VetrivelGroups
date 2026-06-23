import { clsx } from "clsx";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({ eyebrow, title, description, children, className }: PageHeroProps) {
  return (
    <section className={clsx("relative overflow-hidden bg-navy-gradient", className)}>
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="700" cy="80" r="220" stroke="white" strokeWidth="1" />
        <circle cx="700" cy="80" r="160" stroke="white" strokeWidth="1" />
      </svg>
      <div className="container-page relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] font-semibold text-white">
              {title}
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/75 max-w-xl">
              {description}
            </p>
          </div>
          {children && <div className="hidden lg:block">{children}</div>}
        </div>
      </div>
    </section>
  );
}
