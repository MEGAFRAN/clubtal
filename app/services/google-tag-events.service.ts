import { _googleTagService } from "./google-tag-datalayer.service"

export const _gtmEvents = {
  formSubmit(data: {}, event: string = "form_submit"): void {
    _googleTagService.feedDataLayer(event, data)
  },
}
