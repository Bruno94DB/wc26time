import { MetadataRoute } from "next";
import { matches } from "@/data/matches";

const BASE_URL = "https://www.wc26time.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/schedule`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/teams`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/venues`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const matchRoutes: MetadataRoute.Sitemap = matches
    .filter((m) => m.slug)
    .map((m) => ({
      url: `${BASE_URL}/matches/${m.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));

  return [...staticRoutes, ...matchRoutes];
}
