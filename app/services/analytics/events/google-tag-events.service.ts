import googleTagService from "../datalayer/google-tag-datalayer.service"

const analyticsEvent = "analytics_event"

const gtmEvents = {
  formSubmit(data: Record<string, any>, trigger = "form_submit", event = analyticsEvent): void {
    googleTagService.feedDataLayer(event, trigger, data)
  },
}
export default gtmEvents
