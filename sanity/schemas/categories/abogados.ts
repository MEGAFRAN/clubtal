import { defineField, defineType } from "sanity"

export default defineType({
  name: "abogados",
  title: "Abogados",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "number",
    }),
    defineField({
      name: "whatsapp",
      title: "Whatsapp",
      type: "number",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "string",
    }),
    defineField({
      name: "twitter",
      title: "Twitter",
      type: "string",
    }),
    defineField({
      name: "facebook",
      title: "Facebook",
      type: "string",
    }),
    defineField({
      name: "youtube",
      title: "Youtube",
      type: "string",
    }),
    defineField({
      name: "tiktok",
      title: "Tiktok",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
    }),
  ],
})
