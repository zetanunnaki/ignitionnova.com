import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "content");

export interface FrontMatter {
  title: string;
  date: string;
  category?: string;
  author?: string;
  readTime?: string;
  description?: string;
  featured?: boolean;
  client?: string;
  industry?: string;
  services?: string[];
  metrics?: { value: string; label: string }[];
  [key: string]: unknown;
}

export interface ContentItem {
  slug: string;
  frontMatter: FrontMatter;
  content: string;
  readingTime: string;
}

function getContentByType(type: "insights" | "case-studies"): ContentItem[] {
  const dir = path.join(contentDir, type);

  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const stats = readingTime(content);

      return {
        slug: filename.replace(".mdx", ""),
        frontMatter: data as FrontMatter,
        content,
        readingTime: stats.text,
      };
    })
    .sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime());
}

export function getInsights(): ContentItem[] {
  return getContentByType("insights");
}

export function getCaseStudies(): ContentItem[] {
  return getContentByType("case-studies");
}

export function getInsightBySlug(slug: string): ContentItem | undefined {
  return getInsights().find((item) => item.slug === slug);
}

export function getCaseStudyBySlug(slug: string): ContentItem | undefined {
  return getCaseStudies().find((item) => item.slug === slug);
}

export function getAllInsightSlugs(): string[] {
  return getInsights().map((item) => item.slug);
}

export function getAllCaseStudySlugs(): string[] {
  return getCaseStudies().map((item) => item.slug);
}
