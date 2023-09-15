import { defineType } from "sanity"
import defaultFields from "./defaultFields"

export default defineType({
  name: "pages",
  title: "Pages",
  type: "document",
  fields: defaultFields,
})
