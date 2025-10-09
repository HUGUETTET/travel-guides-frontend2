import { client } from "../../../lib/sanity"
// import { urlFor } from "@/lib/image-url"
import { notFound } from "next/navigation"
// import { Card, CardContent } from "@/components/ui/card"
// import Link from "next/link"
// import { MapPin, Globe } from "lucide-react"

async function getDestination(slug) {
  return client.fetch(
    `
    *[_type == "destination" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      country,
      region,
      description,
      mainImage
    }
  `,
    { slug },
  )
}

async function getDestinationGuides(destinationId) {
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

async function getDestinationPosts(destinationId) {
  return client.fetch(
    `
    *[_type == "post" && $destinationId in destinations[]._ref] | order(publishedAt desc)[0...6] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt
    }
  `,
    { destinationId },
  )
}

export async function generateMetadata({ params }) {
  const destination = await getDestination(params.slug)

  if (!destination) {
    return {
      title: "Destino no encontrado",
    }
  }

  return {
    title: `${destination.name} - Guía de Viaje`,
    description: destination.description || `Descubre todo sobre ${destination.name}, ${destination.country}`,
  }
}

export default async function DestinoPage({ params }) {
  const destination = await getDestination(params.slug)

  if (!destination) {
    notFound()
  }

  const guides = await getDestinationGuides(destination._id)
  const posts = await getDestinationPosts(destination._id)

  return (
    // <main className="min-h-screen">
    //   {/* Hero Section */}
    //   <div className="relative h-[400px] lg:h-[500px]">
    //     <img
    //       src={
    //         destination.mainImage
    //           ? urlFor(destination.mainImage).width(1920).height(1080).url()
    //           : "/placeholder.svg?height=1080&width=1920&query=travel+destination"
    //       }
    //       alt={destination.mainImage?.alt || destination.name}
    //       className="h-full w-full object-cover"
    //     />
    //     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    //     <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
    //       <div className="mx-auto max-w-7xl">
    //         <div className="flex items-center gap-2 mb-4">
    //           <MapPin className="h-5 w-5 text-white" />
    //           <span className="text-white/90">{destination.country}</span>
    //         </div>
    //         <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{destination.name}</h1>
    //         {destination.description && (
    //           <p className="mt-4 text-lg text-white/90 max-w-2xl">{destination.description}</p>
    //         )}
    //       </div>
    //     </div>
    //   </div>

    //   <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
    //     {/* Guides Section */}
    //     {guides.length > 0 && (
    //       <div className="mb-16">
    //         <h2 className="text-3xl font-bold text-foreground mb-8">Guías de Viaje</h2>
    //         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    //           {guides.map((guide) => (
    //             <Link key={guide._id} href={`/guias/${guide.slug.current}`}>
    //               <Card className="overflow-hidden h-full transition-all hover:shadow-xl">
    //                 <div className="relative h-48">
    //                   <img
    //                     src={
    //                       guide.mainImage
    //                         ? urlFor(guide.mainImage).width(600).height(400).url()
    //                         : "/placeholder.svg?height=400&width=600&query=travel+guide"
    //                     }
    //                     alt={guide.mainImage?.alt || guide.title}
    //                     className="h-full w-full object-cover"
    //                   />
    //                 </div>
    //                 <CardContent className="p-6">
    //                   <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">{guide.title}</h3>
    //                   <p className="text-sm text-muted-foreground line-clamp-2">{guide.excerpt}</p>
    //                 </CardContent>
    //               </Card>
    //             </Link>
    //           ))}
    //         </div>
    //       </div>
    //     )}

    //     {/* Posts Section */}
    //     {posts.length > 0 && (
    //       <div>
    //         <h2 className="text-3xl font-bold text-foreground mb-8">Artículos Relacionados</h2>
    //         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    //           {posts.map((post) => (
    //             <Link key={post._id} href={`/posts/${post.slug.current}`}>
    //               <Card className="overflow-hidden h-full transition-all hover:shadow-xl">
    //                 <div className="relative h-48">
    //                   <img
    //                     src={
    //                       post.mainImage
    //                         ? urlFor(post.mainImage).width(600).height(400).url()
    //                         : "/placeholder.svg?height=400&width=600&query=travel+blog"
    //                     }
    //                     alt={post.mainImage?.alt || post.title}
    //                     className="h-full w-full object-cover"
    //                   />
    //                 </div>
    //                 <CardContent className="p-6">
    //                   <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{post.title}</h3>
    //                   <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
    //                 </CardContent>
    //               </Card>
    //             </Link>
    //           ))}
    //         </div>
    //       </div>
    //     )}

    //     {guides.length === 0 && posts.length === 0 && (
    //       <div className="text-center py-12">
    //         <Globe className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
    //         <p className="text-muted-foreground">Pronto tendremos contenido disponible para este destino.</p>
    //       </div>
    //     )}
    //   </div>
    // </main>
    <div>destinos slug</div>
  )
}
