import axios, { AxiosRequestConfig } from 'axios'; 
 
const getAll = async (apiUrl:string, endpoint:string) => 
{ 
  try {let response = await axios.get(`${apiUrl}/${endpoint}`); return response} 
  catch (error) {console.error(error)}
}

const getSingle = async (apiUrl:string, endpoint:string, id:AxiosRequestConfig<any>) => 
{ 
  try {let response = await axios.get(`${apiUrl}/${endpoint}/${id}`); return response} 
  catch (error) {console.error(error)}
}

const post = async (apiUrl:string, endpoint:string, model:object) => 
{ 
  try {let response = await axios.post(`${apiUrl}/${endpoint}`, model); return response} 
  catch (error) {console.error(error)}
}

const put = async (apiUrl:string, endpoint:string, model:object) => 
{ 
  try {let response = await axios.put(`${apiUrl}/${endpoint}`, model); return response} 
  catch (error) {console.error(error)}
}

const patch = async (apiUrl:string, endpoint:string, model:object) => 
{ 
  try {let response = await axios.patch(`${apiUrl}/${endpoint}`, model); return response} 
  catch (error) {console.error(error)}
}

const remove = async (apiUrl:string, endpoint:string, id:any) => 
{ 
  try {let response = await axios.delete(`${apiUrl}/${endpoint}`, id);  return response} 
  catch (error) {console.error(error)}
}

export const apiProvider = 
{ 
  getAll, 
  getSingle, 
  post, 
  put, 
  patch, 
  remove, 
}