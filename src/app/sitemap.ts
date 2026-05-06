import { MetadataRoute } from "next";
import services from "../../data/services.json";
import caseStudies from "../../data/case-studies.json";
import industries from "../../data/industries.json";
import { getInsights } from "@/lib/mdx";

export const dynamic = "force-static";

const baseUrl = "https://www.ignitionnova.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/work`, lastModified: new Date() },
    { url: `${baseUrl}/insights`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/pricing`, lastModified: new Date() },
    { url: `${baseUrl}/resources`, lastModified: new Date() },
    { url: `${baseUrl}/industries`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/privacy`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${baseUrl}/work/${cs.slug}`,
    lastModified: new Date(),
  }));

  const insights = getInsights();
  const insightPages: MetadataRoute.Sitemap = insights.map((item) => ({
    url: `${baseUrl}/insights/${item.slug}`,
    lastModified: new Date(item.frontMatter.date),
  }));

  const industryPages: MetadataRoute.Sitemap = industries.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...servicePages, ...industryPages, ...caseStudyPages, ...insightPages];
}
