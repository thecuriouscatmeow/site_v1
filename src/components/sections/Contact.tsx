"use client";

import { Suspense } from "react";
import { track } from "@vercel/analytics";
import { content } from "@/content";
import { useAbSession } from "@/components/ui/useAbSession";

function ContactInner() {
  const { headline } = content.sections.contact;
  const { email, linkedin, linkedinDisplay, github, githubDisplay } =
    content.personal;

  const ab = useAbSession();
  const resumeHref = ab ? `/resume?ab=${ab}` : "/resume";

  const linkStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: "1rem",
    color: "var(--color-text)",
    lineHeight: 1.6,
    textDecoration: "none",
    transition: "color 150ms ease",
  };

  const handleResumeClick = () => {
    track("resume_click", {
      ab: ab ?? "none",
      resumeVariant: ab ?? "default",
    });
  };

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
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          lineHeight: 1.1,
          color: "var(--color-text)",
          fontWeight: 300,
          maxWidth: "600px",
          margin: 0,
        }}
      >
        {headline}
      </h2>

      <nav
        aria-label="Contact links"
        style={{
          marginTop: "var(--space-lg)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-sm)",
        }}
      >
        <a href={`mailto:${email}`} className="hover-accent" style={linkStyle}>
          {email}
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-accent"
          style={linkStyle}
        >
          {linkedinDisplay}
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-accent"
          style={linkStyle}
        >
          {githubDisplay}
        </a>
        <a
          href={resumeHref}
          onClick={handleResumeClick}
          style={{
            ...linkStyle,
            color: "var(--color-accent)",
            fontWeight: 600,
          }}
        >
          Full resume →
        </a>
      </nav>
    </section>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<ContactFallback />}>
      <ContactInner />
    </Suspense>
  );
}

function ContactFallback() {
  const { headline } = content.sections.contact;
  const { email, linkedin, linkedinDisplay, github, githubDisplay } =
    content.personal;

  const linkStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: "1rem",
    color: "var(--color-text)",
    lineHeight: 1.6,
    textDecoration: "none",
    transition: "color 150ms ease",
  };

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
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          lineHeight: 1.1,
          color: "var(--color-text)",
          fontWeight: 300,
          maxWidth: "600px",
          margin: 0,
        }}
      >
        {headline}
      </h2>

      <nav
        aria-label="Contact links"
        style={{
          marginTop: "var(--space-lg)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-sm)",
        }}
      >
        <a href={`mailto:${email}`} className="hover-accent" style={linkStyle}>
          {email}
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover-accent" style={linkStyle}>
          {linkedinDisplay}
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="hover-accent" style={linkStyle}>
          {githubDisplay}
        </a>
        <a
          href="/resume"
          style={{ ...linkStyle, color: "var(--color-accent)", fontWeight: 600 }}
        >
          Full resume →
        </a>
      </nav>
    </section>
  );
}
