function PostBody({ content }: { content: string }) {
  return <main dangerouslySetInnerHTML={{ __html: content }}></main>
}

export default PostBody
