import { AxiosResponse } from "axios";

export type DataFunction = (apiUrl:string, endpoint:string) => AxiosResponse<any, any>;