import gtmEvents from "./google-tag-events.service"
import googleTagService from "../datalayer/google-tag-datalayer.service"

jest.mock("../datalayer/google-tag-datalayer.service")

describe("gtmEvents", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe("formSubmit event", () => {
    it("should call feedDataLayer with the given data and default event", () => {
      const data = { key: "value" }
      const defaultEvent = "analytics_event"
      const trigger = "form_submit"

      gtmEvents.formSubmit(data)

      expect(googleTagService.feedDataLayer).toHaveBeenCalledWith(defaultEvent, trigger, data)
    })
  })

  describe("send_message_text_analysis event", () => {
    it("should call feedDataLayer with the given data and default event", () => {
      const data = { key: "value" }
      const defaultEvent = "analytics_event"
      const trigger = "send_message_text_analysis"

      gtmEvents.sendMessageTextAnalysis(data)

      expect(googleTagService.feedDataLayer).toHaveBeenCalledWith(defaultEvent, trigger, data)
    })
  })

  describe("send_feedback_text_analysis event", () => {
    it("should call feedDataLayer with the given data and default event", () => {
      const data = { key: "value" }
      const defaultEvent = "analytics_event"
      const trigger = "send_feedback_text_analysis"

      gtmEvents.sendFeedbackTextAnalysis(data)

      expect(googleTagService.feedDataLayer).toHaveBeenCalledWith(defaultEvent, trigger, data)
    })
  })
})
