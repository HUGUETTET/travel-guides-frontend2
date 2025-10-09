import { defineField, defineType } from "sanity"

export default defineType({
  name: "newsletter",
  title: "Suscriptor Newsletter",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "subscribedAt",
      title: "Fecha de Suscripción",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "active",
      title: "Activo",
      type: "boolean",
      initialValue: true,
    }),
  ],
})
