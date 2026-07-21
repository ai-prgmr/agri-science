import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    History,
    Users,
    Award,
    TrendingUp,
    CheckCircle2,
    Factory
} from "lucide-react";

export const metadata: Metadata = {
    title: "About Amba Plastolite | Leading HDPE Manufacturer in Indore",
    description: "Amba Plastolite was founded in 2011 on the principles of quality, durability, and reliability. Meet our directors and explore our manufacturing journey.",
    keywords: ["About Amba Plastolite", "Sandeep Patidar", "Sanjay Patidar", "plastic factory Indore", "HDPE container manufacturing history"],
    alternates: {
        canonical: "/about",
    },
};

const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Amba Plastolite",
    "url": "https://www.ambaplastolite.com/about",
    "mainEntity": {
        "@type": "Organization",
        "name": "Amba Plastolite",
        "foundingDate": "2011",
        "founders": [
            { "@type": "Person", "name": "Sandeep Patidar" },
            { "@type": "Person", "name": "Sanjay Patidar" }
        ],
        "description": "Leading manufacturer of chemical-resistant HDPE bottles and agro jars in Indore, India since 2011."
    }
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.ambaplastolite.com"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://www.ambaplastolite.com/about"
        }
    ]
};

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            {/* Hero Section */}
            <section className="bg-blue-900 text-white py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <Badge className="bg-blue-400/20 text-blue-200 hover:bg-blue-400/20 mb-4 border-none">
                            Established 2011
                        </Badge>
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
                            Building Trust Through <br />
                            <span className="text-blue-300">Precision & Durability.</span>
                        </h1>
                        <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                            From a strategic partner for the Agro-chemical industry to a leading supplier of HDPE packaging solutions across India.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story & Mission */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 text-blue-900 font-semibold text-lg">
                                <History className="h-5 w-5" />
                                <span>Our Journey</span>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">
                                Founded on the auspicious occasion of Akshay Tritiya.
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    Amba Plastolite began its journey on <strong>May 6, 2011</strong>.
                                    What started as a focused endeavor to serve the Agro and Pesticide industry
                                    has grown into a comprehensive manufacturing hub for HDPE bottles and jars.
                                </p>
                                <p>
                                    We understand the unique challenges of our clients—especially the
                                    monsoon-dependent Agro industry where demand spikes abruptly.
                                    Our ability to anticipate these needs and provide <strong>agile, regular supply</strong>
                                    is what sets us apart.
                                </p>
                                <p>
                                    Today, we leverage fully automatic extrusion blow moulding plants to
                                    deliver consistent quality, tight specification ranges, and color accuracy
                                    that global brands trust.
                                </p>
                            </div>
                        </div>

                        {/* Image/Stats Placeholder */}
                        <div className="relative">
                            <div className="aspect-video rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 shadow-xl relative">
                                <Image
                                    src="/banner-2.jpg"
                                    fill
                                    className="object-cover"
                                    alt="Amba Plastolite Custom Mold Design & Factory"
                                />
                            </div>
                            {/* Floating Stat Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-xs hidden md:block">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-green-100 rounded-full">
                                        <TrendingUp className="h-5 w-5 text-green-700" />
                                    </div>
                                    <span className="font-bold text-slate-900">Mission</span>
                                </div>
                                <p className="text-sm text-slate-600">
                                    To offer competitive prices without compromising on the high durability
                                    and chemical resistance our clients rely on.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Choose Us - The "Strengths" Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Amba Plastolite?</h2>
                        <p className="text-slate-600">
                            We don't just sell bottles; we provide reliability in supply chain and quality.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-none shadow-sm bg-white">
                            <CardContent className="pt-6">
                                <div className="mb-4 inline-flex p-3 rounded-lg bg-blue-50 text-blue-700">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Consistent Quality</h3>
                                <p className="text-slate-600 text-sm">
                                    Our advanced slurry process ensures every bottle meets tight specification
                                    ranges with perfect color accuracy and wall thickness.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-sm bg-white">
                            <CardContent className="pt-6">
                                <div className="mb-4 inline-flex p-3 rounded-lg bg-green-50 text-green-700">
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Agile Supply Chain</h3>
                                <p className="text-slate-600 text-sm">
                                    With deep roots in the seasonal Agro industry, we are experts at
                                    handling abrupt demand spikes and ensuring on-time delivery.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-sm bg-white">
                            <CardContent className="pt-6">
                                <div className="mb-4 inline-flex p-3 rounded-lg bg-orange-50 text-orange-700">
                                    <Award className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Competitive Pricing</h3>
                                <p className="text-slate-600 text-sm">
                                    Efficiency is our core value. We optimize our extrusion processes to
                                    offer the best market rates for bulk orders.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <div className="flex items-center gap-2 text-blue-900 font-semibold text-lg mb-2">
                                <Users className="h-5 w-5" />
                                <span>Leadership</span>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">Meet Our Directors</h2>
                        </div>
                        <p className="max-w-md text-slate-600 text-right md:text-left">
                            Guided by decades of experience in manufacturing, printing, and supply chain management.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                        {/* Founder Card */}
                        <div className="group relative overflow-hidden rounded-2xl bg-slate-100">
                            <div className="aspect-4/3 bg-slate-200 relative overflow-hidden">
                                <Image
                                    src="/sandeep-patidar-prof.png"
                                    width={500}
                                    height={375}
                                    className="object-cover"
                                    alt="Mr. Sandeep Patidar"
                                />
                            </div>
                            <div className="p-6 bg-white border border-t-0 border-slate-200 rounded-b-2xl">
                                <h3 className="text-2xl font-bold text-slate-900">Mr. Sandeep Patidar</h3>
                                <p className="text-blue-700 font-medium mb-4">Founder & CEO</p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    With over <strong>20 years of experience</strong> in the Agro and Pesticide industry,
                                    Sandeep brings deep expertise in supply chain management and printing technology,
                                    steering the company's strategic vision.
                                </p>
                            </div>
                        </div>

                        {/* President Card */}
                        <div className="group relative overflow-hidden rounded-2xl bg-slate-100">
                            <div className="aspect-4/3 bg-slate-200 relative overflow-hidden">
                                <Image
                                    src="/sanjay-patidar-prof.png"
                                    width={500}
                                    height={375}
                                    className="object-cover"
                                    alt="Mr. Sanjay Patidar"
                                />
                            </div>
                            <div className="p-6 bg-white border border-t-0 border-slate-200 rounded-b-2xl">
                                <h3 className="text-2xl font-bold text-slate-900">Mr. Sanjay Patidar</h3>
                                <p className="text-blue-700 font-medium mb-4">President</p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Sanjay holds over a <strong>decade of experience</strong> in design and printing.
                                    He oversees the daily operations, ensuring that our manufacturing floor runs
                                    smoothly and meets our strict quality standards.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}