import { API } from "../api/variables"
import { ApiCore } from "../utils/core"



export const testService = new ApiCore({
  getAll: true,
  getSingle: false,
  post: false,
  put: false,
  patch: false,
  delete: false,
  apiUrl: API.test.url,
  endpoint: API.test.endpoint
})