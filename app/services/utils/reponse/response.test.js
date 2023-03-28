import { handleResponse, handleError } from "./response"

describe("handleResponse", () => {
  test("throws an error if the response is null", async () => {
    await expect(handleResponse(null)).rejects.toThrow("Invalid response object")
  })

  test("throws an error if the response is undefined", async () => {
    await expect(handleResponse(undefined)).rejects.toThrow("Invalid response object")
  })
})

describe("handleError", () => {
  test("returns the error data if it exists", async () => {
    const error = { data: "Some error data" }
    const result = await handleError(error)
    expect(result).toBe(error.data)
  })

  test("throws an error if the error data is missing", async () => {
    const error = { message: "Some error message" }
    await expect(handleError(error)).rejects.toThrow("Invalid error object - missing data property")
  })
})
