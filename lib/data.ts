// lib/data.ts

export type Category = "Bottle" | "HDPE Jar/Box" | "PET";

export interface Containers {
    id: string;
    name: string;
    category: Category;
    description: string;
    capacity?: string; // e.g., "50ml - 1L"
    features: string[];
    imageUrl: string; // Use placeholders for now
}

export const containers: Containers[] = [
    {
        id: "agro-bottle-1",
        name: "HDPE Bio-Pesticide Bottle",
        category: "Bottle",
        description: "Heavy-duty HDPE bottles designed for bio-fertilizers and pesticides with chemical resistance.",
        capacity: "100ml - 1L",
        features: ["Leak Proof", "Chemical Resistant", "Durable Wall Thickness"],
        imageUrl: "/images/placeholder-bottle.jpg",
    },
    {
        id: "pharma-jar-1",
        name: "Pharma Tablet Container",
        category: "HDPE Jar/Box",
        description: "Food-grade HDPE containers suitable for tablets, capsules, and protein powders.",
        capacity: "50cc - 500cc",
        features: ["Air Tight", "Food Grade Material", "Tamper Proof Cap Available"],
        imageUrl: "/images/placeholder-jar.jpg",
    },
    {
        id: "cosmo-bottle-1",
        name: "Luxury Shampoo Bottle",
        category: "Bottle",
        description: "Aesthetically designed bottles for shampoos, lotions, and hand washes.",
        capacity: "200ml",
        features: ["Glossy Finish", "Custom Colors", "Dispenser Pump Compatible"],
        imageUrl: "/images/placeholder-cosmo.jpg",
    },
    {
        id: "oil-can-1",
        name: "Automobile Oil Jerry Can",
        category: "PET",
        description: "Robust jerry cans for engine oil and lubricants.",
        capacity: "1L - 5L",
        features: ["High Impact Resistance", "Easy Pour Spout", "Stackable Design"],
        imageUrl: "/images/placeholder-can.jpg",
    }
];

export const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];