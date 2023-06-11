import createMagicLink from "./create-magic-link.service"
import { CREATE_MAGIC_LINK } from "../../api/variables"

describe("createMagicLink", () => {
  const email = "test@example.com"
  const pageOrigin = "http://localhost"
  const pageLanguage = "es"

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("should call fetch with the correct arguments", async () => {
    const mockFetch = jest.fn(() => Promise.resolve({}))
    global.fetch = mockFetch

    await createMagicLink(email, pageOrigin, pageLanguage)

    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(mockFetch).toHaveBeenCalledWith(CREATE_MAGIC_LINK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, pageOrigin, pageLanguage }),
    })
  })

  it("should return the response from fetch if the request is successful", async () => {
    const mockResponse = { ok: true }
    const mockFetch = jest.fn(() => Promise.resolve(mockResponse))
    global.fetch = mockFetch

    const result = await createMagicLink(email, pageOrigin, pageLanguage)

    expect(result).toEqual(mockResponse)
  })

  it("should throw an error if the fetch fails", async () => {
    const mockError = new Error("Invalid error object - missing data property")
    const mockFetch = jest.fn(() => Promise.reject(mockError))
    global.fetch = mockFetch

    await expect(createMagicLink(email, pageOrigin, pageLanguage)).rejects.toThrowError(mockError)
  })
})
