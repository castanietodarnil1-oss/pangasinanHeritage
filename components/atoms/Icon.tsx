import { LucideIcon } from "lucide-react";

// ATOM: Icon
// Wraps lucide-react so every icon in the app gets the same sizing,
// stroke width, and color defaults from one place, and so icons can be
// swapped for a different icon set later without touching call sites.
type IconProps = {
  icon: LucideIcon;
  size?: 16 | 20 | 24 | 32;
  className?: string;
  "aria-label"?: string;
};

export function Icon({
  icon: LucideIconComponent,
  size = 20,
  className = "text-current",
  ...rest
}: IconProps) {
  return (
    <LucideIconComponent
      size={size}
      strokeWidth={1.75}
      className={className}
      aria-hidden={rest["aria-label"] ? undefined : true}
      {...rest}
    />
  );
}
