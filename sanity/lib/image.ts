import createImageUrlBuilder from "@sanity/image-url"
import type { Image } from "sanity"

const imageBuilder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
})

const urlForImage = (source: Image) => imageBuilder?.image(source).auto("format").fit("max")

export default urlForImage
