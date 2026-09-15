// ATOM: Color Tokens
// Single source of truth for the visual language. Every other component
// references these tokens (via Tailwind's `tailwind.config.ts`, which reads
// the same values) instead of hard-coding hex codes, so a rebrand only
// requires editing this file.
export const colorTokens = {
  primary:      { value: "#0B6E99", role: "Primary / links / focus rings" },
  primaryDark:  { value: "#074A66", role: "Primary hover / active" },
  primaryLight: { value: "#3F98BE", role: "Primary on dark backgrounds" },
  secondary:    { value: "#E8871E", role: "Calls to action, highlights" },
  secondaryDark:{ value: "#C06B0C", role: "CTA hover / active" },
  accent:       { value: "#2FA88C", role: "Success / nature tags" },
  sand50:       { value: "#FBF9F5", role: "Page background" },
  sand100:      { value: "#F5F1E9", role: "Card / section background" },
  ink900:       { value: "#1A1D1F", role: "Primary text" },
  ink700:       { value: "#3D4246", role: "Secondary text" },
  ink500:       { value: "#6B7176", role: "Muted / placeholder text" },
} as const;

export const spacingScale = [4, 8, 12, 16, 24, 32, 48, 64] as const; // px, 4px base grid

export const breakpoints = {
  mobile: 0,     // 0–639px   (default, mobile-first)
  tablet: 640,   // 640–1023px
  desktop: 1024, // 1024px+
} as const;
