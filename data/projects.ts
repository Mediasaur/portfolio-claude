export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  url: string
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description: "Project 1 description here",
    tags: ["Next.js", "Tailwind"],
    url: "https://example.com"
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "Project 2 description here",
    tags: ["Next.js", "Tailwind"],
    url: "https://example.com"
  },
]