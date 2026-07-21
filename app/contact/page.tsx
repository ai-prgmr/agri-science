import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Amba Plastolite | Corporate Office & Factory Indore",
    description: "Get in touch with Amba Plastolite for custom quotes and consultations. Details, address, telephone, email, and Google maps for our Anand Nagar office.",
    keywords: ["Contact Amba Plastolite", "Amba Plastolite address", "Amba Plastolite phone number", "HDPE bottle manufacturer Indore contact"],
    alternates: {
        canonical: "/contact",
    },
};

const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Amba Plastolite",
    "url": "https://www.ambaplastolite.com/contact",
    "mainEntity": {
        "@type": "Organization",
        "name": "Amba Plastolite",
        "telephone": "+919826068066",
        "email": "ambaplasto@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "71, Anand Nagar, 2nd Floor, Behind Sapna-Sangeeta Talkies",
            "addressLocality": "Indore",
            "addressRegion": "Madhya Pradesh",
            "postalCode": "452001",
            "addressCountry": "IN"
        }
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
            "name": "Contact Us",
            "item": "https://www.ambaplastolite.com/contact"
        }
    ]
};

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <div className="container mx-auto py-12 md:py-20">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-slate-600">
                        Visit our corporate office for consultations and business queries.
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

                    {/* Address Card */}
                    <Card className="text-center hover:shadow-md transition-shadow">
                        <CardContent className="pt-6 flex flex-col items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-slate-900 mb-2">Corporate Office</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    71, Anand Nagar, 2nd Floor,<br />
                                    Behind Sapna-Sangeeta Talkies,<br />
                                    Indore (M.P) - 452001
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Phone Card */}
                    <Card className="text-center hover:shadow-md transition-shadow">
                        <CardContent className="pt-6 flex flex-col items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-slate-900 mb-2">Call Us</h3>
                                <p className="text-slate-600 text-sm mb-2">Mon-Sat from 9am to 7pm</p>
                                <a href="tel:+919826068066" className="text-blue-900 font-bold hover:underline">
                                    +91 98260 68066
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Email Card */}
                    <Card className="text-center hover:shadow-md transition-shadow">
                        <CardContent className="pt-6 flex flex-col items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-700">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-slate-900 mb-2">Email Us</h3>
                                <p className="text-slate-600 text-sm mb-2">For quotes & catalog</p>
                                <a href="mailto:ambaplasto@gmail.com" className="text-blue-900 font-bold hover:underline">
                                    ambaplasto@gmail.com
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Factory Address Card */}
                    <Card className="text-center hover:shadow-md transition-shadow">
                        <CardContent className="pt-6 flex flex-col items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">
                                <Building2 className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-slate-900 mb-2">Manufacturing Unit</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    128 Bardana Mandi<br />
                                    Palda, Industrial Area<br />
                                    Indore (M.P) - 452001
                                </p>
                                <p className="text-red-800 font-semibold text-xs">No visitors please</p>
                            </div>
                        </CardContent>
                    </Card>


                </div>

                {/* Dual Maps Section */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Our Locations</h2>
                    {/* Map 1: Office */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-blue-900 font-semibold text-lg">
                            <MapPin className="h-5 w-5" />
                            <span>Office Location</span>
                        </div>
                        <div className="h-87 w-full bg-slate-200 rounded-xl overflow-hidden shadow-sm border border-slate-200 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.597556736785!2d75.8647!3d22.7056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQyJzIwLjIiTiA3NcKwNTEnNTIuOSJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Map"
                            ></iframe>
                            {/* Note: Update the src above with the actual 'Share > Embed Map' link for 71 Anand Nagar */}
                        </div>
                        <p className="text-sm text-slate-500">
                            <strong>Landmark:</strong> Behind Sapna Sangeeta Talkies.
                        </p>
                    </div>


                </div>

            </div>
        </div>
    );
}