// Central content source — decoupled from presentation so the marketing
// team can update site copy without touching component code.
export type HeritageSite = {
  slug: string;
  name: string;
  town: string;
  category: "Island" | "Landmark" | "Nature";
  blurb: string;
  image: string;
};

export const heritageSites: HeritageSite[] = [
  {
    slug: "hundred-islands",
    name: "Hundred Islands National Park",
    town: "Alaminos",
    category: "Island",
    blurb:
      "A 124-island archipelago in the Lingayen Gulf, the country's first national marine reserve and a geological wonder.",
    image: "/pangasinanHeritage/images/26-hundred-island-main-banner.webp",
  },
  {
    slug: "bolinao-lighthouse",
    name: "Cape Bolinao Lighthouse",
    town: "Bolinao",
    category: "Landmark",
    blurb:
      "A Spanish-era parola built in 1905, standing above sea level with panoramic views of the West Philippine Sea.",
    image: "/pangasinanHeritage/images/98.webp",
  },
  {
    slug: "balungao-hot-spring",
    name: "Balungao Hot Spring & Aqua Resort",
    town: "Balungao",
    category: "Nature",
    blurb:
      "Mineral-rich hot springs at the foot of the Balungao mountain range, long valued by locals for their therapeutic properties.",
    image: "/pangasinanHeritage/images/maxresdefault.jpg",
  },
];