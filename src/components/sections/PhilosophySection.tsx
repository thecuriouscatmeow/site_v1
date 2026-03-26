interface PhilosophySectionProps {
  quote: string;
}

export default function PhilosophySection({ quote }: PhilosophySectionProps) {
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
        textAlign: "center",
      }}
    >
      <blockquote
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          lineHeight: 1.1,
          color: "var(--color-text)",
          fontWeight: 300,
          maxWidth: "700px",
          margin: 0,
          padding: 0,
        }}
      >
        {quote}
      </blockquote>
    </section>
  );
}
