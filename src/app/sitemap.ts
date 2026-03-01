import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shuvosarkar.vercel.app",
      lastModified: new Date(),
    },
  ];
}