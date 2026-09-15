import { HeritageCard } from "@/components/molecules/HeritageCard";
import { Typography } from "@/components/atoms/Typography";
import type { HeritageSite } from "@/lib/data/heritageSites";

// ORGANISM: HeritageGrid
// The main content block of the homepage: a responsive grid of
// HeritageCard molecules. Column count is driven purely by breakpoint,
// so adding a 4th, 5th, or 50th site to lib/data/heritageSites.ts is
// enough to have it appear here correctly laid out.
type HeritageGridProps = {
  sites: HeritageSite[];
  title?: string;
};

export function HeritageGrid({
  sites,
  title = "Featured Heritage Sites",
}: HeritageGridProps) {
  return (
    <section aria-labelledby="heritage-grid-heading" className="py-8 sm:py-12">
      <Typography
        id="heritage-grid-heading"
        as="h2"
        variant="h2"
        className="mb-6 px-4 sm:px-6"
      >
        {title}
      </Typography>

      {sites.length === 0 ? (
        <Typography variant="body" className="px-4 sm:px-6">
          No heritage sites match your search.
        </Typography>
      ) : (
        <ul
          className="grid grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:gap-6"
        >
          {sites.map((site) => (
            <li key={site.slug}>
              <HeritageCard site={site} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
