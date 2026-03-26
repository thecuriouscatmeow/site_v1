import { content } from "@/content";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const { sectionLabel, items } = content.sections.projects;

  return (
    <section
      style={{
        minHeight: "100dvh",
        scrollSnapAlign: "start",
        // scroll-snap-stop intentionally omitted — allows in-section card scrolling
        backgroundColor: "var(--color-bg)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "var(--space-md) var(--space-md)",
      }}
    >
      <div style={{ maxWidth: "860px", width: "100%", margin: "0 auto" }}>
        {/* Section label */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            color: "var(--color-text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            margin: 0,
            marginBottom: "var(--space-md)",
          }}
        >
          {sectionLabel}
        </p>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-md)",
          }}
        >
          {items.map((item) => (
            <ProjectCard
              key={item.id}
              name={item.name}
              description={item.description}
              tech={item.tech}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
