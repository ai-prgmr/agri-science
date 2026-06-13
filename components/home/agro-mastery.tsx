// components/home/agro-mastery.tsx
import { Sprout, ShieldCheck, Zap, Factory, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AgroMasterySection() {
    const highlights = [
        {
            title: "15+ Years Agro Specialization",
            description: "Established in 2011, we have spent over 15 years perfecting packaging solutions engineered specifically for highly reactive agricultural chemical formulations.",
            icon: <Award className="h-8 w-8 text-amber-500" />,
            borderColor: "border-amber-100",
            bgLight: "bg-amber-50/50"
        },
        {
            title: "Chemical-Resistant Barriers",
            description: "Advanced HDPE formulation and optional fluorinated/co-extruded barriers that prevent paneling, collapse, and permeation of active ingredients like pesticides and herbicides.",
            icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
            borderColor: "border-green-100",
            bgLight: "bg-green-50/50"
        },
        {
            title: "Agile Supply for Seasonal Demand",
            description: "Deep roots in monsoon-dependent agriculture. We run high-efficiency 24/7 production cycles to handle abrupt volume spikes and guarantee timely dispatch.",
            icon: <Zap className="h-8 w-8 text-blue-600" />,
            borderColor: "border-blue-100",
            bgLight: "bg-blue-50/50"
        },
        {
            title: "Precision Mold & Engineering",
            description: "Custom-built, zero-defect molds tailored to specialized bottle weights, custom branding, and ergonomic neck profiles to make pouring safe and spill-free.",
            icon: <Factory className="h-8 w-8 text-slate-600" />,
            borderColor: "border-slate-100",
            bgLight: "bg-slate-50/50"
        }
    ];

    return (
        <section className="py-24 bg-linear-to-b from-slate-50 to-white relative overflow-hidden">
            {/* Subtle decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-60 -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10" />

            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200/80 text-green-800 text-xs font-semibold uppercase tracking-wider">
                        <Sprout className="h-3.5 w-3.5" /> Core Competency & Heritage
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        15+ Years of Mastery in <br className="hidden sm:inline" />
                        <span className="bg-linear-to-r from-green-700 to-blue-900 bg-clip-text text-transparent">
                            Agro & Pesticides Packaging
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Amba Plastolite has been the trusted backbone for top agro-chemical manufacturers since 2011. We build premium HDPE packaging that prioritizes safety, durability, and chemical compliance.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
                    {highlights.map((item, index) => (
                        <Card
                            key={index}
                            className={`group border ${item.borderColor} ${item.bgLight} transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 overflow-hidden`}
                        >
                            <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-start">
                                <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 shrink-0 transition-transform group-hover:scale-110 duration-300">
                                    {item.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-900 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Decorative Quote Bar */}
                <div className="mt-16 max-w-3xl mx-auto text-center border-t border-slate-100 pt-8">
                    <p className="text-sm italic text-slate-500">
                        &ldquo;We engineer every bottle to meet strict chemical stress resistance standards, ensuring peace of mind from our factory floor to the farmer's hands.&rdquo;
                    </p>
                </div>

            </div>
        </section>
    );
}
