// components/home/industry-grid.tsx
import Link from "next/link";
import {
    Sprout,
    FlaskConical,
    Sparkles,
    Factory,
    ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const industries = [
    {
        title: "Agro & Pesticides",
        description: "Heavy-duty, chemical-resistant bottles for fertilizers and bio-pesticides.",
        icon: <Sprout className="h-10 w-10 text-green-600" />,
        href: "/products?industry=Agro",
        color: "bg-green-50",
    },
    {
        title: "Pharmaceuticals",
        description: "Hygiene-focused, food-grade containers for tablets, syrups, and powders.",
        icon: <FlaskConical className="h-10 w-10 text-blue-600" />,
        href: "/products?industry=Pharma",
        color: "bg-blue-50",
    },
    {
        title: "Cosmetics & FMCG",
        description: "Aesthetic packaging solutions for lotions, shampoos, and personal care.",
        icon: <Sparkles className="h-10 w-10 text-pink-600" />,
        href: "/products?industry=Cosmetic",
        color: "bg-pink-50",
    },
    {
        title: "Industrial & Auto",
        description: "Robust jerry cans and containers for lubricants, oils, and chemicals.",
        icon: <Factory className="h-10 w-10 text-slate-600" />,
        href: "/products?industry=Industrial",
        color: "bg-slate-100",
    },
];

export function IndustryGrid() {
    return (
        <section className="p-20 bg-white">
            <div className="container px-4 md:px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Industries We Serve
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        We specialize in manufacturing HDPE containers tailored to the specific safety and durability standards of these key sectors.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {industries.map((industry, index) => (
                        <Link
                            key={index}
                            href={industry.href}
                            className="group block"
                        >
                            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-slate-200">
                                <CardHeader>
                                    <div className={`w-16 h-16 rounded-2xl ${industry.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                                        {industry.icon}
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-blue-900 transition-colors">
                                        {industry.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 mb-6">
                                        {industry.description}
                                    </p>
                                    <div className="flex items-center text-sm font-medium text-blue-900 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                                        View Products <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}