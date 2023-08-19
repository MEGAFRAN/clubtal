import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

function PostBody(content: any) {
  return <main>{documentToReactComponents(content)}</main>
}

export default PostBody
