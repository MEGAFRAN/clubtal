import { ApiCore } from "./core";


const serviceObject = 
{
  getAllData: (serviceObject:any) => serviceObject.getAll().then( (res:any) => res.data ),
  getSingleData: (serviceObject:any, id:ApiCore) => serviceObject.getSingle(id).then( (res:any) => res.data ),
  post: (serviceObject:any, model:any) => serviceObject.post(model).then( (res:any) => res.data ),
  put: (serviceObject:any, id: string, model:any) => serviceObject.put(id, model).then( (res:any) => res.data ),
  patch: (serviceObject:any, model:ApiCore) => serviceObject.patch(model).then( (res:any) => res.data ),
  delete: (serviceObject:any, id:any) => serviceObject.remove(id).then( (res:any) => res.data )
}

export default serviceObject