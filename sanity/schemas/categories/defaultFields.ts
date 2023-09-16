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
    name: "services",
    title: "Services",
    type: "array",
    of: [{ type: "string" }],
  }),
  defineField({
    name: "schedule",
    title: "Schedule",
    type: "object",
    fields: [
      { name: "lunes", type: "string", title: "Lunes" },
      { name: "martes", type: "string", title: "Martes" },
      { name: "miercoles", type: "string", title: "Miercoles" },
      { name: "jueves", type: "string", title: "Jueves" },
      { name: "viernes", type: "string", title: "Viernes" },
      { name: "sabado", type: "string", title: "Sabado" },
      { name: "domingo", type: "string", title: "Domingo" },
    ],
  }),
  defineField({
    name: "contact",
    title: "Contact information",
    type: "object",
    fields: [
      { name: "phone", type: "number", title: "Phone" },
      { name: "whatsapp", type: "number", title: "Whatsapp" },
      { name: "website", type: "string", title: "Website" },
      { name: "email", type: "string", title: "Email" },
    ],
  }),
  defineField({
    name: "socialMedia",
    title: "Social Media",
    type: "object",
    fields: [
      { name: "linkedin", type: "string", title: "Linkedin" },
      { name: "instagram", type: "string", title: "Instagram" },
      { name: "twitter", type: "string", title: "Twitter" },
      { name: "facebook", type: "string", title: "Facebook" },
      { name: "youtube", type: "string", title: "Youtube" },
      { name: "tiktok", type: "string", title: "Tiktok" },
    ],
  }),
  defineField({
    name: "category",
    title: "Category",
    type: "reference",
    to: { type: "category" },
  }),
]

export default defaultFields
