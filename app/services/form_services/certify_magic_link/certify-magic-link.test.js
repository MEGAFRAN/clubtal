import certifyMagicLink from "./certify-magic-link"
import { CERTIFY_MAGIC_LINK } from "../../api/variables"

describe("certifyMagicLink", () => {
  const mockToken = "mockToken"

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("should call fetch with the correct arguments", async () => {
    const mockFetch = jest.fn(() => Promise.resolve({}))
    global.fetch = mockFetch

    await certifyMagicLink(mockToken)

    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(mockFetch).toHaveBeenCalledWith(`${CERTIFY_MAGIC_LINK}?token=${mockToken}`)
  })

  it("should return the response from fetch if the request is successful", async () => {
    const mockResponse = { ok: true }
    const mockFetch = jest.fn(() => Promise.resolve(mockResponse))
    global.fetch = mockFetch

    const result = await certifyMagicLink(mockToken)

    expect(result).toEqual(mockResponse)
  })

  it("should throw an error if the fetch fails", async () => {
    const mockError = new Error("Invalid error object - missing data property")
    const mockFetch = jest.fn(() => Promise.reject(mockError))
    global.fetch = mockFetch

    await expect(certifyMagicLink(mockToken)).rejects.toThrowError(mockError)
  })
})
