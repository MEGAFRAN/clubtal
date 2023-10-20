import { createClient } from "next-sanity"

export const getClient = async (clientConfig: {
  projectId: string
  dataset: string
  token: string
  apiVersion: string
}) =>
  createClient({
    ...clientConfig,
    useCdn: false,
    perspective: "published",
  })

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2022-11-15",
  useCdn: false,
  perspective: "published",
})
