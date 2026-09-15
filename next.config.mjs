/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> JAMstack deployment (Netlify, Vercel, Cloudflare Pages, GitHub Pages)
  output: "export",
  images: {
    // Static export can't use the Next.js image server, so images are
    // pre-optimized at build time instead (see /public/images).
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
