export interface ApiCoreInterface {
    getAll: (() => Promise<any>) | undefined,
    getSingle: ((id: any) => Promise<any>) | undefined,
    post: ((model: any) => Promise<any>) | undefined,
    put: ((model: any) => Promise<any>) | undefined,
    patch: ((model: any) => Promise<any>) | undefined,
    remove: ((id: any) => Promise<any>) | undefined,
    apiUrl: string,
    endpoint: string

}