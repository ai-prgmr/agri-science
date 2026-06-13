// components/products/product-card.tsx
import Link from "next/link";
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
        <Card className="group overflow-hidden border-slate-200 bg-white transition-all hover:shadow-lg">
            {/* Image Container - Using a gray bg for placeholder */}
            <div className="relative aspect-square overflow-hidden bg-slate-100">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    {/* Replace this div with <Image /> when you have files */}
                    <span>{product.name} Image</span>
                </div>

                {/* Category Badge */}
                <Badge className="absolute left-3 top-3 bg-white/90 text-slate-900 hover:bg-white/90">
                    {product.category}
                </Badge>
            </div>

            <CardContent className="p-4">
                <h3 className="line-clamp-1 text-lg font-bold text-slate-900">
                    {product.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                    {product.description}
                </p>

                {/* Quick Specs */}
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <Ruler className="h-4 w-4" />
                    <span>Capacity: <span className="font-medium text-slate-900">{product.capacity}</span></span>
                </div>

                {/* Features Tags */}
                <div className="mt-3 flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature) => (
                        <span key={feature} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                            {feature}
                        </span>
                    ))}
                    {product.features.length > 2 && (
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">+more</span>
                    )}
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full bg-blue-900 hover:bg-blue-800">
                    <Link href="/contact">
                        Request Quote <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}