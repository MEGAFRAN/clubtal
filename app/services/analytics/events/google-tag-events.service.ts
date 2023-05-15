import googleTagService from "../datalayer/google-tag-datalayer.service"

const analyticsEvent = "analytics_event"

const gtmEvents = {
  formSubmit(data: Record<string, any>, trigger = "form_submit", event = analyticsEvent): void {
    googleTagService.feedDataLayer(event, trigger, data)
  },
  openChatbot(data: Record<string, any>, trigger = "open_chatbot", event = analyticsEvent): void {
    googleTagService.feedDataLayer(event, trigger, data)
  },
  sendMessageChatbot(data: Record<string, any>, trigger = "send_message_chatbot", event = analyticsEvent): void {
    googleTagService.feedDataLayer(event, trigger, data)
  },
  sendMessageTextAnalysis(data: Record<string, any>, trigger = "send_message_text_analysis", event = analyticsEvent): void {
    googleTagService.feedDataLayer(event, trigger, data)
  },
  sendFeedbackTextAnalysis(data: Record<string, any>, trigger = "send_feedback_text_analysis", event = analyticsEvent): void {
    googleTagService.feedDataLayer(event, trigger, data)
  }
}
export default gtmEvents

