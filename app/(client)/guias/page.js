import { client } from "../../../lib/sanity"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { urlFor } from "../../../lib/image-url"
import Link from "next/link"
import { Clock, Calendar, MapPin } from "lucide-react"
import { siteConfig } from '@/lib/siteConfig'

export const metadata = {
  title: `Guías de Viaje - ${siteConfig.name}`,
  description: "Guías completas de viaje con itinerarios, presupuestos y consejos prácticos para cada destino.",
}

async function getAllGuides() {
  return client.fetch(`
    *[_type == "guide"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      duration,
      bestTimeToVisit,
      publishedAt,
      "destination": destination->{name, slug, country}
    }
  `)
}

export default async function GuidesPage() {
  const guides = await getAllGuides()

  return (
    <main className="min-h-screen py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Guías de Viaje</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guías completas con itinerarios detallados, presupuestos y consejos prácticos para planificar tu viaje
            perfecto.
          </p>
        </div>

        {guides.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No hay guías disponibles en este momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link key={guide._id} href={`/guias/${guide.slug.current}`}>
                <Card className="overflow-hidden h-full transition-all hover:shadow-xl">
                  <div className="relative h-56">
                    <img
                      src={
                        guide.mainImage
                          ? urlFor(guide.mainImage).width(600).height(400).url()
                          : "/placeholder.svg?height=400&width=600&query=travel+guide"
                      }
                      alt={guide.mainImage?.alt || guide.title}
                      className="h-full w-full object-cover"
                    />
                    {guide.destination && (
                      <Badge className="absolute top-4 left-4 bg-white/90 text-foreground hover:bg-white">
                        <MapPin className="h-3 w-3 mr-1" />
                        {guide.destination.name}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{guide.excerpt}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      {guide.duration && (
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{guide.duration}</span>
                        </div>
                      )}
                      {guide.bestTimeToVisit && (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{guide.bestTimeToVisit}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
