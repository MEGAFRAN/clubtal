import { API_TEST } from "../api/variables"
import { ApiCore } from "../utils/core"

export const testService = new ApiCore({
  getAll: true,
  getSingle: false,
  post: false,
  put: false,
  patch: false,
  remove: false,
  apiUrl: API_TEST.url || "",
  endpoint: API_TEST.endpoint || "",
})
