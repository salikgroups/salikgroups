import { siteConfig } from "@/config/site";
import { Footer } from "@/components/layout/footer";
import { SiteShell } from "@/components/layout/site-shell";
import { ProjectDetailPage } from "@/components/pages/project-detail-page";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildProjectMetadata,
  getBreadcrumbJsonLd,
  getProjectJsonLd,
} from "@/lib/seo";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: `${siteConfig.name} | Project Not Found`, robots: { index: false } };
  }

  return buildProjectMetadata(project);
}

export default async function Page({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <SiteShell>
      <JsonLd
        data={[
          getProjectJsonLd(project),
          getBreadcrumbJsonLd([
            { name: siteConfig.name, path: "/" },
            { name: "Projects", path: "/#projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
        ]}
      />
      <ProjectDetailPage project={project} />
      <Footer />
    </SiteShell>
  );
}
