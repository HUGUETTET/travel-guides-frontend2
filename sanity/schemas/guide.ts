import { defineField, defineType } from "sanity"

export default defineType({
  name: "guide",
  title: "Guía de Viaje",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "destination",
      title: "Destino",
      type: "reference",
      to: { type: "destination" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Extracto",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "mainImage",
      title: "Imagen Principal",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texto Alternativo",
        },
      ],
    }),
    defineField({
      name: "bestTimeToVisit",
      title: "Mejor Época para Visitar",
      type: "string",
    }),
    defineField({
      name: "budget",
      title: "Presupuesto Estimado",
      type: "object",
      fields: [
        {
          name: "low",
          title: "Bajo",
          type: "string",
        },
        {
          name: "medium",
          title: "Medio",
          type: "string",
        },
        {
          name: "high",
          title: "Alto",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "duration",
      title: "Duración Recomendada",
      type: "string",
      description: "Ej: 3-5 días, 1 semana",
    }),
    defineField({
      name: "sections",
      title: "Secciones",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Título de Sección",
              type: "string",
            },
            {
              name: "content",
              title: "Contenido",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "highlights",
      title: "Puntos Destacados",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "tips",
      title: "Consejos",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de Publicación",
      type: "datetime",
    }),
  ],
})
