// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer"; // <--- Import here
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amba Plastolite | HDPE Bottle Manufacturer in Indore",
  description: "Manufacturer and supplier of high-quality HDPE bottles, jars, and containers for Agro, Pharma, and FMCG industries in Indore, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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