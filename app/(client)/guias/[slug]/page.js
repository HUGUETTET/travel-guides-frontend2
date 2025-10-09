import { client } from "../../../../lib/sanity"
// import { urlFor } from "@/lib/image-url"
import { notFound } from "next/navigation"
// import { PortableText } from "@portabletext/react"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"
// import { Clock, Calendar, MapPin, DollarSign, Lightbulb, Star } from "lucide-react"
// import Link from "next/link"

async function getGuide(slug) {
  return client.fetch(
    `
    *[_type == "guide" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      duration,
      bestTimeToVisit,
      budget,
      sections,
      highlights,
      tips,
      publishedAt,
      "destination": destination->{name, slug, country, region}
    }
  `,
    { slug },
  )
}

export async function generateMetadata({ params }) {
  const guide = await getGuide(params.slug)

  if (!guide) {
    return {
      title: "Guía no encontrada",
    }
  }

  return {
    title: `${guide.title} - Guía de Viaje`,
    description: guide.excerpt || `Guía completa de viaje para ${guide.destination?.name}`,
  }
}

export default async function GuidePage({ params }) {
  const guide = await getGuide(params.slug)

  if (!guide) {
    notFound()
  }

  return (
    // <main className="min-h-screen">
    //   {/* Hero Section */}
    //   <div className="relative h-[400px] lg:h-[500px]">
    //     <img
    //       src={
    //         guide.mainImage
    //           ? urlFor(guide.mainImage).width(1920).height(1080).url()
    //           : "/placeholder.svg?height=1080&width=1920&query=travel+destination+guide"
    //       }
    //       alt={guide.mainImage?.alt || guide.title}
    //       className="h-full w-full object-cover"
    //     />
    //     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    //     <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
    //       <div className="mx-auto max-w-4xl">
    //         {guide.destination && (
    //           <Link href={`/destinos/${guide.destination.slug.current}`}>
    //             <Badge className="mb-4 bg-white/90 text-foreground hover:bg-white">
    //               <MapPin className="h-3 w-3 mr-1" />
    //               {guide.destination.name}, {guide.destination.country}
    //             </Badge>
    //           </Link>
    //         )}
    //         <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl text-balance">{guide.title}</h1>
    //         {guide.excerpt && <p className="mt-4 text-lg text-white/90 max-w-2xl">{guide.excerpt}</p>}
    //       </div>
    //     </div>
    //   </div>

    //   {/* Quick Info */}
    //   <div className="border-b border-border bg-muted/30">
    //     <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
    //       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    //         {guide.duration && (
    //           <div className="flex items-center gap-3">
    //             <div className="rounded-lg bg-primary/10 p-3">
    //               <Clock className="h-5 w-5 text-primary" />
    //             </div>
    //             <div>
    //               <p className="text-sm text-muted-foreground">Duración</p>
    //               <p className="font-semibold text-foreground">{guide.duration}</p>
    //             </div>
    //           </div>
    //         )}
    //         {guide.bestTimeToVisit && (
    //           <div className="flex items-center gap-3">
    //             <div className="rounded-lg bg-primary/10 p-3">
    //               <Calendar className="h-5 w-5 text-primary" />
    //             </div>
    //             <div>
    //               <p className="text-sm text-muted-foreground">Mejor Época</p>
    //               <p className="font-semibold text-foreground">{guide.bestTimeToVisit}</p>
    //             </div>
    //           </div>
    //         )}
    //         {guide.budget && (
    //           <div className="flex items-center gap-3">
    //             <div className="rounded-lg bg-primary/10 p-3">
    //               <DollarSign className="h-5 w-5 text-primary" />
    //             </div>
    //             <div>
    //               <p className="text-sm text-muted-foreground">Presupuesto</p>
    //               <p className="font-semibold text-foreground">
    //                 {guide.budget.low} - {guide.budget.high}
    //               </p>
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>

    //   {/* Content */}
    //   <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-16">
    //     {/* Highlights */}
    //     {guide.highlights && guide.highlights.length > 0 && (
    //       <Card className="mb-12">
    //         <CardContent className="p-6">
    //           <div className="flex items-center gap-2 mb-4">
    //             <Star className="h-5 w-5 text-primary" />
    //             <h2 className="text-2xl font-bold text-foreground">Puntos Destacados</h2>
    //           </div>
    //           <ul className="space-y-2">
    //             {guide.highlights.map((highlight, index) => (
    //               <li key={index} className="flex items-start gap-2">
    //                 <span className="text-primary mt-1">•</span>
    //                 <span className="text-foreground">{highlight}</span>
    //               </li>
    //             ))}
    //           </ul>
    //         </CardContent>
    //       </Card>
    //     )}

    //     {/* Sections */}
    //     {guide.sections && guide.sections.length > 0 && (
    //       <div className="space-y-8 mb-12">
    //         {guide.sections.map((section, index) => (
    //           <div key={index}>
    //             <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
    //             <div className="prose prose-lg max-w-none text-foreground">
    //               <PortableText value={section.content} />
    //             </div>
    //             {index < guide.sections.length - 1 && <Separator className="mt-8" />}
    //           </div>
    //         ))}
    //       </div>
    //     )}

    //     {/* Tips */}
    //     {guide.tips && guide.tips.length > 0 && (
    //       <Card className="bg-muted/50">
    //         <CardContent className="p-6">
    //           <div className="flex items-center gap-2 mb-4">
    //             <Lightbulb className="h-5 w-5 text-primary" />
    //             <h2 className="text-2xl font-bold text-foreground">Consejos Útiles</h2>
    //           </div>
    //           <ul className="space-y-3">
    //             {guide.tips.map((tip, index) => (
    //               <li key={index} className="flex items-start gap-3">
    //                 <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
    //                   {index + 1}
    //                 </span>
    //                 <span className="text-foreground pt-0.5">{tip}</span>
    //               </li>
    //             ))}
    //           </ul>
    //         </CardContent>
    //       </Card>
    //     )}
    //   </div>
    // </main>
    <div>
      "guias slug"
      <div>
        {guide?.length > 0 &&
          guide?.map((tag) => (
            // <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <div className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500">
                #{tag.name} ({tag?.postCount})
              </div>
            // </Link>
          ))}
      </div>
    </div>
  )
}
