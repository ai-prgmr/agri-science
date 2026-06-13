// components/layout/navbar.tsx
'use client';
import * as React from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import Image from "next/image";
export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between">

                {/* Logo Area */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-900">
                        <Image
                            src="/agri-science/logo-amba.png"
                            width={300}
                            height={300}
                            alt="Amba Plastolite"
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
                    <SheetContent side="right">
                        <div className="flex flex-col gap-4 mt-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white border-none h-14 px-8 text-lg shadow-xl shadow-green-900/20">
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

                        </div>
                    </SheetContent>
                </Sheet>

            </div>
        </header>
    );
}