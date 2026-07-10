"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Banner {
  id: number;
  title: string;
  subtitle: string;
  color: string;
}

interface HeroCarouselProps {
  banners: Banner[];
}

export function HeroCarousel({ banners }: HeroCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3500 })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={banner.id}>
            <div className={`relative h-[550px] md:h-[650px] w-full ${banner.color} flex items-center`}>

              {/* Background Image */}
              <Image
                src={`/agri-science/banner-${banner.id}.jpg`}
                alt={banner.title}
                fill
                className="object-cover opacity-45"
                priority={banner.id === 1}
              />
              <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-900/60 to-transparent" />

              <div className="container mx-auto relative z-10 px-4 md:px-6">
                <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white tracking-wider uppercase border border-white/20">
                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /> Since 2011 • ISO Standard Quality
                  </div>

                  {index === 0 ? (
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15]">
                      {banner.title}
                    </h1>
                  ) : (
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15]">
                      {banner.title}
                    </h2>
                  )}

                  <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-2xl">
                    {banner.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button asChild size="lg" className="bg-white text-blue-950 hover:bg-slate-100 font-semibold h-12 px-6">
                      <Link href="/products">Browse Catalog <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent h-12 px-6">
                      <Link href="/contact">Get Free Consultation</Link>
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Navigation Arrows */}
      <CarouselPrevious className="left-4 bg-white/10 border-none text-white hover:bg-white/20 hidden md:flex" />
      <CarouselNext className="right-4 bg-white/10 border-none text-white hover:bg-white/20 hidden md:flex" />
    </Carousel>
  );
}
