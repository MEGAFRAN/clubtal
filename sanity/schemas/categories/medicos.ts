import { defineType } from "sanity"
import defaultFields from "./defaultFields"

export default defineType({
  name: "medicos",
  title: "Medicos",
  type: "document",
  fields: defaultFields,
})
