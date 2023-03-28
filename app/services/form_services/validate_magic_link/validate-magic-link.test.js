/* eslint-disable no-undef */
import validateMagicLink from "./validate-magic-link"
import { VALIDATE_MAGIC_LINK } from "../../api/variables"

describe("validateMagicLink", () => {
  const mockToken = "mockToken"

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("should call fetch with the correct arguments", async () => {
    const mockFetch = jest.fn(() => Promise.resolve({}))
    global.fetch = mockFetch

    await validateMagicLink(mockToken)

    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(mockFetch).toHaveBeenCalledWith(`${VALIDATE_MAGIC_LINK}?token=${mockToken}`)
  })

  it("should return the response from fetch if the request is successful", async () => {
    const mockResponse = { ok: true }
    const mockFetch = jest.fn(() => Promise.resolve(mockResponse))
    global.fetch = mockFetch

    const result = await validateMagicLink(mockToken)

    expect(result).toEqual(mockResponse)
  })

  it("should throw an error if the fetch fails", async () => {
    const mockError = new Error("Invalid error object - missing data property")
    const mockFetch = jest.fn(() => Promise.reject(mockError))
    global.fetch = mockFetch

    await expect(validateMagicLink(mockToken)).rejects.toThrowError(mockError)
  })
})
