import type { MetadataRoute } from "next";
import { mockEventDetailMap } from "@/constants/entities/events/mock";

const BASE_URL = "https://popevents.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/about", "/contact", "/platform", "/events"];

  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : route === "/platform" || route === "/events" ? 0.9 : 0.8,
  }));

  const eventEntries: MetadataRoute.Sitemap = Object.keys(mockEventDetailMap).map((slug) => ({
    url: `${BASE_URL}/events/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...eventEntries];
}

