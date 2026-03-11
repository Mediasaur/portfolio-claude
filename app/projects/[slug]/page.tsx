import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  
  const { slug } = await params
  
  const project = projects.find((p) => p.slug === slug)

  if( !project ) {
    notFound();
  }

  return (
    <div>
      <h1>{ project.title }</h1>
      <p>{ project.description }</p>
      <p>{ project.tags.join(", ") }</p>
      <a href={ project.url }>View Live</a>
    </div>
  )

}