"use client"

import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { Mail, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    // <main className="min-h-screen py-16 lg:py-24">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="text-center mb-12">
    //       <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Contáctanos</h1>
    //       <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
    //         ¿Tienes preguntas, sugerencias o quieres colaborar? Nos encantaría saber de ti.
    //       </p>
    //     </div>

    //     <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
    //       {/* Contact Info */}
    //       <div className="lg:col-span-1 space-y-6">
    //         <Card>
    //           <CardContent className="p-6">
    //             <div className="flex items-start gap-4">
    //               <div className="rounded-lg bg-primary/10 p-3">
    //                 <Mail className="h-6 w-6 text-primary" />
    //               </div>
    //               <div>
    //                 <h3 className="font-semibold text-foreground mb-1">Email</h3>
    //                 <p className="text-sm text-muted-foreground">contacto@viajerossinlimites.com</p>
    //               </div>
    //             </div>
    //           </CardContent>
    //         </Card>

    //         <Card>
    //           <CardContent className="p-6">
    //             <div className="flex items-start gap-4">
    //               <div className="rounded-lg bg-primary/10 p-3">
    //                 <MapPin className="h-6 w-6 text-primary" />
    //               </div>
    //               <div>
    //                 <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
    //                 <p className="text-sm text-muted-foreground">Viajando por el mundo</p>
    //               </div>
    //             </div>
    //           </CardContent>
    //         </Card>

    //         <Card className="bg-muted/50">
    //           <CardContent className="p-6">
    //             <h3 className="font-semibold text-foreground mb-3">Tiempo de Respuesta</h3>
    //             <p className="text-sm text-muted-foreground leading-relaxed">
    //               Normalmente respondemos en 24-48 horas. Si tu consulta es urgente, por favor indícalo en el asunto.
    //             </p>
    //           </CardContent>
    //         </Card>
    //       </div>

    //       {/* Contact Form */}
    //       <div className="lg:col-span-2">
    //         <Card>
    //           <CardContent className="p-8">
    //             <form onSubmit={handleSubmit} className="space-y-6">
    //               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
    //                 <div className="space-y-2">
    //                   <Label htmlFor="name">Nombre</Label>
    //                   <Input
    //                     id="name"
    //                     name="name"
    //                     type="text"
    //                     placeholder="Tu nombre"
    //                     value={formData.name}
    //                     onChange={handleChange}
    //                     required
    //                   />
    //                 </div>
    //                 <div className="space-y-2">
    //                   <Label htmlFor="email">Email</Label>
    //                   <Input
    //                     id="email"
    //                     name="email"
    //                     type="email"
    //                     placeholder="tu@email.com"
    //                     value={formData.email}
    //                     onChange={handleChange}
    //                     required
    //                   />
    //                 </div>
    //               </div>

    //               <div className="space-y-2">
    //                 <Label htmlFor="subject">Asunto</Label>
    //                 <Input
    //                   id="subject"
    //                   name="subject"
    //                   type="text"
    //                   placeholder="¿Sobre qué quieres hablar?"
    //                   value={formData.subject}
    //                   onChange={handleChange}
    //                   required
    //                 />
    //               </div>

    //               <div className="space-y-2">
    //                 <Label htmlFor="message">Mensaje</Label>
    //                 <Textarea
    //                   id="message"
    //                   name="message"
    //                   placeholder="Cuéntanos más..."
    //                   rows={6}
    //                   value={formData.message}
    //                   onChange={handleChange}
    //                   required
    //                 />
    //               </div>

    //               <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>
    //                 {status === "loading" ? (
    //                   "Enviando..."
    //                 ) : (
    //                   <>
    //                     <Send className="mr-2 h-4 w-4" />
    //                     Enviar Mensaje
    //                   </>
    //                 )}
    //               </Button>

    //               {status === "success" && (
    //                 <p className="text-sm text-green-600">¡Mensaje enviado! Te responderemos pronto.</p>
    //               )}
    //               {status === "error" && (
    //                 <p className="text-sm text-destructive">Hubo un error. Por favor, inténtalo de nuevo.</p>
    //               )}
    //             </form>
    //           </CardContent>
    //         </Card>
    //       </div>
    //     </div>
    //   </div>
    // </main>
    <div>contacto</div>
  )
}
