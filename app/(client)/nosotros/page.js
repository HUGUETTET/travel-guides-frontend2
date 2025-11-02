// import { Card, CardContent } from "@/components/ui/card"
import { Globe, Heart, Users, Compass } from "lucide-react"
import { siteConfig } from '@/lib/siteConfig'

export const metadata = {
  title: `Nosotros - ${siteConfig.name}`,
  description: "Conoce nuestra historia y misión de inspirar viajeros alrededor del mundo.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Globe,
      title: "Exploración Auténtica",
      description: "Compartimos experiencias reales y consejos probados en cada destino que visitamos.",
    },
    {
      icon: Heart,
      title: "Pasión por Viajar",
      description: "Creemos que viajar transforma vidas y conecta culturas de manera única.",
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Construimos una comunidad de viajeros que comparten conocimientos y experiencias.",
    },
    {
      icon: Compass,
      title: "Guías Prácticas",
      description: "Ofrecemos información útil y actualizada para planificar viajes memorables.",
    },
  ]

  return (
    // <main className="min-h-screen">
    //   {/* Hero Section */}
    //   <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
    //     <div
    //       className="absolute inset-0 z-0"
    //       style={{
    //         backgroundImage: "url('/team-travelers-exploring-world.jpg')",
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //       }}
    //     >
    //       <div className="absolute inset-0 bg-black/50" />
    //     </div>
    //     <div className="relative z-10 text-center px-6">
    //       <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">Sobre Nosotros</h1>
    //       <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
    //         Inspirando viajeros a descubrir el mundo, un destino a la vez
    //       </p>
    //     </div>
    //   </section>

    //   {/* Story Section */}
    //   <section className="py-16 lg:py-24">
    //     <div className="mx-auto max-w-4xl px-6 lg:px-8">
    //       <div className="prose prose-lg max-w-none">
    //         <h2 className="text-3xl font-bold text-foreground mb-6">Nuestra Historia</h2>
    //         <p className="text-muted-foreground leading-relaxed mb-4">
    //           {siteConfig.name} nació de una pasión compartida por explorar el mundo y el deseo de ayudar a otros a
    //           hacer realidad sus sueños de viaje. Lo que comenzó como un blog personal se ha convertido en una
    //           plataforma completa de recursos para viajeros de habla hispana.
    //         </p>
    //         <p className="text-muted-foreground leading-relaxed mb-4">
    //           Hemos recorrido más de 50 países en 5 continentes, acumulando experiencias, consejos y conocimientos que
    //           ahora compartimos contigo. Nuestro objetivo es hacer que viajar sea más accesible, seguro y gratificante
    //           para todos.
    //         </p>
    //         <p className="text-muted-foreground leading-relaxed">
    //           Creemos que cada viaje es una oportunidad para crecer, aprender y conectar con personas y culturas
    //           diferentes. A través de nuestras guías detalladas, consejos prácticos y experiencias auténticas, queremos
    //           inspirarte a salir de tu zona de confort y descubrir todo lo que el mundo tiene para ofrecer.
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Values Section */}
    //   <section className="py-16 lg:py-24 bg-muted/30">
    //     <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //       <div className="text-center mb-12">
    //         <h2 className="text-3xl font-bold text-foreground mb-4">Nuestros Valores</h2>
    //         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
    //           Los principios que guían cada artículo, guía y recomendación que compartimos
    //         </p>
    //       </div>

    //       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
    //         {values.map((value) => {
    //           const Icon = value.icon
    //           return (
    //             <Card key={value.title} className="text-center">
    //               <CardContent className="p-6">
    //                 <div className="mx-auto w-fit rounded-lg bg-primary/10 p-4 mb-4">
    //                   <Icon className="h-8 w-8 text-primary" />
    //                 </div>
    //                 <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
    //                 <p className="text-sm text-muted-foreground">{value.description}</p>
    //               </CardContent>
    //             </Card>
    //           )
    //         })}
    //       </div>
    //     </div>
    //   </section>

    //   {/* Mission Section */}
    //   <section className="py-16 lg:py-24">
    //     <div className="mx-auto max-w-4xl px-6 lg:px-8">
    //       <Card className="bg-primary text-primary-foreground">
    //         <CardContent className="p-8 lg:p-12 text-center">
    //           <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
    //           <p className="text-lg leading-relaxed">
    //             Empoderar a viajeros de habla hispana con información confiable, guías detalladas y consejos prácticos
    //             para que puedan explorar el mundo con confianza, seguridad y respeto por las culturas locales.
    //           </p>
    //         </CardContent>
    //       </Card>
    //     </div>
    //   </section>

    //   {/* Stats Section */}
    //   <section className="py-16 lg:py-24 bg-muted/30">
    //     <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
    //         <div>
    //           <div className="text-4xl font-bold text-primary mb-2">50+</div>
    //           <div className="text-sm text-muted-foreground">Países Visitados</div>
    //         </div>
    //         <div>
    //           <div className="text-4xl font-bold text-primary mb-2">200+</div>
    //           <div className="text-sm text-muted-foreground">Guías Publicadas</div>
    //         </div>
    //         <div>
    //           <div className="text-4xl font-bold text-primary mb-2">10K+</div>
    //           <div className="text-sm text-muted-foreground">Lectores Mensuales</div>
    //         </div>
    //         <div>
    //           <div className="text-4xl font-bold text-primary mb-2">5+</div>
    //           <div className="text-sm text-muted-foreground">Años de Experiencia</div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </main>
    <div>nosotros</div>
  )
}
