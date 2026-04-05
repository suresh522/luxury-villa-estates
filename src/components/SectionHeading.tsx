interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
}

const SectionHeading = ({ subtitle, title, description, light = false, align = "center" }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}>
      {subtitle && (
        <p className={`font-body text-xs uppercase tracking-[0.3em] mb-3 ${light ? "text-primary-foreground/60" : "text-primary"}`}>
          {subtitle}
        </p>
      )}
      <div className={`gold-divider mb-6 ${align === "center" ? "mx-auto" : ""}`} />
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed ${align === "center" ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
