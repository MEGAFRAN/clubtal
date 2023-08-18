import { createClient } from "contentful"

async function getContentfulContent(contentType: string, slug?: string) {
  const client = createClient({
    space: "nozgp99vznh9",
    accessToken: "iIQdZOSPfioIIWWbaVSZxmej6BGMNAQnLtnpRVeyOvE",
  })

  const entries = slug
    ? { content_type: contentType, "fields.slug": slug }
    : { content_type: contentType }

  return client.getEntries(entries)
}

export default getContentfulContent
