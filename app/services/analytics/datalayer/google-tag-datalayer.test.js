import googleTagService from "./google-tag-datalayer.service"

describe("googleTagService", () => {
  beforeEach(() => {
    window.dataLayer = []
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe("pushDataLayer", () => {
    it("should push data to the window dataLayer", () => {
      const event = "testEvent"
      const data = { key: "value" }

      googleTagService.pushDataLayer(event, data)

      expect(window.dataLayer).toEqual([{ event, data }])
    })
  })

  describe("validateDataLayer", () => {
    it("should call pushDataLayer with the validated data", () => {
      const event = "testEvent"
      const data = { key: "value" }
      const environment = document.location.origin
      const validatedData = { ...data, environment }

      const pushDataLayerSpy = jest.spyOn(googleTagService, "pushDataLayer")

      googleTagService.validateDataLayer(event, data)

      expect(pushDataLayerSpy).toHaveBeenCalledWith(event, validatedData)
    })

    it("should log an error when event or data is missing", () => {
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation()

      googleTagService.validateDataLayer("", {})

      expect(consoleErrorSpy).toHaveBeenCalled()
    })
  })

  describe("feedDataLayer", () => {
    it("should call validateDataLayer with the given event and data", () => {
      const event = "testEvent"
      const data = { key: "value" }

      const validateDataLayerSpy = jest.spyOn(googleTagService, "validateDataLayer")

      googleTagService.feedDataLayer(event, data)

      expect(validateDataLayerSpy).toHaveBeenCalledWith(event, data)
    })
  })
})
