import { MetadataRoute } from "next";
import { matches } from "@/data/matches";
import { teams } from "@/data/teams";

const BASE_URL = "https://www.wc26time.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                                         lastModified: new Date(), changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE_URL}/schedule`,                           lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE_URL}/world-cup-2026-schedule`,            lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/world-cup-2026-groups`,              lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/world-cup-2026-countdown`,           lastModified: new Date(), changeFrequency: "daily",   priority: 0.8 },
    { url: `${BASE_URL}/croatia-world-cup-schedule`,         lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/teams`,                              lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/venues`,                             lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  // Only include real group stage matches — exclude knockout placeholders
  const matchRoutes: MetadataRoute.Sitemap = matches
    .filter((m) => m.round === "group" && m.slug)
    .map((m) => ({
      url: `${BASE_URL}/matches/${m.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));

  const teamRoutes: MetadataRoute.Sitemap = teams.map((t) => ({
    url: `${BASE_URL}/world-cup-2026/${t.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...teamRoutes, ...matchRoutes];
}
