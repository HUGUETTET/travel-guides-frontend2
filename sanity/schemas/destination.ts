import { defineField, defineType } from "sanity"

export default defineType({
  name: "destination",
  title: "Destino",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del Destino",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "region",
      title: "Región",
      type: "string",
      options: {
        list: [
          { title: "Europa", value: "europa" },
          { title: "Asia", value: "asia" },
          { title: "América del Norte", value: "america-norte" },
          { title: "América del Sur", value: "america-sur" },
          { title: "África", value: "africa" },
          { title: "Oceanía", value: "oceania" },
        ],
      },
    }),
    defineField({
      name: "country",
      title: "País",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción",
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
      name: "featured",
      title: "Destacado",
      type: "boolean",
      initialValue: false,
    }),
  ],
})
