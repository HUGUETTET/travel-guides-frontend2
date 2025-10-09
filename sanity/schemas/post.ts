// import { Rule } from "sanity";

// export const post = {
//   name: "post",
//   title: "Post",
//   type: "document",

//   fields: [
//     {
//       name: "title",
//       title: "Title",
//       type: "string",
//       validation: (Rule: Rule) => Rule.required().error("Required"),
//     },
//     {
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: { source: "title" },
//       validation: (Rule: Rule) => Rule.required().error("Required"),
//     },
//     {
//       name: "publishedAt",
//       title: "Published at",
//       type: "datetime",
//       initialValue: () => new Date().toISOString(),
//     },
//     {
//       name: "excerpt",
//       title: "Excerpt",
//       type: "text",
//       validation: (Rule: Rule) => Rule.max(200).error("Max 200 characters"),
//     },
//     {
//       name: "body",
//       title: "Body",
//       type: "array",
//       of: [
//         { type: "block" },
//         {
//           type: "image",
//           fields: [{ type: "text", name: "alt", title: "Alt" }],
//         },
//       ],
//     },
//     {
//       name: "tags",
//       title: "Tags",
//       type: "array",
//       of: [{ type: "reference", to: [{ type: "tag" }] }],
//     },
//   ],
// };

import { defineField, defineType } from "sanity"

export default defineType({
  name: "post",
  title: "Artículo",
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
      name: "excerpt",
      title: "Extracto",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
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
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categorías",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "destinations",
      title: "Destinos",
      type: "array",
      of: [{ type: "reference", to: { type: "destination" } }],
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de Publicación",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Contenido",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Texto Alternativo",
            },
            {
              name: "caption",
              type: "string",
              title: "Pie de Foto",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "featured",
      title: "Destacado",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "readTime",
      title: "Tiempo de Lectura (minutos)",
      type: "number",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Título",
          type: "string",
          validation: (Rule) => Rule.max(60),
        },
        {
          name: "metaDescription",
          title: "Meta Descripción",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.max(160),
        },
        {
          name: "keywords",
          title: "Palabras Clave",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author",
      media: "mainImage",
    },
  },
})
