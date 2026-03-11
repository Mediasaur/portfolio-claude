import { projects } from "@/data/projects";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ergun's Projects",
  description: "Projects Page"
}
export default function Projects() {
  return(
    <div>
      <h1>Projects</h1>

      <div className="projects-grid grid grid-cols-2 list-none gap-3">
        {projects.map((project) => (
          <li key={ project.slug } className="p-3 bg-gray-100">
            <Link href={`/projects/${project.slug}`}>
              <h2>{ project.title }</h2>
            </Link>
            <p>{ project.description }</p>
            <p>{ project.tags.join(", ") }</p>
            <a href={ project.url }>View Project</a>
          </li>
        ))
        }
      </div>
    </div>
    
  )
}