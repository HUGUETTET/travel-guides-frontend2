import { createClient } from "next-sanity"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
})

export async function getFeaturedPosts() {
  return client.fetch(`
    *[_type == "post" && featured == true] | order(publishedAt desc)[0...6] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      author,
      readTime,
      "categories": categories[]->title
    }
  `)
}

export async function getAllPosts(limit = 12) {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc)[0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      author,
      readTime,
      "categories": categories[]->title,
      "destinations": destinations[]->name
    }
  `)
}

export async function getPostBySlug(slug) {
  return client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      author,
      readTime,
      body,
      "categories": categories[]->{title, slug},
      "destinations": destinations[]->{name, slug},
      seo
    }
  `,
    { slug },
  )
}

export async function getFeaturedDestinations() {
  return client.fetch(`
    *[_type == "destination" && featured == true][0...6] {
      _id,
      name,
      slug,
      country,
      region,
      description,
      mainImage
    }
  `)
}

export async function getAllDestinations() {
  return client.fetch(`
    *[_type == "destination"] | order(name asc) {
      _id,
      name,
      slug,
      country,
      region,
      description,
      mainImage
    }
  `)
}

export async function getGuidesByDestination(destinationId) {
  return client.fetch(
    `
    *[_type == "guide" && destination._ref == $destinationId] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      duration,
      bestTimeToVisit
    }
  `,
    { destinationId },
  )
}

export async function subscribeToNewsletter(email) {
  return client.create({
    _type: "newsletter",
    email,
    subscribedAt: new Date().toISOString(),
    active: true,
  })
}
