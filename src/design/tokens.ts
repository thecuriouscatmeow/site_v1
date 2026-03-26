export const tokens = {
  color: {
    bg:        '#FAF9F6',
    text:      '#111111',
    textMuted: '#6B6B6B',
    accent:    '#007F5F',
    surface:   '#F0EFEB',
    border:    '#E0DED8',
  },
  font: {
    sans:    "'Inter', system-ui, sans-serif",
    display: "'Fraunces', Georgia, serif",
  },
  size: {
    hero:     'clamp(3.5rem, 8vw, 7rem)',
    headline: 'clamp(2rem, 5vw, 4rem)',
    subhead:  'clamp(1.1rem, 2.5vw, 1.5rem)',
    body:     '1rem',
    label:    '0.75rem',
  },
  leading: {
    tight:  1.1,
    normal: 1.6,
  },
  tracking: {
    wide: '0.08em',
  },
  space: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '8rem',
  },
  motion: {
    fast: '150ms ease',
    base: '300ms ease',
    slow: '600ms ease-out',
  },
} as const;

export type Tokens = typeof tokens;
