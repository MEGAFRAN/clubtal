export async function handleResponse(response: Response | null | undefined): Promise<Response> {
  if (!response) {
    throw new Error("Invalid response object")
  }
  return response
}

export async function handleError(error: any): Promise<any> {
  if (error.data) {
    return error.data
  } else {
    throw new Error("Invalid error object - missing data property")
  }
}
