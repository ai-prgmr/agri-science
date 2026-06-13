// lib/data.ts

export type Category = "Bottle" | "HDPE Jar/Box" | "PET";
export type Industry = "Agro" | "Pharma" | "Cosmetic" | "Industrial";

export interface Product {
    id: string;
    name: string;
    category: Category;
    industry: Industry;
    description: string;
    capacity: string;
    features: string[];
    imageUrl: string;
}

// Containers is aliased to Product for compatibility
export type Containers = Product;

export const containers: Product[] = [
    {
        id: "amba-2",
        name: "Amba 2 - Flair Regular",
        category: "Bottle",
        industry: "Agro",
        capacity: "100ml - 1L",
        features: ["Ergonomic Design", "Leak Proof", "Chemical Resistant"],
        imageUrl: "/agri-science/images/Amba-2-Flair-Regular.jpg",
        description: "Standard HDPE bottle for crop protection and fertilizer applications."
    },
    {
        id: "amba-3",
        name: "Amba 3 - Flair Regular (Black)",
        category: "Bottle",
        industry: "Agro",
        capacity: "100ml - 1L",
        features: ["UV Protection", "Tamper Evident Cap", "Chemical Resistant"],
        imageUrl: "/agri-science/images/Amba-3-Flair-Regular-Black.jpg",
        description: "Black HDPE bottle offering excellent UV light protection for sensitive bio-chemicals."
    },
    {
        id: "amba-4",
        name: "Amba 4 - Horizon",
        category: "Bottle",
        industry: "Cosmetic",
        capacity: "200ml - 500ml",
        features: ["Sleek Design", "FMCG Grade", "Dispenser Pump Ready"],
        imageUrl: "/agri-science/images/Amba-4-Horizon.jpg",
        description: "Premium aesthetic bottle suitable for personal care, shampoo, and cosmetics."
    },
    {
        id: "amba-5",
        name: "Amba 5 - Double Line",
        category: "Bottle",
        industry: "Agro",
        capacity: "500ml - 1L",
        features: ["Graduation Scale", "Sturdy Ribbing", "Leak Proof"],
        imageUrl: "/agri-science/images/Amba-5-Double-Line.jpg",
        description: "Heavy-duty agro-chemical bottle with double vertical lines for structural strength."
    },
    {
        id: "amba-6",
        name: "Amba 6 - Butterfly",
        category: "Bottle",
        industry: "Agro",
        capacity: "1L",
        features: ["Ergonomic Handle", "Wide Mouth", "Stable Base"],
        imageUrl: "/agri-science/images/Amba-6-Butterfly.jpg",
        description: "Distinctively shaped bottle with butterfly grip handle for effortless pouring."
    },
    {
        id: "amba-7",
        name: "Amba 7 - Bufro Missile",
        category: "Bottle",
        industry: "Agro",
        capacity: "1L",
        features: ["Impact Resistant", "Secure Cap", "Excellent Barrier"],
        imageUrl: "/agri-science/images/Amba-7-Bufro-Missile.jpg",
        description: "Missile shape HDPE bottle designed for high-density liquids and chemicals."
    },
    {
        id: "amba-8",
        name: "Amba 8 - Crown Chipko",
        category: "Bottle",
        industry: "Agro",
        capacity: "250ml - 1L",
        features: ["Unique Neck Profile", "Non-slip Grip", "Airtight Seal"],
        imageUrl: "/agri-science/images/Amba-8-Crown-Chipko.jpg",
        description: "Specially designed for sticky liquids, surfactants, and crop nutrients."
    },
    {
        id: "amba-9",
        name: "Amba 9 - Mono",
        category: "Bottle",
        industry: "Agro",
        capacity: "100ml - 500ml",
        features: ["Compact", "Fluorinated Barrier", "Lightweight"],
        imageUrl: "/agri-science/images/Amba-9-Mono.jpg",
        description: "Single-neck HDPE bottle for concentrated pesticides and plant regulators."
    },
    {
        id: "amba-11",
        name: "Amba 11 - Power",
        category: "Bottle",
        industry: "Agro",
        capacity: "1L",
        features: ["Robust Handle", "Heavy Wall", "Sturdy Base"],
        imageUrl: "/agri-science/images/Amba-11-Power.jpg",
        description: "Industrial-grade bottle with a strong built-in handle for safe handling of chemicals."
    },
    {
        id: "amba-12",
        name: "Amba 12 - Geetam Square",
        category: "Bottle",
        industry: "Agro",
        capacity: "500ml - 1L",
        features: ["Space Saving Square Shape", "Heavy Duty", "Easy Stacking"],
        imageUrl: "/agri-science/images/Amba-12-Geetam-Square.jpg",
        description: "Square profile bottle maximizing carton space utilization during transit."
    },
    {
        id: "amba-13",
        name: "Amba 13 - Vita",
        category: "Bottle",
        industry: "Pharma",
        capacity: "200ml - 500ml",
        features: ["Food Grade HDPE", "Moisture Barrier", "Child Resistant Cap Ready"],
        imageUrl: "/agri-science/images/Amba-13-Vita.jpg",
        description: "Cleanroom manufactured bottle for liquid syrups, healthcare tonics, and supplements."
    },
    {
        id: "amba-14",
        name: "Amba 14 - Pari",
        category: "Bottle",
        industry: "Cosmetic",
        capacity: "100ml - 250ml",
        features: ["Elegant Shape", "Glossy Body", "Screw Cap Compatible"],
        imageUrl: "/agri-science/images/Amba-14-Pari.jpg",
        description: "Graceful cosmetic container ideal for moisturizers, body washes, and lotions."
    },
    {
        id: "amba-15",
        name: "Amba 15 - Pari Pearl",
        category: "Bottle",
        industry: "Cosmetic",
        capacity: "100ml - 250ml",
        features: ["Pearlescent Finish", "Aesthetic Cap", "Custom Tinting"],
        imageUrl: "/agri-science/images/Amba-15-Pari Pearl.jpg",
        description: "Pearlescent finish cosmetic bottle that elevates retail shelf presence."
    },
    {
        id: "amba-16",
        name: "Amba 16 - Greta",
        category: "Bottle",
        industry: "Cosmetic",
        capacity: "250ml - 500ml",
        features: ["FMCG Grade", "Smooth Surface", "Recyclable"],
        imageUrl: "/agri-science/images/Amba-16-Greta.jpg",
        description: "Durable cosmetic bottle with a contemporary look, ideal for personal care brands."
    },
    {
        id: "amba-17",
        name: "Amba 17 - Greta Pearl",
        category: "Bottle",
        industry: "Cosmetic",
        capacity: "250ml - 500ml",
        features: ["Shimmering Pearl Effect", "Premium Feel", "Ergonomic Neck"],
        imageUrl: "/agri-science/images/Amba-17-Greta-Pearl.jpg",
        description: "Stunning pearlized cosmetic bottle designed to add a premium touch to daily care products."
    },
    {
        id: "amba-18",
        name: "Amba 18 - Proton",
        category: "Bottle",
        industry: "Agro",
        capacity: "500ml - 1L",
        features: ["Robust Wall Thickness", "Secure Grip", "Industrial Grade"],
        imageUrl: "/agri-science/images/Amba-18-Proton.jpg",
        description: "Premium agro bottle built to withstand high drop-test standards and chemical stress."
    },
    {
        id: "amba-19",
        name: "Amba 19 - Proton Dom",
        category: "Bottle",
        industry: "Agro",
        capacity: "1L",
        features: ["Dome Neck", "Leak Proof Screw Cap", "Durable Base"],
        imageUrl: "/agri-science/images/Amba-19-Proton-Dom.jpg",
        description: "Domed-shoulder variant of the Proton series offering superior liquid discharge."
    },
    {
        id: "amba-20",
        name: "Amba 20 - Cora",
        category: "Bottle",
        industry: "Cosmetic",
        capacity: "200ml - 300ml",
        features: ["Squeezable", "Flip-top Cap Ready", "Sleek"],
        imageUrl: "/agri-science/images/Amba-20-Cora.jpg",
        description: "Compact, easy-to-use squeezable bottle for creams, hand rubs, and hair conditioners."
    },
    {
        id: "amba-21",
        name: "Amba 21 - Speedo",
        category: "Bottle",
        industry: "Industrial",
        capacity: "500ml - 1L",
        features: ["Dynamic Styling", "Anti-leak Cap", "Industrial Strength"],
        imageUrl: "/agri-science/images/Amba-21-Speedo.jpg",
        description: "Aesthetically styled bottle for automotive fluids, sprays, and general cleaning agents."
    },
    {
        id: "amba-22",
        name: "Amba 22 - Mozo Can (Standard)",
        category: "PET",
        industry: "Industrial",
        capacity: "1L - 5L",
        features: ["Heavy Duty Can", "Integrated Handle", "Stackable"],
        imageUrl: "/agri-science/images/Amba-22-Mozo-Can.jpg",
        description: "High-strength mini jerry can for lubricants, chemicals, and industrial oils."
    },
    {
        id: "amba-23",
        name: "Amba 23 - Mozo Can (Ribbed)",
        category: "PET",
        industry: "Industrial",
        capacity: "1L - 5L",
        features: ["Ribbed Design", "Anti-Collapse Walls", "Integrated Handle"],
        imageUrl: "/agri-science/images/Amba-23-Mozo-Can.jpg",
        description: "Enhanced mini jerry can featuring side ribs to prevent collapse during extreme pressure changes."
    },
    {
        id: "amba-24",
        name: "Amba 24 - Singleneck",
        category: "Bottle",
        industry: "Agro",
        capacity: "100ml - 1L",
        features: ["Narrow Spout", "Zero Spillage", "High Chemical Resistance"],
        imageUrl: "/agri-science/images/Amba-24-Singleneck.jpg",
        description: "Precision narrow-neck HDPE bottle suited for highly active ingredients."
    },
    {
        id: "amba-25",
        name: "Amba 25 - Nova",
        category: "Bottle",
        industry: "Pharma",
        capacity: "250ml - 500ml",
        features: ["Food Grade", "Airtight Seal", "UV Resistant Option"],
        imageUrl: "/agri-science/images/Amba-25-Nova.jpg",
        description: "Pharma-grade round bottle engineered for liquid health products and vitamins."
    },
    {
        id: "amba-26",
        name: "Amba 26 - Met Set 200ml",
        category: "Bottle",
        industry: "Pharma",
        capacity: "200ml",
        features: ["Compact", "Tamper Evident Cap", "FDA Approved"],
        imageUrl: "/agri-science/images/Amba-26-Met-Set-200ml.jpg",
        description: "Specially approved container set for precise liquid dosage and syrups."
    },
    {
        id: "amba-27",
        name: "Amba 27 - Imiza Set",
        category: "HDPE Jar/Box",
        industry: "Cosmetic",
        capacity: "50g - 200g",
        features: ["Double Wall Look", "Luxury Styling", "Wide Mouth"],
        imageUrl: "/agri-science/images/Amba-27-Imiza-Set.jpg",
        description: "Premium jar collection for cosmetic face creams, scrubs, and gels."
    },
    {
        id: "amba-28",
        name: "Amba 28 - Glypho",
        category: "Bottle",
        industry: "Agro",
        capacity: "1L",
        features: ["Fluorinated Barrier", "Measurement Indicator", "Heavy Duty"],
        imageUrl: "/agri-science/images/Amba-28-Glypho.jpg",
        description: "Co-extruded barrier bottle specifically designed to package strong herbicide and glyphosate solutions."
    },
    {
        id: "amba-29",
        name: "Amba 29 - Threeline",
        category: "Bottle",
        industry: "Agro",
        capacity: "500ml - 1L",
        features: ["Triple Rib Support", "Anti-slip Neck", "Leakproof"],
        imageUrl: "/agri-science/images/Amba-29-Threeline.jpg",
        description: "Three-ring neck detail for easy handling, commonly used for high-viscosity agricultural inputs."
    },
    {
        id: "amba-30",
        name: "Amba 30 - Ema Box Flat",
        category: "HDPE Jar/Box",
        industry: "Pharma",
        capacity: "250g - 500g",
        features: ["Flat Lid", "Airtight", "Food Grade"],
        imageUrl: "/agri-science/images/Amba-30-Ema-Box-Flat.jpg",
        description: "Square jar with flat cap ideal for storing dry powders, capsules, and health foods."
    },
    {
        id: "amba-31",
        name: "Amba 31 - Ema Box New",
        category: "HDPE Jar/Box",
        industry: "Pharma",
        capacity: "250g - 500g",
        features: ["Enhanced Seal", "Stackable Lid", "Wide Mouth"],
        imageUrl: "/agri-science/images/Amba-31-Ema-Box-New.jpg",
        description: "Updated design of the Ema series with an improved lock-in seal for freshness."
    },
    {
        id: "amba-32",
        name: "Amba 32 - Ema Box Gold",
        category: "HDPE Jar/Box",
        industry: "Pharma",
        capacity: "250g - 500g",
        features: ["Metallic Gold Finish", "Luxury Appeal", "Food Grade"],
        imageUrl: "/agri-science/images/Amba-32-Ema-Box-Gold.jpg",
        description: "Eye-catching metallic gold powder container, perfect for premium nutraceutical brands."
    },
    {
        id: "amba-33",
        name: "Amba 33 - Humic Box",
        category: "HDPE Jar/Box",
        industry: "Agro",
        capacity: "500g - 1kg",
        features: ["Wide Mouth", "Moisture Resistant", "Heavy Duty"],
        imageUrl: "/agri-science/images/Amba-33-Humic-Box.jpg",
        description: "Robust jar tailored for storing humic acid powders and granulated fertilizers."
    },
    {
        id: "amba-34",
        name: "Amba 34 - Humic Box (Black)",
        category: "HDPE Jar/Box",
        industry: "Agro",
        capacity: "500g - 1kg",
        features: ["UV Protective Black", "Moisture Resistant", "Tamper Evident"],
        imageUrl: "/agri-science/images/Amba-34-Humic-Box-Black.jpg",
        description: "Black variant of the Humic box preventing degradation of photo-sensitive powder mixes."
    },
    {
        id: "amba-35",
        name: "Amba 35 - Humic Thaio Box",
        category: "HDPE Jar/Box",
        industry: "Agro",
        capacity: "1kg",
        features: ["Thick Wall", "Secure Cap", "Impact Proof"],
        imageUrl: "/agri-science/images/Amba-35-Humic-Thaio-Box.jpg",
        description: "Large capacity box engineered for high-volume pesticide or insecticide granules."
    },
    {
        id: "amba-36",
        name: "Amba 36 - Humic Box Bufro Dom",
        category: "HDPE Jar/Box",
        industry: "Agro",
        capacity: "1kg",
        features: ["Reinforced Domed Lid", "Excellent Seal", "Durable"],
        imageUrl: "/agri-science/images/Amba-36-Humic-Box-Bufro-dom.jpg",
        description: "A high-durability box with a domed screw lid to hold dense soil conditioner powders."
    },
    {
        id: "amba-36a",
        name: "Amba 36A - Humic Thaio Box (Alt)",
        category: "HDPE Jar/Box",
        industry: "Agro",
        capacity: "1kg",
        features: ["Interlocking Base", "Moisture Guard", "Custom Print Area"],
        imageUrl: "/agri-science/images/Amba-36A-Humic-Thaio-Box.jpg",
        description: "Alternative design offering enhanced stack stability for warehouse storing."
    },
    {
        id: "amba-37",
        name: "Amba 37 - Mercury Box",
        category: "HDPE Jar/Box",
        industry: "Agro",
        capacity: "500g",
        features: ["Secure Lock Cap", "Heavy Duty", "Industrial Grade"],
        imageUrl: "/agri-science/images/Amba-37-Mercury-Box.jpg",
        description: "Medium-sized agro jar for seed treatment powders and solid chemical mixtures."
    },
    {
        id: "amba-38",
        name: "Amba 38 - C-7 Flora",
        category: "Bottle",
        industry: "Agro",
        capacity: "250ml - 500ml",
        features: ["Ribbed Profile", "Ergonomic Neck", "Anti-drip"],
        imageUrl: "/agri-science/images/Amba-38-C-7-Flora.jpg",
        description: "Sleek, ribbed bottle design ideal for plant stimulants and foliar sprays."
    },
    {
        id: "amba-39",
        name: "Amba 39 - Cosmo Box",
        category: "HDPE Jar/Box",
        industry: "Cosmetic",
        capacity: "100g - 250g",
        features: ["Premium Styling", "Smooth Lid Area", "Scratch Resistant"],
        imageUrl: "/agri-science/images/Amba-39-Cosmo-Box.jpg",
        description: "High-finish jar designed for cosmetic pastes, hair masks, and waxes."
    },
    {
        id: "amba-40",
        name: "Amba 40 - Phyton",
        category: "Bottle",
        industry: "Agro",
        capacity: "500ml - 1L",
        features: ["High-impact HDPE", "Tamper Evident Ring", "Chemical Resistant"],
        imageUrl: "/agri-science/images/Amba-40-Phyton.jpg",
        description: "High-durability bottle optimized for chemical fertilizers and pesticide liquids."
    },
    {
        id: "amba-41",
        name: "Amba 41 - Protein Box",
        category: "HDPE Jar/Box",
        industry: "Pharma",
        capacity: "500g - 2kg",
        features: ["Wide Mouth", "Comfort Grip Neck", "Food Grade"],
        imageUrl: "/agri-science/images/Amba-41-Protein-Box.jpg",
        description: "Large capacity protein powder jar with a wide mouth and ergonomic lid grip."
    },
    {
        id: "amba-42",
        name: "Amba 42 - Special",
        category: "Bottle",
        industry: "Cosmetic",
        capacity: "250ml",
        features: ["Custom Embossing", "Glossy Finish", "Hand Sanitizer Ready"],
        imageUrl: "/agri-science/images/Amba-42-Special.jpg",
        description: "Unique shape designed for custom hand washes, sanitizers, and specialty soaps."
    },
    {
        id: "amba-43",
        name: "Amba 43 - Pharma Start",
        category: "HDPE Jar/Box",
        industry: "Pharma",
        capacity: "100cc - 250cc",
        features: ["USP Class VI Compliant", "Child-Resistant Ready", "Induction Seal Compatible"],
        imageUrl: "/agri-science/images/Amba-43-Pharma-Start.jpg",
        description: "Certified medical jar for pharmaceutical pills, tablets, and healthcare tablets."
    },
    {
        id: "amba-44",
        name: "Amba 44 - Pharma Capsule",
        category: "HDPE Jar/Box",
        industry: "Pharma",
        capacity: "150cc - 300cc",
        features: ["FDA Approved", "Moisture Tight", "Secured Cap"],
        imageUrl: "/agri-science/images/Amba-44-Pharma-Capsule.jpg",
        description: "Capsule jar offering state-of-the-art protection against humidity and air ingress."
    },
    {
        id: "amba-45",
        name: "Amba 45 - Cosmo Bottles Set",
        category: "Bottle",
        industry: "Cosmetic",
        capacity: "100ml - 300ml",
        features: ["Aesthetic Silhouette", "Pump Compatible", "Custom Coloring"],
        imageUrl: "/agri-science/images/Amba-45-Cosmo-Bottles.jpg",
        description: "A set of high-end cosmetic bottles suitable for soaps, lotions, and skin care kits."
    },
    {
        id: "amba-46",
        name: "Amba 46 - Syrup Bottles Collection",
        category: "PET",
        industry: "Pharma",
        capacity: "60ml - 200ml",
        features: ["Amber Appearance", "Light Shielding", "Food Grade PET"],
        imageUrl: "/agri-science/images/Amba-46-Syrup-Bottles.jpg",
        description: "A series of high-clarity amber PET bottles designed for liquid medicines and cough syrups."
    }
];

export const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];