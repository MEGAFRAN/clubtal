export async function handleResponse(response:any)
{
    if (response) return await response
    
    return 
}
  
export async function handleError(error:any)
{
    if (error.data) return await error.data
   
    return await error
}