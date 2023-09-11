import { defineType } from "sanity"
import defaultFields from "./defaultFields"

export default defineType({
  name: "abogados",
  title: "Abogados",
  type: "document",
  fields: defaultFields,
})
