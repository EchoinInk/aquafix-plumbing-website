import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aquafix-plumbing.thekiwinextdoor.chatgpt.site"),
  title: {
    default: "AquaFix Plumbing | Emergency & Local Plumbers in Auckland",
    template: "%s | AquaFix Plumbing",
  },
  description:
    "AquaFix Plumbing provides reliable emergency plumbing, blocked drain repairs, leak detection, hot water services, and residential or commercial plumbing across Auckland.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AquaFix Plumbing | Emergency & Local Plumbers in Auckland",
    description:
      "Reliable emergency plumbing, drain repairs, leak detection, hot water services, and residential or commercial plumbing across Auckland.",
    url: "https://aquafix-plumbing.thekiwinextdoor.chatgpt.site",
    siteName: "AquaFix Plumbing",
    images: [{ url: "/images/hero-technicians.webp", width: 1448, height: 1086 }],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AquaFix Plumbing",
    description: "Fast, reliable plumbing when you need it most.",
    images: ["/images/hero-technicians.webp"],
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/brand/aquafix-symbol.svg", shortcut: "/brand/aquafix-symbol.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
