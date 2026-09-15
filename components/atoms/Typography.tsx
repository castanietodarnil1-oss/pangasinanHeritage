import { ElementType, ReactNode } from "react";

// ATOM: Typography
// A single component for every text style in the app so headings, body
// copy, and captions stay consistent without repeating className strings.
type Variant = "h1" | "h2" | "h3" | "body" | "caption" | "eyebrow";

const variantStyles: Record<Variant, string> = {
  h1: "font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 leading-tight",
  h2: "font-heading text-2xl sm:text-3xl font-semibold text-ink-900 leading-snug",
  h3: "font-heading text-lg sm:text-xl font-semibold text-ink-900",
  body: "font-body text-base text-ink-700 leading-relaxed",
  caption: "font-body text-sm text-ink-500",
  eyebrow:
    "font-body text-xs font-semibold uppercase tracking-widest text-primary",
};

const defaultTag: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  caption: "span",
  eyebrow: "span",
};

type TypographyProps = {
  variant: Variant;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function Typography({
  variant,
  as,
  className = "",
  children,
}: TypographyProps) {
  const Tag = as ?? defaultTag[variant];
  return (
    <Tag className={`${variantStyles[variant]} ${className}`}>
      {children}
    </Tag>
  );
}
