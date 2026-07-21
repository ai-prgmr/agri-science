// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer"; // <--- Import here
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ambaplastolite.com"),
  title: "Amba Plastolite | HDPE Bottle & Jar Manufacturer in Indore",
  description: "Amba Plastolite is a leading manufacturer of chemical-resistant HDPE bottles, agro jars & PET containers in Indore, India. Premium packaging since 2011.",
  keywords: ["HDPE bottle manufacturer Indore", "agro chemical bottles", "pesticide packaging India", "HDPE jars manufacturer", "plastic bottle manufacturer Palda", "co-extrusion barrier bottles", "fluorinated HDPE bottles"],
  authors: [{ name: "Amba Plastolite" }],
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Amba Plastolite | HDPE Bottle & Jar Manufacturer in Indore",
    description: "Leading manufacturer of premium chemical-resistant HDPE bottles and agro jars in Indore, India. Specializing in Agro-chemical & Pesticide packaging since 2011.",
    url: "https://ambaplastolite.com",
    siteName: "Amba Plastolite",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ambaplastolite.com/logo-amba-bg.png",
        width: 1200,
        height: 630,
        alt: "Amba Plastolite - HDPE Bottle & Jar Manufacturer Indore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amba Plastolite | HDPE Bottle & Jar Manufacturer in Indore",
    description: "Leading manufacturer of premium chemical-resistant HDPE bottles and agro jars in Indore, India. Specializing in Agro-chemical & Pesticide packaging since 2011.",
    images: ["https://ambaplastolite.com/logo-amba-bg.png"],
  },
  other: {
    "geo.region": "IN-MP",
    "geo.placename": "Indore",
    "geo.position": "22.7056;75.8647",
    "ICBM": "22.7056, 75.8647",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Manufacturer", "Organization"],
  "name": "Amba Plastolite",
  "alternateName": "Amba Plastolite Indore",
  "description": "Amba Plastolite is a leading manufacturer of chemical-resistant HDPE bottles, agro jars & PET containers in Indore, India. Specializing in Agro-chemical & Pesticide packaging since 2011.",
  "image": "https://ambaplastolite.com/logo-amba-bg.png",
  "logo": "https://ambaplastolite.com/logo-amba-bg.png",
  "@id": "https://ambaplastolite.com/#organization",
  "url": "https://ambaplastolite.com",
  "telephone": "+919826068066",
  "email": "ambaplasto@gmail.com",
  "priceRange": "$$",
  "foundingDate": "2011",
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "452001",
      "addressCountry": "IN",
      "streetAddress": "71, Anand Nagar, 2nd Floor, Behind Sapna-Sangeeta Talkies"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "452001",
      "addressCountry": "IN",
      "streetAddress": "128, Baradana Mandi, Palda Area"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 22.7056,
    "longitude": 75.8647
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://ambaplastolite.com"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {/* Children contains the page content (Hero, About, etc.) */}
        {children}

        {/* Footer sits at the bottom of everything */}
        <Footer />
      </body>
    </html>
  );
}