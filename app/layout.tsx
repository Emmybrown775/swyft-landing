import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://bookswyft.com"; // 🔁 Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Core SEO ──────────────────────────────────────────────
  title: {
    default:
      "Swyft Logistics Port Harcourt – Delivery Services in Rivers State",
    template: "%s | YourCompany Logistics Port Harcourt",
  },
  description:
    "Port Harcourt's trusted logistics company. We provide cheap eco-friendly, Logistics services across PortHarcourt Rivers State.",
  keywords: [
    "logistics company Port Harcourt",
    "cargo delivery Port Harcourt",
    "last-mile delivery Port Harcourt",
    "supply chain Rivers State",
    "courier services Port Harcourt",
  ],
  authors: [{ name: "Swyft Mobility", url: BASE_URL }],
  creator: "Swyft Mobility",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  // ── Canonical URL ─────────────────────────────────────────
  alternates: {
    canonical: "/",
  },

  // ── Robots / Indexing ─────────────────────────────────────
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

  // ── Open Graph (social sharing) ───────────────────────────
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: BASE_URL,
    siteName: "Swyft Mobility, Logistics Port Harcourt",
    title: "Swyft Mobility Port Harcourt – Delivery in Rivers State",
    description:
      "Port Harcourt's trusted logistics company. We provide cheap eco-friendly, Logistics services across PortHarcourt Rivers State.",
    images: [
      {
        url: "/website.png", // 🔁 Add a 1200×630px image to /public
        width: 1200,
        height: 630,
        alt: "Swyft Mobility, Logistics – Port Harcourt Delivery Services",
      },
    ],
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Swyft Mobility",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Swyft Mobility",
    description:
      "Electric bicycle delivery service in Port Harcourt, Rivers State.",
    url: "https://bookswyft.com",
    image: "https://bookswyft.com/website.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Port Harcourt",
      addressRegion: "Rivers State",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 4.8156,
      longitude: 7.0498,
    },
    areaServed: "Port Harcourt",
    priceRange: "₦",
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
      </body>
    </html>
  );
}
