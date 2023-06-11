import addUser from "./add-user.service"
import { ADD_USER } from "../../api/variables"

describe("add user", () => {
  const email = "email@example.com"

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("should call fetch with the correct arguments", async () => {
    const mockFetch = jest.fn(() => Promise.resolve({}))
    global.fetch = mockFetch

    await addUser(email)

    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(mockFetch).toHaveBeenCalledWith(ADD_USER, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
  })

  it("should return the response from fetch if the request is successful", async () => {
    const mockResponse = { ok: true }
    const mockFetch = jest.fn(() => Promise.resolve(mockResponse))
    global.fetch = mockFetch

    const result = await addUser(email)

    expect(result).toEqual(mockResponse)
  })

  it("should throw an error if the fetch fails", async () => {
    const mockError = new Error("Invalid error object - missing data property")
    const mockFetch = jest.fn(() => Promise.reject(mockError))
    global.fetch = mockFetch

    await expect(addUser(email)).rejects.toThrowError(mockError)
  })
})
