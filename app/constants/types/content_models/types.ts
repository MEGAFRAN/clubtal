export type IndexContent = {
  data: {
    metadata: {
      title: string
      description: string
      locale: string
      url: string
    }
    content: {
      header: {
        title: string
        subTitle: string
        callToAction: string
      }
      form: {
        title: string
        placeholder: string
        callToAction: string
        invalidMessage: string
      }
    }
  }
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
