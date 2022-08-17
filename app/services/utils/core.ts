import { AxiosRequestConfig } from "axios"
import { ApiCoreConstructorInterface } from "../../constants/types/services/interfaces"
import { apiProvider } from "./provider"

export class ApiCore {
  getAll
  getSingle
  post
  put
  patch
  remove

  constructor({
    getAll,
    getSingle,
    post,
    put,
    patch,
    remove,
    apiUrl,
    endpoint,
  }: ApiCoreConstructorInterface) {
    if (getAll) this.getAll = () => apiProvider.getAll(apiUrl, endpoint)

    if (getSingle)
      this.getSingle = (id: AxiosRequestConfig<any>) => apiProvider.getSingle(apiUrl, endpoint, id)

    if (post) this.post = (model: object) => apiProvider.post(apiUrl, endpoint, model)

    if (put) this.put = (id: string, model: object) => apiProvider.put(apiUrl, endpoint, id, model)

    if (patch) this.patch = (model: object) => apiProvider.patch(apiUrl, endpoint, model)

    if (remove)
      this.remove = (id: AxiosRequestConfig<any>) => apiProvider.remove(apiUrl, endpoint, id)
  }
}
