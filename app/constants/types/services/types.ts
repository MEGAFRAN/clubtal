import { AxiosRequestConfig } from "axios";

export type DataProvider =
{
        apiUrl: string,
        endpoint: string,
        id?: AxiosRequestConfig<any>,
        model?: object
}