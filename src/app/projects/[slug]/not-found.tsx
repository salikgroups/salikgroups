import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center sg-section-x py-20 text-center">
      <h1 className="font-display text-3xl font-bold">Project not found</h1>
      <p className="mt-3 text-sg-text-mid">The project you are looking for does not exist.</p>
      <Link href="/#projects" className="mt-6 text-sm font-semibold text-sg-accent hover:underline">
        View all projects →
      </Link>
    </main>
  );
}
