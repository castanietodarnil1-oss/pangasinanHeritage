"use client";

import { FormEvent, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";

// MOLECULE: SearchForm
// Composes an input + Icon + Button atom. Used in the HeaderNavigation
// (desktop) and as a standalone full-width block under the mobile menu.
type SearchFormProps = {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
};

export function SearchForm({
  onSearch,
  placeholder = "Search heritage sites\u2026",
  className = "",
}: SearchFormProps) {
  const [query, setQuery] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch?.(query.trim());
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={`flex w-full items-center gap-2 ${className}`}
    >
      <label htmlFor="site-search" className="sr-only">
        Search heritage sites
      </label>
      <div className="relative flex-1">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-ink-500">
          <Icon icon={Search} size={18} />
        </span>
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-full border border-ink-500/20 bg-white py-2.5 pl-10 pr-4 text-sm text-ink-900 placeholder:text-ink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        />
      </div>
      <Button type="submit" size="md" variant="primary">
        Search
      </Button>
    </form>
  );
}
