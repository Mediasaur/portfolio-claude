import { client } from "@/sanity/lib/client"
import { projectBySlugQuery } from "@/sanity/lib/queries"
import { notFound } from "next/navigation"

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await client.fetch(projectBySlugQuery, { slug })

  if (!project) {
    notFound()
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.tags?.join(", ")}</p>
      <a href={project.url} target="_blank">View Live</a>
    </div>
  )
}