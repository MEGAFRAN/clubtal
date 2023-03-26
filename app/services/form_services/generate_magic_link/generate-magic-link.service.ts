import { GENERATE_MAGIC_LINK } from "../../api/variables"

export async function generateMagicLink(email: string): Promise<Response> {
  const response = await fetch(GENERATE_MAGIC_LINK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
  return response
}
