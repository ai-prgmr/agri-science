// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer"; // <--- Import here
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ambaplastolite.com"),
  title: "Amba Plastolite | HDPE Bottle & Jar Manufacturer in Indore",
  description: "Amba Plastolite is a leading manufacturer of premium chemical-resistant HDPE bottles, agro jars, and PET containers in Indore, India. Specializing in Agro-chemical & Pesticide packaging since 2011.",
  keywords: ["HDPE bottle manufacturer Indore", "agro chemical bottles", "pesticide packaging India", "HDPE jars manufacturer", "plastic bottle manufacturer Palda", "co-extrusion barrier bottles", "fluorinated HDPE bottles"],
  authors: [{ name: "Amba Plastolite" }],
  icons: {
    icon: "/agri-science/icon.png",
    shortcut: "/agri-science/favicon.ico",
    apple: "/agri-science/apple-touch-icon.png",
  },
  openGraph: {
    title: "Amba Plastolite | HDPE Bottle & Jar Manufacturer in Indore",
    description: "Leading manufacturer of premium chemical-resistant HDPE bottles and agro jars in Indore, India. Specializing in Agro-chemical & Pesticide packaging since 2011.",
    url: "https://www.ambaplastolite.com",
    siteName: "Amba Plastolite",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo-amba.png",
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
    images: ["/logo-amba.png"],
  },
  other: {
    "geo.region": "IN-MP",
    "geo.placename": "Indore",
    "geo.position": "22.7056;75.8647",
    "ICBM": "22.7056, 75.8647",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Amba Plastolite",
  "image": "https://www.ambaplastolite.com/logo-amba.png",
  "@id": "https://www.ambaplastolite.com/#organization",
  "url": "https://www.ambaplastolite.com",
  "telephone": "+919826068066",
  "email": "ambaplasto@gmail.com",
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "452001",
      "addressCountry": "IN",
      "streetAddress": "71, Anand Nagar, 2nd Floor"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "452001",
      "addressCountry": "IN",
      "streetAddress": "128, Baradana Mandi, Palda"
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
  }
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