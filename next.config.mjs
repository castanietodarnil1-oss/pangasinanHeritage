/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> JAMstack deployment (Netlify, Vercel, Cloudflare Pages, GitHub Pages)
  output: "export",
  basePath: "/pangasinanHeritage",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;