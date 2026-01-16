
// app/layout.tsx
import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camille Fénéon – Guest Experience & Operations Specialist",
  description:
    "Guest Experience Specialist for luxury villas, boutique hotels and premium short-term rentals. Combining elegant hospitality codes with real-world operational skills.",
  keywords: [
    "guest experience specialist",
    "hospitality operations",
    "luxury villas",
    "boutique hotels",
    "premium short-term rentals",
    "property management",
    "guest services",
    "hospitality coordinator",
    "property care",
    "guest relations",
  ],
  authors: [{ name: "Camille Fénéon" }],
  creator: "Camille Fénéon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://camille-feneon.com",
    title: "Camille Fénéon – Guest Experience & Operations Specialist",
    description:
      "Guest Experience Specialist for luxury villas, boutique hotels and premium short-term rentals. Combining elegant hospitality codes with real-world operational skills.",
    siteName: "Camille Fénéon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Camille Fénéon – Guest Experience & Operations Specialist",
    description:
      "Guest Experience Specialist for luxury villas, boutique hotels and premium short-term rentals.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}

