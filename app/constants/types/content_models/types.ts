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
}
