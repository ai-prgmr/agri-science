import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://www.ambaplastolite.com";
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/_next/", "/static/"],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
