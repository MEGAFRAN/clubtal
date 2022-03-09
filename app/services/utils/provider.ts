import axios, { AxiosRequestConfig } from 'axios'; 
import { handleError, handleResponse } from './response';
 
const getAll = async (apiUrl:string, endpoint:string) => 
{ 
  return await axios
                .get(`${apiUrl}/${endpoint}`)
                .then(handleResponse)
                .catch(handleError)
}

const getSingle = async (apiUrl:string, endpoint:string, id:AxiosRequestConfig<any>) => 
{ 
  return await axios
                .get(`${apiUrl}/${endpoint}/${id}`)
                .then(handleResponse)
                .catch(handleError)
}

const post = async (apiUrl:string, endpoint:string, model:object) => 
{ 
  const headers = {'Content-Type': 'application/json'}

  return await axios
                .post(`${apiUrl}/${endpoint}`, model, {headers: headers})
                .then(handleResponse)
                .catch(handleError)
}

const put = async (apiUrl:string, endpoint:string, id: string, model:object) => 
{ 
  const headers = {'Content-Type': 'application/json'}

  return await axios
                .put(`${apiUrl}/${endpoint}/${id}`, model, {headers: headers})
                .then(handleResponse)
                .catch(handleError)
}

const patch = async (apiUrl:string, endpoint:string, model:object) => 
{ 
  return await axios
                .patch(`${apiUrl}/${endpoint}`, model)
                .then(handleResponse)
                .catch(handleError)
}

const remove = async (apiUrl:string, endpoint:string, id:any) => 
{ 
  return await axios
              .delete(`${apiUrl}/${endpoint}/${id}`)
              .then(handleResponse)
              .catch(handleError)
}

export const apiProvider = 
{ 
  getAll, 
  getSingle, 
  post, 
  put, 
  patch, 
  remove 
}