import { defineType } from "sanity"
import defaultFields from "./defaultFields"

export default defineType({
  name: "programadores",
  title: "Programadores",
  type: "document",
  fields: defaultFields,
})
