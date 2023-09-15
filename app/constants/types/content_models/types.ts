export type IndexContent = {
  homePageData: { title: string; metaDescription: string; headerTitle: string }
  categories: []
}
export type BlogPostContent = {
  blogPost: {
    fields: {
      title: string
      slug: string
      author: string
      thumbnail: string
      summary: string
      body: { content: [] }
    }
  }
}

export type BlogIndexContent = {
  blogPosts: {
    fields: {
      title: string
      slug: string
      author: string
      thumbnail: string
      summary: string
      body: { content: [] }
    }
  }
}
