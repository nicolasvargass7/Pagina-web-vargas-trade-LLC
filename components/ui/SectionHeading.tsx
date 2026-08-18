import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "mb-4 inline-flex items-center gap-3 text-sm font-semibold tracking-[0.2em]",
              tone === "dark" ? "text-accent-light" : "text-accent"
            )}
          >
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]",
            tone === "dark" ? "text-white" : "text-text"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed",
              tone === "dark" ? "text-text-on-dark-muted" : "text-text-secondary"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
