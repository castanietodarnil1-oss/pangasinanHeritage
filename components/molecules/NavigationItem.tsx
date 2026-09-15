import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { Icon } from "@/components/atoms/Icon";
import { Typography } from "@/components/atoms/Typography";

// MOLECULE: NavigationItem
// One link inside HeaderNavigation. Renders icon-only on very small
// screens and icon+label from the tablet breakpoint up.
type NavigationItemProps = {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
};

export function NavigationItem({
  href,
  label,
  icon,
  isActive = false,
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={[
        "flex flex-col items-center gap-1 rounded-lg px-2 py-1.5 sm:flex-row sm:gap-2 sm:px-3 sm:py-2",
        "min-h-[44px] min-w-[44px] justify-center", // touch target
        "transition-colors",
        isActive
          ? "text-primary font-semibold"
          : "text-ink-700 hover:text-primary",
      ].join(" ")}
    >
      <Icon icon={icon} size={20} />
      <Typography
        variant="caption"
        as="span"
        className={`text-[11px] sm:text-sm ${isActive ? "text-primary font-semibold" : ""}`}
      >
        {label}
      </Typography>
    </Link>
  );
}
