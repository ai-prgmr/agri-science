import Link from "next/link";
import {
  ArrowRight,
  Settings,
  Truck,
  ShieldCheck,
  Phone,
  DraftingCompass,
  Factory,
  ClipboardList
} from "lucide-react";
import { Metadata } from "next";

// Components
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/product-card";
import { AgroMasterySection } from "@/components/home/agro-mastery";
import { HeroCarousel } from "@/components/home/hero-carousel";

// Data
import { containers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Amba Plastolite | HDPE Bottle & Jar Manufacturer in Indore",
  description: "Leading manufacturer of premium chemical-resistant HDPE agro bottles, plastic jars, and jerry cans in Indore, India. 15+ years of packaging mastery.",
  alternates: {
    canonical: "/",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes Amba Plastolite HDPE bottles safe for pesticides and agrochemicals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our containers are manufactured using 100% virgin high-density polyethylene (HDPE) with precision wall thickness control and optional fluorination or co-extruded barrier layers. This prevents paneling, container collapse, and chemical permeation, making them completely secure for active, volatile, and hazardous crop-protection chemicals."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer custom mold design and branding for bottles and jars?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We have an in-house design and engineering team that creates custom precision molds tailored to your specific container capacity (from 50ml up to 5 Liters), custom branding, logo embossing, and specialized cap/neck configurations to ensure safe, spill-free pouring."
      }
    },
    {
      "@type": "Question",
      "name": "How does Amba Plastolite handle high-volume seasonal spikes in packaging demand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We operate fully automatic, high-capacity extrusion blow molding lines running in 24/7 cycles. This allows us to handle large-scale, abrupt seasonal demand spikes (common in the agriculture sector before monsoon cycles) and maintain an uninterrupted, agile supply."
      }
    },
    {
      "@type": "Question",
      "name": "Where are your office and manufacturing unit located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our state-of-the-art manufacturing unit is situated at 128, Baradana Mandi, Palda Industrial Area, Indore, Madhya Pradesh (452001). Our corporate office is located at 71, Anand Nagar, Indore. We provide reliable shipping and logistics across India."
      }
    }
  ]
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://ambaplastolite.com"
    }
  ]
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Amba Plastolite",
  "url": "https://ambaplastolite.com"
};

export default function Home() {
  // 1. Get Top 3-4 products for the showcase section
  const featuredContainers = containers.slice(0, 4);

  // 2. Banner Data
  const banners = [
    {
      id: 1,
      title: "Mastery in Agro & Pesticides Packaging",
      subtitle: "Over 15 years of precision manufacturing for high-grade chemical-resistant HDPE containers.",
      color: "bg-blue-900", // Fallback color if image fails
    },
    {
      id: 2,
      title: "Custom Mold Design",
      subtitle: "We turn your concept into reality with our in-house design team.",
      color: "bg-slate-800",
    },
    {
      id: 3,
      title: "Bulk Supply Chain",
      subtitle: "Reliable delivery for high-volume seasonal demands.",
      color: "bg-green-900",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <main className="flex-1">

        {/* SECTION 1: HERO CAROUSEL */}
        <section className="relative w-full">
          <HeroCarousel banners={banners} />
        </section>

        {/* SECTION: STATS STRIP */}
        <section className="bg-blue-900 py-12 text-white border-b border-blue-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-800/50">

              {/* Stat 1 */}
              <div className="space-y-2">
                <h3 className="text-4xl font-extrabold text-white">15+</h3>
                <p className="text-blue-200 text-sm uppercase tracking-wider font-medium">Years Experience</p>
              </div>

              {/* Stat 2 */}
              <div className="space-y-2">
                <h3 className="text-4xl font-extrabold text-white">250+</h3>
                <p className="text-blue-200 text-sm uppercase tracking-wider font-medium">Clients Served</p>
              </div>

              {/* Stat 3 */}
              <div className="space-y-2">
                <h3 className="text-4xl font-extrabold text-white">100%</h3>
                <p className="text-blue-200 text-sm uppercase tracking-wider font-medium">Virgin HDPE</p>
              </div>

              {/* Stat 4 */}
              <div className="space-y-2">
                <h3 className="text-4xl font-extrabold text-white">24/7</h3>
                <p className="text-blue-200 text-sm uppercase tracking-wider font-medium">Production Cycle</p>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: CORE SERVICES / WHY CHOOSE US */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                More Than Just Manufacturing
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We provide end-to-end packaging solutions, ensuring your product stands out on the shelf while remaining secure.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-6">
                  <Settings className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Mold Design</h3>
                <p className="text-slate-600">
                  Have a unique bottle shape in mind? Our in-house design team creates custom molds tailored to your brand identity.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center text-green-700 mb-6">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Assurance</h3>
                <p className="text-slate-600">
                  Every batch undergoes rigorous testing for leak-proofing, wall thickness consistency, and drop impact resistance.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="h-14 w-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 mb-6">
                  <Truck className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Timely Delivery</h3>
                <p className="text-slate-600">
                  Located in the heart of India (Indore), we ensure rapid logistics and bulk supply handling for seasonal spikes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Agro & Pesticides Mastery Section */}
        <AgroMasterySection />

        {/* SECTION: HOW WE WORK (PROCESS) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                From Concept to Carton
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We handle the entire lifecycle of your packaging needs, ensuring consistency from the first design sketch to the final delivery.
              </p>
            </div>

            <div className="relative grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {/* Connector Line (Desktop Only) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10" />

              {/* Step 1 */}
              <div className="flex flex-col items-center justify-center text-center rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow p-6 relative">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0 shadow-lg shadow-blue-200"><ClipboardList /></div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center md:text-left">Brand Consultation</h3>
                <p className="text-slate-600 text-sm">
                  We analyze your product (density, chemical nature) to recommend the right bottle weight and shape.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center justify-center text-center rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow p-6 relative">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0 shadow-lg shadow-blue-200"><DraftingCompass /></div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center md:text-left">Mold Design</h3>
                <p className="text-slate-600 text-sm">
                  Our in-house design team creates 3D mockups and precision molds for custom branding.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center justify-center text-center rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow p-6 relative">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0 shadow-lg shadow-blue-200"><Factory /></div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center md:text-left">Production</h3>
                <p className="text-slate-600 text-sm">
                  Using fully automatic extrusion blow moulding machines, we manufacture with zero defects.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center justify-center text-center rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow p-6 relative">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0 shadow-lg shadow-green-200"><Truck /></div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center md:text-left">Dispatch</h3>
                <p className="text-slate-600 text-sm">
                  Secure packaging and reliable logistics ensure your bulk order arrives on time, every time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: FEATURED PRODUCTS */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured Containers</h2>
                <p className="mt-2 text-slate-600">High-demand containers from our Agro & Pharma lines.</p>
              </div>
              <Button asChild variant="outline" className="hidden md:flex">
                <Link href="/products">View Full Catalog <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredContainers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AEO/GEO FAQ SECTION */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Direct, clear answers to common questions about our HDPE chemical packaging manufacturing, capacity, and logistics.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
              {/* Question 1 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-slate-950">
                  What makes Amba Plastolite HDPE bottles safe for pesticides and agrochemicals?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our containers are manufactured using 100% virgin high-density polyethylene (HDPE) with precision wall thickness control and optional fluorination or co-extruded barrier layers. This prevents paneling, container collapse, and chemical permeation, making them completely secure for active, volatile, and hazardous crop-protection chemicals.
                </p>
              </div>

              {/* Question 2 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-slate-950">
                  Do you offer custom mold design and branding for bottles and jars?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Yes. We have an in-house design and engineering team that creates custom precision molds tailored to your specific container capacity (from 50ml up to 5 Liters), custom branding, logo embossing, and specialized cap/neck configurations to ensure safe, spill-free pouring.
                </p>
              </div>

              {/* Question 3 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-slate-950">
                  How does Amba Plastolite handle high-volume seasonal spikes in packaging demand?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We operate fully automatic, high-capacity extrusion blow molding lines running in 24/7 cycles. This allows us to handle large-scale, abrupt seasonal demand spikes (common in the agriculture sector before monsoon cycles) and maintain an uninterrupted, agile supply.
                </p>
              </div>

              {/* Question 4 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-slate-950">
                  Where are your office and manufacturing unit located?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our state-of-the-art manufacturing unit is situated at 128, Baradana Mandi, Palda Industrial Area, Indore, Madhya Pradesh (452001). Our corporate office is located at 71, Anand Nagar, Indore. We provide reliable shipping and logistics across India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHATSAPP / CTA BANNER */}
        <section className="py-16 bg-blue-900">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Custom Quote?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              We respond fastest on WhatsApp. Send us your requirements (Bottle Size, Quantity, Industry) and get an instant price estimation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* WhatsApp Button */}
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white border-none h-14 px-8 text-lg shadow-xl shadow-green-900/20">
                <a
                  href="https://wa.me/919826068066?text=Hi%20Amba%20Plastolite,%20I%20am%20interested%20in%20your%20HDPE%20products.%20Can%20we%20discuss%20a%20quote?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-5 w-5 fill-current" />
                  Chat on WhatsApp
                </a>
              </Button>

              {/* Standard Contact Button */}
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900 h-14 px-8 text-lg">
                <Link href="/contact">
                  Request via Email
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}