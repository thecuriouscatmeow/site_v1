import { content } from "@/content";

export default function Identity() {
  const { headline, title, subtext } = content.sections.identity;

  return (
    <section
      style={{
        height: "100dvh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        backgroundColor: "var(--color-bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-md)",
        textAlign: "center",
      }}
    >
      {/* Name */}
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3.5rem, 8vw, 7rem)",
          lineHeight: 1.1,
          color: "var(--color-text)",
          fontWeight: 300,
          margin: 0,
        }}
      >
        {headline}
      </h1>

      {/* Divider */}
      <hr
        style={{
          width: "64px",
          border: "none",
          borderTop: "1px solid var(--color-border)",
          margin: "var(--space-sm) auto",
        }}
      />

      {/* Title */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
          color: "var(--color-text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          margin: 0,
        }}
      >
        {title}
      </p>

      {/* Subtext */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "1rem",
          color: "var(--color-text)",
          lineHeight: 1.6,
          maxWidth: "520px",
          marginTop: "var(--space-md)",
        }}
      >
        {subtext}
      </p>

      {/* Scroll hint */}
      <div
        className="animate-bounce-down"
        aria-hidden="true"
        style={{
          marginTop: "var(--space-lg)",
          color: "var(--color-text-muted)",
          fontSize: "1.25rem",
        }}
      >
        ↓
      </div>
    </section>
  );
}
