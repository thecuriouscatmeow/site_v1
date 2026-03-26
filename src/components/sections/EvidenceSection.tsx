import AccentLine from "@/components/ui/AccentLine";
import TechPill from "@/components/ui/TechPill";

interface EvidenceSectionProps {
  label: string;
  headline: string;
  stats?: readonly string[];
  body: string;
  tech: readonly string[];
}

export default function EvidenceSection({
  label,
  headline,
  stats,
  body,
  tech,
}: EvidenceSectionProps) {
  return (
    <section
      style={{
        height: "100dvh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        backgroundColor: "var(--color-bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-md)",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          width: "100%",
          display: "flex",
          gap: "var(--space-md)",
          alignItems: "stretch",
        }}
      >
        <AccentLine />

        {/* Content */}
        <div>
          {/* Label */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              color: "var(--color-text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              margin: 0,
            }}
          >
            {label}
          </p>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.1,
              color: "var(--color-text)",
              fontWeight: 300,
              margin: 0,
              marginTop: "var(--space-xs)",
            }}
          >
            {headline}
          </h2>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                color: "var(--color-text-muted)",
                letterSpacing: "0.08em",
                margin: 0,
                marginTop: "var(--space-xs)",
              }}
            >
              {stats.join(" · ")}
            </p>
          )}

          {/* Body */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              color: "var(--color-text)",
              lineHeight: 1.6,
              maxWidth: "600px",
              marginTop: "var(--space-sm)",
            }}
          >
            {body}
          </p>

          {/* Tech stack */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-xs)",
              marginTop: "var(--space-sm)",
            }}
          >
            {tech.map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
