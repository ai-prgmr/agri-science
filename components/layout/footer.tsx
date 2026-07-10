// components/layout/footer.tsx
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white text-slate-200 border-t border-slate-800">
            {/* Added px-4 md:px-6 for horizontal padding */}
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

                    {/* Column 1: Brand & Socials */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-white font-bold text-xl">
                            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-900">
                                <Image
                                    src="/agri-science/logo-amba-bg.png"
                                    width={300}
                                    height={300}
                                    alt="Amba Plastolite"
                                />
                            </Link>
                        </div>
                        <p className="text-slate-800 text-sm leading-relaxed">
                            Specializing in Agro-chemical & Pesticide packaging solutions since 2011.
                            Trusted by leading manufacturers across India for high-durability and chemical-resistant HDPE containers.
                        </p>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <h3 className="text-slate-800 font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/" className="hover:text-blue-400 transition-colors text-slate-800">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-blue-400 transition-colors text-slate-800">About Us & Team</Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-blue-400 transition-colors text-slate-800">Full Catalog</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-400 transition-colors text-slate-800">Contact & Directions</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Products (SEO Keywords) */}
                    <div>
                        <h3 className="text-slate-800 font-semibold text-lg mb-4">Our Products</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/products?category=Bottle" className="hover:text-blue-400 transition-colors text-slate-800">
                                    Bottles
                                </Link>
                            </li>
                            <li>
                                <Link href="/products?category=HDPE Jar/Box" className="hover:text-blue-400 transition-colors text-slate-800">
                                    HDPE Jars/Box
                                </Link>
                            </li>
                            <li>
                                <Link href="/products?category=PET" className="hover:text-blue-400 transition-colors text-slate-800">
                                    PET
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info (Dual Addresses) */}
                    <div className="space-y-6">
                        <h3 className="text-slate-800 font-semibold text-lg mb-4">Contact Us</h3>

                        {/* Communication Channels */}
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-blue-400 shrink-0" />
                                <a href="tel:+919826068066" className="hover:text-blue-400 transition-colors text-slate-800">
                                    +91 98260 68066
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                                <a href="mailto:ambaplasto@gmail.com" className="hover:text-blue-400 transition-colors text-slate-800">
                                    ambaplasto@gmail.com
                                </a>
                            </li>
                        </ul>

                        {/* Addresses Block */}
                        <div className="space-y-4 pt-2 border-t border-slate-800">
                            {/* Office */}
                            <div className="flex items-start gap-3 text-sm">
                                <MapPin className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                                <div>
                                    <span className="block text-slate-800 font-medium">Corporate Office:</span>
                                    <span className="text-slate-800">
                                        71, Anand Nagar, 2nd Floor,<br />
                                        Indore (M.P) - 452001
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 text-sm">
                                <MapPin className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                                <div>
                                    <span className="block text-slate-800 font-medium">Manufacturing Unit:</span>
                                    <span className="text-slate-800">
                                        128 Bardana Mandi,<br />
                                        Palda, Industrial Area<br />
                                        Indore (M.P) - 452001<br />
                                    </span>
                                    <span className="text-red-800 font-semibold text-xs">No visitors please</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {currentYear} Amba Plastolite. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}