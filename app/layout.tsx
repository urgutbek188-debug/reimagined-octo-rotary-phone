import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Warren Mitchell — Quiet Wealth",
  description:
    "I was $180,000 in debt at 27. Now I teach 50,000+ Americans how to escape debt and build quiet wealth — without the Wall Street BS. Free starter kit inside.",
  metadataBase: new URL("https://quietwealth.com"), // ← change to your domain
  openGraph: {
    title: "Warren Mitchell — Quiet Wealth",
    description:
      "Escape debt. Build quiet wealth. Free 7-Day Money Reset, budget template, and Debt Escape Map.",
    images: ["/og.png"], // ← export a 1200x630 image of Warren with the headline
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
