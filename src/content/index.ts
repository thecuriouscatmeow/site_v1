export const content = {
  personal: {
    name: 'Saahil Basak',
    title: 'Backend & Systems Engineer',
    email: 'saahilbasak@gmail.com',
    linkedin: 'https://www.linkedin.com/in/saahilbasak',
    linkedinDisplay: 'linkedin.com/in/saahilbasak',
    github: 'https://github.com/thecuriouscatmeow',
    githubDisplay: 'github.com/thecuriouscatmeow',
    // resumeUrl is now dynamic — see src/content/blob.ts and useResumeUrl hook
  },
  sections: {
    identity: {
      headline: 'Saahil Basak',
      title: 'Backend & Systems Engineer',
      subtext:
        'I build systems that survive real users — from real-time infrastructure to AI pipelines to production backends.',
    },
    evidence1: {
      label: 'Medjeex Edutech · Delhi, India · Nov 2024 – Nov 2025',
      headline: 'Built an edtech platform from scratch.',
      stats: ['30+ screens', '1,000 concurrent users', 'sub-180ms API responses'],
      body: 'Full-stack product owned entirely by one engineer — authentication, test engine, AI tutoring, live class system, behavioral analytics, and community platform — deployed within AWS free-tier constraints.',
      tech: ['Node.js', 'React', 'MongoDB', 'LangChain', 'Google AI', 'AWS'],
    },
    philosophy1: {
      quote:
        "I design systems under real constraints — not ideal infrastructure, but production-grade results with what's actually available.",
    },
    evidence2: {
      label: 'Freelance · Hedge Fund · NSE Futures Trading System',
      headline: 'Engineered a live market data pipeline.',
      stats: ['Millions of market ticks', 'Zero data loss under sustained load'],
      body: 'A Python WebSocket-to-TCP bridge delivering live NSE futures into a MATLAB trading system — decoupled, binary-serialized, and sub-millisecond accessible via in-memory O(1) snapshot reads.',
      tech: ['Python', 'WebSockets', 'TCP/IP', 'MessagePack', 'MATLAB'],
    },
    philosophy2: {
      quote: 'Reliability is a design choice. I build systems that are predictable when it matters most.',
    },
    evidence3: {
      label: 'Ayla Voice Chat · Remote · Sep 2025 – Dec 2025',
      headline: 'Inherited a broken production backend. Fixed it in one month.',
      body: 'Took ownership of a fragmented, undocumented Node.js backend for a social voice app. Re-architected into feature-scoped modules, stabilized real-time voice rooms with race-condition-free event handling, and shipped production-ready code — without touching production data.',
      tech: ['Node.js', 'MongoDB', 'Event-Driven Architecture', 'Agenda', 'AWS'],
    },
    projects: {
      sectionLabel: 'Selected Work',
      items: [
        {
          id: 'medjeex',
          name: 'Medjeex Edtech Platform',
          description:
            'AI-powered edtech platform built from scratch — full product, full stack, solo.',
          tech: ['Node.js', 'React', 'MongoDB', 'LangChain'],
          url: 'https://medjeex.com/',
        },
        {
          id: 'trading',
          name: 'Market Data Pipeline',
          description:
            'Live NSE futures feed into a MATLAB trading system via a WebSocket-to-TCP bridge.',
          tech: ['Python', 'WebSockets', 'MessagePack'],
          url: null,
        },
        {
          id: 'ayla',
          name: 'Ayla Voice Chat Backend',
          description:
            'Stabilized and re-architected a broken production backend for a social voice app.',
          tech: ['Node.js', 'Event-Driven', 'MongoDB'],
          url: 'https://play.google.com/store/apps/details?id=com.aylavoice.chatapp&hl=en_IN',
        },
        {
          id: 'ecowell',
          name: 'ECOWELL Digital Infrastructure',
          description:
            'Built the complete digital infrastructure for a multi-brand commerce group — performance engineering, analytics systems, and internal tooling.',
          tech: ['React', 'Shopify', 'Google Analytics'],
          url: 'https://www.ecowellonline.com/',
        },
        {
          id: 'curriculum',
          name: 'Curriculum Analytics Pipeline',
          description:
            'Data analytics pipeline identifying historical CBSE exam patterns and topic recurrence across years.',
          tech: ['Python', 'SQLite', 'Pandas'],
          url: null,
        },
      ],
    },
    contact: {
      headline: "If you're building something real, let's talk.",
    },
  },
} as const;
