// app/products/page.tsx
"use client";

import { useState } from "react";
import { ProductCard } from "@/components/products/product-card";
import { containers, Category } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

// Get unique categories from data
const allCategories = ["All", ...new Set(containers.map((p) => p.category))];

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const filteredProducts =
        selectedCategory === "All"
            ? containers
            : containers.filter((p) => p.category === selectedCategory);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">

            {/* Page Header */}
            <div className="bg-white border-b">
                <div className="container mx-auto py-12">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Product Catalog</h1>
                    <p className="mt-2 text-slate-600 max-w-2xl">
                        Browse our complete range of HDPE bottles, jars, and containers.
                        All products can be customized for color and weight.
                    </p>
                </div>
            </div>

            <div className="container mx-auto py-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Desktop Sidebar Filters */}
                    <aside className="hidden lg:block w-64 shrink-0 space-y-6">
                        <div className="sticky top-24">
                            <h3 className="font-semibold text-lg mb-4">Categories</h3>
                            <div className="space-y-1">
                                {allCategories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedCategory === category
                                            ? "bg-blue-100 text-blue-900 font-medium"
                                            : "text-slate-600 hover:bg-slate-100"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Mobile Filter Sheet */}
                    <div className="lg:hidden mb-4">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" className="flex items-center gap-2">
                                    <SlidersHorizontal className="h-4 w-4" /> Filters
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader>
                                    <SheetTitle>Categories</SheetTitle>
                                </SheetHeader>
                                <div className="grid gap-2 mt-4">
                                    {allCategories.map((category) => (
                                        <Button
                                            key={category}
                                            variant={selectedCategory === category ? "default" : "ghost"}
                                            className="justify-start"
                                            onClick={() => setSelectedCategory(category)}
                                        >
                                            {category}
                                        </Button>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-12 text-slate-500">
                                <p>No products found in this category.</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}