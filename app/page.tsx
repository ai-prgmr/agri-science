'use client';
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Settings,
  Truck,
  ShieldCheck,
  Phone,
  DraftingCompass,
  Factory,
  ClipboardList
} from "lucide-react";
import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
// Components
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IndustryGrid } from "@/components/home/industry-grid";

// Data
import { containers } from "@/lib/data";

export default function Home() {
  // 1. Get Top 3-4 products for the showcase section
  const featuredContainers = containers.slice(0, 4);
  const plugin = React.useRef(
    Autoplay({ delay: 2000 })
  );
  // 2. Banner Data (Placeholder for your 4 images)
  const banners = [
    {
      id: 1,
      title: "Precision HDPE Manufacturing",
      subtitle: "High-grade packaging solutions for Pharmaceutical & Agro industries.",
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

      <main className="flex-1">

        {/* SECTION 1: HERO CAROUSEL */}
        <section className="relative w-full">
          <Carousel plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset} opts={{ loop: true }}>
            <CarouselContent>
              {banners.map((banner) => (
                <CarouselItem key={banner.id}>
                  <div className={`relative h-[500px] md:h-[600px] w-full ${banner.color} flex items-center`}>

                    {/* Background Image Placeholder - Replace with <Image> */}
                    <Image src={`/agri-science/banner-${banner.id}.jpg`} alt={banner.title} fill className="aspect-9/16object-cover opacity-50" />
                    <div className="absolute inset-0 bg-black/10" /> {/* Overlay for text readability */}

                    <div className="container mx-atuo relative z-10 px-4 md:px-6">
                      <div className="max-w-2xl space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 py-1 text-sm font-medium text-white">
                          Since 2011
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                          {banner.title}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200">
                          {banner.subtitle}
                        </p>
                        <div className="flex gap-4 pt-4">
                          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-slate-100">
                            <Link href="/products">View Catalog</Link>
                          </Button>
                          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white bg-transparent">
                            <Link href="/contact">Contact Us</Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Navigation Arrows (Hidden on mobile usually, distinct on desktop) */}
            <CarouselPrevious className="left-4 bg-white/10 border-none text-white hover:bg-white/20" />
            <CarouselNext className="right-4 bg-white/10 border-none text-white hover:bg-white/20" />
          </Carousel>
        </section>
        {/* SECTION: STATS STRIP */}
        <section className="bg-blue-900 py-12 text-white border-b border-blue-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-800/50">

              {/* Stat 1 */}
              <div className="space-y-2">
                <h3 className="text-4xl font-extrabold text-white">12+</h3>
                <p className="text-blue-200 text-sm uppercase tracking-wider font-medium">Years Experience</p>
              </div>

              {/* Stat 2 */}
              <div className="space-y-2">
                <h3 className="text-4xl font-extrabold text-white">50+</h3>
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
        {/* Industry Grid */}
        <IndustryGrid />
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