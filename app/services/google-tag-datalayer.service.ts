declare let dataLayer: any

const googleTagService = {
  pushDataLayer(event: string, data: object): void {
    try {
      dataLayer.push({ event, data })
    } catch (error) {
      console.log(error)
    }
  },

  validateDataLayer(
    event: string,
    data: object,
    environment: string = document.location.origin,
  ): void {
    if (event && data) {
      const validatedData = { ...data, environment }
      this.pushDataLayer(event, validatedData)
    } else {
      console.error(
        "Please verify the feedDataLayer function invocation, with the related event you are triggering",
      )
    }
  },

  feedDataLayer(event: string, data: object): void {
    this.validateDataLayer(event, data)
  },
}

export default googleTagService
