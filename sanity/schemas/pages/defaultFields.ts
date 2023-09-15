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
    name: "description",
    title: "Description",
    type: "text",
  }),
  defineField({
    name: "metaDescription",
    title: "MetaDescription",
    type: "text",
  }),
  defineField({
    name: "headerTitle",
    title: "HeaderTitle",
    type: "string",
  }),
]

export default defaultFields
