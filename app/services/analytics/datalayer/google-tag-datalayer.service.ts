declare global {
  interface Window {
    dataLayer: Array<any>
  }
}

const googleTagService = {
  pushDataLayer(event: string, trigger: string, data: Record<string, any>): void {
    if (typeof window !== "undefined" && window.dataLayer) {
      try {
        window.dataLayer.push({ event, trigger, data })
      } catch (error) {
        console.error(error)
      }
    }
  },

  validateDataLayer(
    event: string,
    trigger: string,
    data: object,
    environment: string = document.location.origin,
  ): void {
    if (event && data) {
      const validatedData = { ...data, environment }
      this.pushDataLayer(event, trigger, validatedData)
    } else {
      console.error(
        "Please verify the feedDataLayer function invocation, with the related event you are triggering",
      )
    }
  },

  feedDataLayer(event: string, trigger: string, data: object): void {
    this.validateDataLayer(event, trigger, data)
  },
}

export default googleTagService
