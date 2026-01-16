
// app/layout.tsx
import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camille Fénéon – Guest Experience & Operations Specialist",
  description:
    "Guest Experience Specialist for luxury villas, boutique hotels and premium short-term rentals. Combining elegant hospitality codes with real-world operational skills.",
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

