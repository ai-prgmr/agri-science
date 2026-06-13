// app/products/page.tsx
import { Suspense } from "react";
import { ProductsCatalog } from "@/components/products/products-catalog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "HDPE Bottles & Agro Jars Catalog | Amba Plastolite",
    description: "Browse our complete catalog of premium, leak-proof HDPE bottles, personal care PET containers, and co-extruded pesticide jars. Manufactured in Indore, India.",
    keywords: ["HDPE bottles catalog", "pesticide jars", "personal care bottles", "HDPE chemical packaging", "buy plastic bottles Indore"],
    alternates: {
        canonical: "/products",
    },
};

export default function ProductsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            {/* Page Header */}
            <div className="bg-linear-to-r from-blue-900 to-indigo-950 border-b border-blue-800 text-white shadow-inner">
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