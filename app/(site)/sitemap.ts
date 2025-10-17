// app/(site)/sitemap.ts
import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.siteUrl.replace(/\/$/, "");

  const entries = [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    // لو معندكش صفحات فعلية /servizi/[slug] غيّر الـ url هنا لـ `${base}/`
    ...services.map((s) => ({
      url: `${base}/servizi/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ] satisfies MetadataRoute.Sitemap;

  return entries;
}
