import { ButtonHTMLAttributes, ReactNode } from "react";

// ATOM: Button
// The only interactive "press" surface in the design system. Variants map
// 1:1 to design tokens so no screen ever invents a one-off button style.
type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary",
  secondary:
    "bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary",
  ghost:
    "bg-transparent text-primary border border-primary hover:bg-primary/10 focus-visible:ring-primary",
};

const sizeStyles: Record<Size, string> = {
  sm: "text-sm px-3 py-2",
  md: "text-base px-4 py-2.5",
  lg: "text-lg px-6 py-3",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full font-heading font-medium",
        "min-h-[44px]", // WCAG 2.5.5 — minimum 44x44px touch target
        "transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
