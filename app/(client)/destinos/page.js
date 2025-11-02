import { getAllDestinations } from "../../../lib/sanity"
import { siteConfig } from '@/lib/siteConfig'
// import { Card, CardContent } from "@/components/ui/card"
// import { urlFor } from "@/lib/image-url"
// import Link from "next/link"
// import { MapPin } from "lucide-react"

export const metadata = {
  title: `Destinos - ${siteConfig.name}`,
  description: "Explora destinos increíbles alrededor del mundo con nuestras guías y recomendaciones.",
}

export default async function DestinosPage() {
  const destinations = await getAllDestinations()

  // Group destinations by region
  const destinationsByRegion = destinations.reduce((acc, dest) => {
    const region = dest.region || "otros"
    if (!acc[region]) {
      acc[region] = []
    }
    acc[region].push(dest)
    return acc
  }, {})

  const regionNames = {
    europa: "Europa",
    asia: "Asia",
    "america-norte": "América del Norte",
    "america-sur": "América del Sur",
    africa: "África",
    oceania: "Oceanía",
    otros: "Otros Destinos",
  }

  return (
    // <main className="min-h-screen py-16 lg:py-24">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="text-center mb-12">
    //       <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Explora Destinos</h1>
    //       <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
    //         Descubre lugares increíbles alrededor del mundo con nuestras guías detalladas y recomendaciones.
    //       </p>
    //     </div>

    //     {Object.entries(destinationsByRegion).map(([region, dests]) => (
    //       <div key={region} className="mb-16">
    //         <h2 className="text-2xl font-bold text-foreground mb-6">{regionNames[region] || region}</h2>
    //         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    //           {dests.map((destination) => (
    //             <Link key={destination._id} href={`/destinos/${destination.slug.current}`}>
    //               <Card className="overflow-hidden h-full transition-all hover:shadow-xl">
    //                 <div className="relative h-64">
    //                   <img
    //                     src={
    //                       destination.mainImage
    //                         ? urlFor(destination.mainImage).width(600).height(400).url()
    //                         : "/placeholder.svg?height=400&width=600&query=travel+destination"
    //                     }
    //                     alt={destination.mainImage?.alt || destination.name}
    //                     className="h-full w-full object-cover"
    //                   />
    //                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    //                   <div className="absolute bottom-4 left-4 right-4">
    //                     <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
    //                     <div className="flex items-center gap-1 mt-2 text-white/90">
    //                       <MapPin className="h-4 w-4" />
    //                       <span className="text-sm">{destination.country}</span>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <CardContent className="p-4">
    //                   <p className="text-sm text-muted-foreground line-clamp-2">{destination.description}</p>
    //                 </CardContent>
    //               </Card>
    //             </Link>
    //           ))}
    //         </div>
    //       </div>
    //     ))}

    //     {destinations.length === 0 && (
    //       <div className="text-center py-12">
    //         <p className="text-muted-foreground">No hay destinos disponibles en este momento.</p>
    //       </div>
    //     )}
    //   </div>
    // </main>
    <div>destinos</div>
  )
}
