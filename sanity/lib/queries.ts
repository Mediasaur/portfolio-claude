import { defineQuery } from "next-sanity"

export type ProjectType = {
  _id: string
  title: string
  slug: string
  description: string
  url: string
  tags: string[]
}

export const projectsQuery = defineQuery(`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    url,
    tags
  }
`)

export const projectBySlugQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    url,
    tags
  }
`)