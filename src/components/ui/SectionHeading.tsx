import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <AnimatedSection className={`mb-12 md:mb-16 ${alignClass}`}>
      {label && (
        <span
          className={`text-label mb-4 block ${
            light ? "text-gold-400" : "text-gold-600"
          }`}
        >
          {label}
        </span>
      )}

      <h2
        className={`text-heading-1 mb-4 ${
          light ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>

      <div
        className={`gold-line ${
          align === "center" ? "gold-line-center" : ""
        } mb-6`}
      />

      {subtitle && (
        <p
          className={`text-body-large max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-charcoal-light/70"}`}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
