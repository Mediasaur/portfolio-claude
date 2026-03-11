import { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import { ProjectType } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Ergun's Projects",
  description: "Projects Page"
}

export default async function Projects() {

  const projects = await client.fetch(projectsQuery)

  return(
    <main>
      <h1>Projects</h1>
      <ul>
        {projects.map((project: ProjectType) => (
          <li key={project._id}>
            <Link href={`/projects/${project.slug}`}>
              <h2>{project.title}</h2>
            </Link>
            <p>{project.description}</p>
            <p>{project.tags?.join(", ")}</p>
          </li>
        ))}
      </ul>
    </main>
    
  )
}