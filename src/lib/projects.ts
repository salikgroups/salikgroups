import { projects } from "@/content/projects";

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getProjectPath(slug: string) {
  return `/projects/${slug}`;
}
