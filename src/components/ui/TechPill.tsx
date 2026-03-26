interface TechPillProps {
  label: string;
}

export default function TechPill({ label }: TechPillProps) {
  return (
    <span
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        color: "var(--color-text-muted)",
        fontFamily: "var(--font-sans)",
        fontSize: "0.75rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase" as const,
        padding: "2px 10px",
        borderRadius: "2px",
        display: "inline-block",
        lineHeight: 1.6,
      }}
    >
      {label}
    </span>
  );
}
