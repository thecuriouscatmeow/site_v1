import TechPill from "@/components/ui/TechPill";

interface ProjectCardProps {
  name: string;
  description: string;
  tech: readonly string[];
  url: string | null;
}

export default function ProjectCard({ name, description, tech, url }: ProjectCardProps) {
  return (
    <article
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        padding: "var(--space-md)",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
          lineHeight: 1.1,
          color: "var(--color-text)",
          fontWeight: 300,
          margin: 0,
        }}
      >
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-accent"
            style={{
              color: "inherit",
              textDecoration: "none",
              transition: "color 150ms ease",
            }}
          >
            {name}
          </a>
        ) : (
          name
        )}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "1rem",
          color: "var(--color-text-muted)",
          lineHeight: 1.6,
          marginTop: "var(--space-xs)",
        }}
      >
        {description}
      </p>

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
    </article>
  );
}
