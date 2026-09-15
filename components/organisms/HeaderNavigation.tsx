"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Compass, Info, Menu, X } from "lucide-react";
import { NavigationItem } from "@/components/molecules/NavigationItem";
import { SearchForm } from "@/components/molecules/SearchForm";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/components/atoms/Icon";

// ORGANISM: HeaderNavigation
// Composes NavigationItem + SearchForm molecules into the site-wide
// header. Mobile-first: below the tablet breakpoint the nav collapses
// into a bottom-anchored menu toggled by a 44x44px hamburger button,
// keeping search + primary links within thumb's reach on a phone.
const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/about", label: "About", icon: Info },
];

export function HeaderNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-500/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-primary" aria-hidden />
          <Typography variant="h3" as="span">
            Pangasinan Heritage
          </Typography>
        </Link>

        {/* Desktop search + nav (tablet and up) */}
        <div className="hidden flex-1 items-center justify-end gap-6 sm:flex">
          <SearchForm className="max-w-xs" />
          <nav aria-label="Primary" className="flex items-center gap-1">
            {navLinks.map((link) => (
              <NavigationItem key={link.href} {...link} />
            ))}
          </nav>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-ink-900 sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon icon={menuOpen ? X : Menu} size={24} />
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="space-y-4 border-t border-ink-500/10 px-4 py-4 sm:hidden"
        >
          <SearchForm />
          <nav aria-label="Primary" className="flex justify-around">
            {navLinks.map((link) => (
              <NavigationItem key={link.href} {...link} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
