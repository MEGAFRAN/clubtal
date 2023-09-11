import { defineType } from "sanity"
import defaultFields from "./defaultFields"

export default defineType({
  name: "contadores",
  title: "Contadores",
  type: "document",
  fields: defaultFields,
})
