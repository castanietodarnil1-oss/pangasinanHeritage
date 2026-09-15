import NextImage, { ImageProps as NextImageProps } from "next/image";

// ATOM: Image
// Wraps next/image so every image on the site gets lazy loading,
// responsive `sizes`, and a required `alt` (accessibility) by default —
// the single place that controls how images are optimized for 3G/4G.
type ImageProps = Omit<NextImageProps, "sizes"> & {
  sizes?: string;
};

export function Image({
  alt,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className = "",
  priority = false,
  ...rest
}: ImageProps) {
  return (
    <NextImage
      alt={alt} // required — never defaulted, forces every usage to describe the image
      sizes={sizes}
      // next/image rejects loading="lazy" combined with priority, and
      // above-the-fold images (priority) should load eagerly anyway.
      {...(!priority && { loading: "lazy" as const })}
      priority={priority}
      className={`object-cover ${className}`}
      {...rest}
    />
  );
}
