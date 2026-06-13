// app/products/page.tsx
"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ProductCard } from "@/components/products/product-card";
import { containers, Category, Industry } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Search, X, RotateCcw } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const allCategories: (Category | "All")[] = ["All", "Bottle", "HDPE Jar/Box", "PET"];
const allIndustries: (Industry | "All")[] = ["All", "Agro", "Pharma", "Cosmetic", "Industrial"];

const industryLabels: Record<string, string> = {
    All: "All Industries",
    Agro: "Agro & Pesticides",
    Pharma: "Pharmaceuticals",
    Cosmetic: "Cosmetics & FMCG",
    Industrial: "Industrial & Auto"
};

function ProductsCatalog() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const selectedCategory = (searchParams.get("category") as Category | "All") || "All";
    const selectedIndustry = (searchParams.get("industry") as Industry | "All") || "All";
    const searchQuery = searchParams.get("search") || "";

    const [searchTerm, setSearchTerm] = useState(searchQuery);

    // Sync input value with URL search query changes
    useEffect(() => {
        setSearchTerm(searchQuery);
    }, [searchQuery]);

    const setFilter = (key: "category" | "industry", value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value === "All") {
            params.delete(key);
        } else {
            params.set(key, value);
        }
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setSearchTerm(val);

        const params = new URLSearchParams(searchParams.toString());
        if (!val) {
            params.delete("search");
        } else {
            params.set("search", val);
        }
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const clearSearch = () => {
        setSearchTerm("");
        const params = new URLSearchParams(searchParams.toString());
        params.delete("search");
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const clearAllFilters = () => {
        setSearchTerm("");
        router.push(pathname, { scroll: false });
    };

    const filteredProducts = containers.filter((product) => {
        const matchesCategory =
            selectedCategory === "All" || product.category === selectedCategory;
        const matchesIndustry =
            selectedIndustry === "All" || product.industry === selectedIndustry;
        const matchesSearch =
            searchQuery === "" ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.features.some((f) =>
                f.toLowerCase().includes(searchQuery.toLowerCase())
            );

        return matchesCategory && matchesIndustry && matchesSearch;
    });

    const isFiltered = selectedCategory !== "All" || selectedIndustry !== "All" || searchQuery !== "";

    return (
        <div className="container mx-auto py-8 px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Desktop Sidebar Filters */}
                <aside className="hidden lg:block w-72 shrink-0 space-y-6">
                    <div className="sticky top-24 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
                        
                        {/* Search Bar */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-sm text-slate-900">Search Products</h3>
                            <div className="relative">
                                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Type name, features..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="w-full pl-9 pr-8 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm bg-slate-50 hover:bg-slate-100/50 transition-colors"
                                />
                                {searchTerm && (
                                    <button
                                        onClick={clearSearch}
                                        className="absolute right-2.5 top-2.5 p-0.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition-colors"
                                    >
                                        <X className="h-3 w-3" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Industry Filters */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-sm text-slate-900">Filter by Industry</h3>
                            <div className="flex flex-col gap-1">
                                {allIndustries.map((ind) => (
                                    <button
                                        key={ind}
                                        onClick={() => setFilter("industry", ind)}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                                            selectedIndustry === ind
                                                ? "bg-blue-900 text-white font-medium shadow-sm"
                                                : "text-slate-600 hover:bg-slate-50"
                                        }`}
                                    >
                                        {industryLabels[ind]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Packaging Category (Type) Filters */}
                        <div className="space-y-2 pt-2 border-t border-slate-100">
                            <h3 className="font-semibold text-sm text-slate-900">Filter by Packaging Type</h3>
                            <div className="flex flex-col gap-1">
                                {allCategories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilter("category", cat)}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                                            selectedCategory === cat
                                                ? "bg-blue-900 text-white font-medium shadow-sm"
                                                : "text-slate-600 hover:bg-slate-50"
                                        }`}
                                    >
                                        {cat === "All" ? "All Types" : cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Reset Buttons */}
                        {isFiltered && (
                            <Button
                                onClick={clearAllFilters}
                                variant="outline"
                                className="w-full flex items-center justify-center gap-2 border-dashed border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                            >
                                <RotateCcw className="h-4 w-4" /> Reset Filters
                            </Button>
                        )}
                    </div>
                </aside>

                {/* Mobile Filter & Search Bar */}
                <div className="lg:hidden flex gap-3 items-center mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search catalog..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full pl-9 pr-8 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm bg-white"
                        />
                        {searchTerm && (
                            <button
                                onClick={clearSearch}
                                className="absolute right-2.5 top-2.5 p-0.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200"
                            >
                                <X className="h-3 w-3" />
                            </button>
                        )}
                    </div>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-2 border-slate-200 shadow-sm">
                                <SlidersHorizontal className="h-4 w-4" /> Filters
                                {isFiltered && (
                                    <span className="w-2 h-2 rounded-full bg-blue-900"></span>
                                )}
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-80">
                            <SheetHeader className="pb-4 border-b border-slate-100">
                                <SheetTitle className="text-lg font-bold">Catalog Filters</SheetTitle>
                            </SheetHeader>
                            <div className="py-6 space-y-6 overflow-y-auto max-h-[calc(100vh-100px)]">
                                
                                {/* Industry filter */}
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-sm text-slate-900">Filter by Industry</h3>
                                    <div className="flex flex-col gap-1">
                                        {allIndustries.map((ind) => (
                                            <Button
                                                key={ind}
                                                variant={selectedIndustry === ind ? "default" : "ghost"}
                                                className={`justify-start ${selectedIndustry === ind ? "bg-blue-900 hover:bg-blue-900" : ""}`}
                                                onClick={() => setFilter("industry", ind)}
                                            >
                                                {industryLabels[ind]}
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                {/* Category filter */}
                                <div className="space-y-2 pt-4 border-t border-slate-100">
                                    <h3 className="font-semibold text-sm text-slate-900">Filter by Packaging Type</h3>
                                    <div className="flex flex-col gap-1">
                                        {allCategories.map((cat) => (
                                            <Button
                                                key={cat}
                                                variant={selectedCategory === cat ? "default" : "ghost"}
                                                className={`justify-start ${selectedCategory === cat ? "bg-blue-900 hover:bg-blue-900" : ""}`}
                                                onClick={() => setFilter("category", cat)}
                                            >
                                                {cat === "All" ? "All Types" : cat}
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                {isFiltered && (
                                    <Button
                                        onClick={clearAllFilters}
                                        variant="outline"
                                        className="w-full flex items-center justify-center gap-2 border-dashed border-slate-300 text-slate-600"
                                    >
                                        <RotateCcw className="h-4 w-4" /> Reset Filters
                                    </Button>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 space-y-6">
                    
                    {/* Catalog Stats & Active Tags */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                        <div className="text-sm text-slate-600">
                            Showing <span className="font-semibold text-slate-900">{filteredProducts.length}</span> of <span className="font-semibold text-slate-900">{containers.length}</span> products
                        </div>
                        
                        {/* Active Filter Tags */}
                        {isFiltered && (
                            <div className="flex flex-wrap gap-2 items-center">
                                <span className="text-xs text-slate-500 font-medium mr-1">Active filters:</span>
                                {selectedIndustry !== "All" && (
                                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-900 border border-blue-100 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                                        {industryLabels[selectedIndustry]}
                                        <button onClick={() => setFilter("industry", "All")}>
                                            <X className="h-3 w-3 hover:text-red-500" />
                                        </button>
                                    </span>
                                )}
                                {selectedCategory !== "All" && (
                                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-900 border border-blue-100 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                                        {selectedCategory}
                                        <button onClick={() => setFilter("category", "All")}>
                                            <X className="h-3 w-3 hover:text-red-500" />
                                        </button>
                                    </span>
                                )}
                                {searchQuery && (
                                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-900 border border-blue-100 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                                        Search: &quot;{searchQuery}&quot;
                                        <button onClick={clearSearch}>
                                            <X className="h-3 w-3 hover:text-red-500" />
                                        </button>
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Product Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <div className="text-slate-400 mb-4">
                                <SlidersHorizontal className="h-12 w-12 mx-auto stroke-1" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">No Products Found</h3>
                            <p className="mt-2 text-slate-500 max-w-md mx-auto text-sm">
                                We couldn&apos;t find any products matching your search criteria. Try adjusting your filters or search term.
                            </p>
                            <Button onClick={clearAllFilters} className="mt-6 bg-blue-900 hover:bg-blue-800">
                                Clear All Filters
                            </Button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default function ProductsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            {/* Page Header */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-950 border-b border-blue-800 text-white shadow-inner">
                <div className="container mx-auto py-16 px-4 md:px-6">
                    <h1 className="text-4xl font-extrabold tracking-tight">Product Catalog</h1>
                    <p className="mt-3 text-blue-200 max-w-2xl text-lg leading-relaxed">
                        Browse our complete range of premium HDPE bottles, jars, and containers.
                        All products are manufactured with 100% virgin materials and customizable for weight and color.
                    </p>
                </div>
            </div>

            <Suspense fallback={
                <div className="container mx-auto py-24 px-4 md:px-6 text-center text-slate-500">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-900 mx-auto mb-4"></div>
                    <p className="text-sm font-medium">Loading catalog...</p>
                </div>
            }>
                <ProductsCatalog />
            </Suspense>
        </div>
    );
}