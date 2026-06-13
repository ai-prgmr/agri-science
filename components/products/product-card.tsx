// components/products/product-card.tsx
import Image from "next/image";
import { ArrowUpRight, Ruler } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/lib/data";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className="group overflow-hidden border-slate-200 bg-white transition-all hover:shadow-lg duration-300">
            {/* Image Container with Hover Zoom effect */}
            <div className="relative aspect-square overflow-hidden bg-slate-50">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    priority={false}
                />

                {/* Category Badge */}
                <Badge className="absolute left-3 top-3 bg-white/95 text-slate-900 border border-slate-200 shadow-sm hover:bg-white/95 font-medium">
                    {product.category}
                </Badge>
                
                {/* Specialty Badge */}
                {product.industry === "Agro" ? (
                    <Badge className="absolute right-3 top-3 bg-green-700 hover:bg-green-700 text-white shadow-sm font-semibold border-none">
                        Agro-Grade
                    </Badge>
                ) : (
                    <Badge className="absolute right-3 top-3 bg-slate-800 hover:bg-slate-850 text-white shadow-sm font-medium border-none">
                        Premium HDPE
                    </Badge>
                )}
            </div>

            <CardContent className="p-4">
                <h3 className="line-clamp-1 text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {product.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-slate-600 min-h-[40px]">
                    {product.description}
                </p>

                {/* Quick Specs */}
                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                    <Ruler className="h-4 w-4 text-blue-900" />
                    <span>Capacity: <span className="font-semibold text-slate-900">{product.capacity}</span></span>
                </div>

                {/* Features Tags */}
                <div className="mt-3 flex flex-wrap gap-1 min-h-[24px]">
                    {product.features.slice(0, 2).map((feature) => (
                        <span key={feature} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 font-medium border border-slate-200/50">
                            {feature}
                        </span>
                    ))}
                    {product.features.length > 2 && (
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 font-medium border border-slate-200/50">+more</span>
                    )}
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium transition-colors">
                    <a
                        href={`https://wa.me/919826068066?text=Hi%20Amba%20Plastolite,%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}%20(${product.capacity}).%20Could%20you%20please%20send%20a%20quote?`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Request Quote <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}