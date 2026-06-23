import { clsx } from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className={clsx(
          "font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] font-semibold",
          light ? "text-white" : "text-navy-dark",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-base sm:text-lg leading-relaxed",
            light ? "text-white/75" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
