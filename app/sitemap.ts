import type { MetadataRoute } from "next";

const siteUrl = "https://vincentdetail.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: "2026-04-10",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}