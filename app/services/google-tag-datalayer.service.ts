declare let dataLayer: any

export const _googleTagService = {
  pushDataLayer(event: string, data: {}): void {
    try {
      dataLayer.push({ event, data })
    } catch (error) {
      console.log(error)
    }
  },

  validateDataLayer(
    event: string,
    data: {},
    environment: string = document.location.origin,
  ): void {
    if (event && data) {
      let validatedData = { ...data, environment }
      this.pushDataLayer(event, validatedData)
    } else {
      console.error(
        "Please verify the feedDataLayer function invocation, with the related event you are triggering",
      )
    }
  },

  feedDataLayer(event: string, data: {}): void {
    this.validateDataLayer(event, data)
  },
}
