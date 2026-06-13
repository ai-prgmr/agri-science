import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.ambaplastolite.com"; // Change to actual production URL if known
    
    const routes = ["", "/about", "/contact", "/products"];
    
    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route === "/products" ? 0.9 : 0.7,
    }));
}
