import { MapPin } from "lucide-react";
import { Image } from "@/components/atoms/Image";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/components/atoms/Icon";
import type { HeritageSite } from "@/lib/data/heritageSites";

// MOLECULE: HeritageCard
// Composes Image + Typography + Icon atoms into the single unit used
// to preview a tourist site. Used exclusively inside a HeritageGrid.
type HeritageCardProps = {
  site: HeritageSite;
};

export function HeritageCard({ site }: HeritageCardProps) {
  return (
    <a
      href={`/sites/${site.slug}`}
      className="group block overflow-hidden rounded-card bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand-200">
        <Image
          src={site.image}
          alt={`${site.name} in ${site.town}, Pangasinan`}
          fill
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
          {site.category}
        </span>
      </div>

      <div className="space-y-2 p-4">
        <Typography variant="h3" className="line-clamp-1">
          {site.name}
        </Typography>
        <div className="flex items-center gap-1 text-ink-500">
          <Icon icon={MapPin} size={16} />
          <Typography variant="caption">{site.town}, Pangasinan</Typography>
        </div>
        <Typography variant="body" className="line-clamp-2 text-sm">
          {site.blurb}
        </Typography>
      </div>
    </a>
  );
}
