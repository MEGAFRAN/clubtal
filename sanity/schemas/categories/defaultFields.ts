import { defineField } from "sanity"

const defaultFields = [
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
    name: "specialities",
    title: "Specialities",
    type: "array",
    of: [{ type: "string" }],
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
]

export default defaultFields
