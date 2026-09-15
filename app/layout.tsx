import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pangasinan Heritage Digital Showcase",
  description:
    "Discover Alaminos' Hundred Islands, Bolinao's Lighthouse, and Balungao's Hot Spring — Pangasinan's iconic heritage sites.",
  metadataBase: new URL("https://pangasinan-heritage.example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body text-ink-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:shadow"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
