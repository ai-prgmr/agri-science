// components/layout/navbar.tsx
'use client';
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Home, Package, Info, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

const linkIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    "/": Home,
    "/products": Package,
    "/about": Info,
    "/contact": Mail,
};

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto flex h-24 items-center justify-between">

                {/* Logo Area */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-900">
                        <Image
                            src="/agri-science/logo-amba-bg.png"
                            width={400}
                            height={400}
                            alt="Amba Plastolite"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button asChild className="bg-blue-900 hover:bg-blue-800">
                        <Link
                            href="https://wa.me/919826068066?text=Hi%20Amba%20Plastolite,%20I%20am%20interested%20in%20your%20HDPE%20products.%20Can%20we%20discuss%20a%20quote?"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                        >
                            <Phone className="mr-2 h-5 w-5 fill-current" />
                            Get a Quote
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Navigation (Sheet) */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="p-6 flex flex-col justify-between h-full bg-slate-50/95 backdrop-blur-md border-l">
                        {/* Radix Dialog Accessibility compliance headers */}
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <SheetDescription className="sr-only">
                            Access mobile navigation links and quick contact options.
                        </SheetDescription>

                        {/* Top Branding Section */}
                        <div className="flex flex-col gap-6 mt-4">
                            <div className="flex items-center gap-2 border-b pb-6">
                                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 font-bold text-xl text-blue-900">
                                    <Image
                                        src="/agri-science/logo-amba-bg.png"
                                        width={140}
                                        height={140}
                                        alt="Amba Plastolite"
                                        className="object-contain"
                                    />
                                </Link>
                            </div>

                            {/* Navigation Links Group */}
                            <nav className="flex flex-col gap-2.5">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                                    const Icon = linkIcons[link.href] || Info;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200",
                                                isActive
                                                    ? "bg-blue-50 text-blue-900 border-l-4 border-blue-900 font-semibold shadow-xs"
                                                    : "text-muted-foreground hover:bg-slate-100/50 hover:text-blue-900 hover:translate-x-1"
                                            )}
                                        >
                                            <Icon className={cn("h-5 w-5 shrink-0", isActive ? "text-blue-900" : "text-slate-400")} />
                                            <span>{link.name}</span>
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Bottom Actions & Contacts Section */}
                        <div className="mt-auto space-y-6">
                            {/* CTA WhatsApp Button */}
                            <Button asChild size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-13 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-emerald-600/10 border-none cursor-pointer">
                                <Link
                                    href="https://wa.me/919826068066?text=Hi%20Amba%20Plastolite,%20I%20am%20interested%20in%20your%20HDPE%20products.%20Can%20we%20discuss%20a%20quote?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Phone className="h-5 w-5 fill-current" />
                                    Get a Quote
                                </Link>
                            </Button>

                            {/* Contact Details Card */}
                            <div className="bg-slate-100/60 rounded-xl p-4 border border-slate-200/50 space-y-3.5">
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                                    Contact Details
                                </span>
                                <div className="space-y-3">
                                    <a
                                        href="tel:+919826068066"
                                        className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-900 transition-colors"
                                    >
                                        <Phone className="h-4 w-4 text-blue-900 shrink-0" />
                                        <span className="font-medium">+91 98260 68066</span>
                                    </a>
                                    <a
                                        href="mailto:ambaplasto@gmail.com"
                                        className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-900 transition-colors"
                                    >
                                        <Mail className="h-4 w-4 text-blue-900 shrink-0" />
                                        <span className="font-medium">ambaplasto@gmail.com</span>
                                    </a>
                                    <div className="flex items-start gap-3 text-xs text-slate-500 leading-relaxed border-t border-slate-200/50 pt-2.5">
                                        <MapPin className="h-4 w-4 text-blue-900 shrink-0 mt-0.5" />
                                        <span>71, Anand Nagar, Indore (M.P) - 452001</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>

            </div>
        </header>
    );
}