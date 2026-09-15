import { HeaderNavigation } from "@/components/organisms/HeaderNavigation";
import { HeritageGrid } from "@/components/organisms/HeritageGrid";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { Image } from "@/components/atoms/Image";
import { heritageSites } from "@/lib/data/heritageSites";

export default function HomePage() {
  return (
    <>
      <HeaderNavigation />
      <main id="main-content">
        <section className="bg-primary/5 px-4 py-12 sm:px-6 sm:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center lg:flex-row lg:gap-12 lg:text-left">
            {/* Hero copy */}
            <div className="flex-1">
              <Typography variant="eyebrow" as="p" className="mb-3">
                Province of Pangasinan
              </Typography>
              <Typography variant="h1" className="mx-auto max-w-2xl lg:mx-0">
                Discover Pangasinan&apos;s Living Heritage
              </Typography>
              <Typography
                variant="body"
                className="mx-auto mt-4 max-w-xl text-base sm:text-lg lg:mx-0"
              >
                From the 124 islands of Alaminos to the century-old lighthouse
                of Bolinao and the healing springs of Balungao — explore the
                province, one heritage site at a time.
              </Typography>
              <div className="mt-6 flex flex-col justify-center gap-3 xs:flex-row lg:justify-start">
                <Button variant="primary" size="lg" className="w-full xs:w-auto">
                  Start Exploring
                </Button>
                <Button variant="ghost" size="lg" className="w-full xs:w-auto">
                  Plan a Trip
                </Button>
              </div>
            </div>

            {/* Hero picture */}
            <div className="relative aspect-[4/3] w-full max-w-md flex-1 overflow-hidden rounded-card shadow-lg sm:aspect-[16/10] lg:max-w-none">
              <Image
                src="/images/pang.webp"
                alt="Aerial view of the Hundred Islands National Park, Alaminos, Pangasinan"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </section>

        <HeritageGrid sites={heritageSites} />
      </main>
    </>
  );
}
