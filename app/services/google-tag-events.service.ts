import googleTagService from "./google-tag-datalayer.service"

const gtmEvents = {
  formSubmit(data: object, event = "form_submit"): void {
    googleTagService.feedDataLayer(event, data)
  },
}
export default gtmEvents
