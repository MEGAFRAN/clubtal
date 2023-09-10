import { type SchemaTypeDefinition } from "sanity"

import blockContent from "./schemas/blockContent"
import category from "./schemas/category"
import post from "./schemas/post"
import author from "./schemas/author"
import abogados from "./schemas/categories/abogados"
import medicos from "./schemas/categories/medicos"
import contadores from "./schemas/categories/contadores"

const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, blockContent, category, abogados, medicos, contadores],
}

export default schema