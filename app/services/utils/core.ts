import {apiProvider} from './provider';

export class ApiCore 
{
  getAll: (() => Promise<any>) | undefined
  getSingle: ((id: any) => Promise<any>) | undefined
  post: ((model: any) => Promise<any>) | undefined
  put: ((model: any) => Promise<any>) | undefined
  patch: ((model: any) => Promise<any>) | undefined
  remove: ((id: any) => Promise<any>) | undefined
  
  constructor( {getAll, getSingle, post, put, patch, remove, apiUrl, endpoint}: any) 
  {
    
    if (getAll) 
    {
      this.getAll = () => 
      {
        return apiProvider.getAll(apiUrl, endpoint)
      }
    }

    if (getSingle) 
    {
      this.getSingle = (id) => 
      {
        return apiProvider.getSingle(apiUrl, endpoint, id)
      }
    }

    if (post) 
    {
      this.post = (model) => 
      {
        return apiProvider.post(apiUrl, endpoint, model)
      }
    }

    if (put) 
    {
      this.put = (model) => 
      {
        return apiProvider.put(apiUrl, endpoint, model)
      }
    }

    if (patch) 
    {
      this.patch = (model) => 
      {
        return apiProvider.patch(apiUrl, endpoint, model)
      }
    }

    if (remove) 
    {
      this.remove = (id) => 
      {
        return apiProvider.remove(apiUrl, endpoint, id)
      }
    }
    
  }

}