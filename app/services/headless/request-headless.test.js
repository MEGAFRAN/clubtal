import requestHeadless from "./request-headless.service"
import { REQUEST_WORDPRESS_GRAPH_QL } from "../api/variables"

describe("requestHeadless", () => {
  const query = `
  query PreviewPost($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      databaseId
      slug
      status
    }
  }`
  const variables = { id: 455, idType: "number" }

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("should call fetch with the correct arguments", async () => {
    const mockFetch = jest.fn(() => Promise.resolve({}))
    global.fetch = mockFetch

    await requestHeadless(query, variables)

    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(mockFetch).toHaveBeenCalledWith(REQUEST_WORDPRESS_GRAPH_QL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    })
  })

  it("should return the response from fetch if the request is successful", async () => {
    const mockResponse = { ok: true }
    const mockFetch = jest.fn(() => Promise.resolve(mockResponse))
    global.fetch = mockFetch

    const result = await requestHeadless(query, variables)

    expect(result).toEqual(mockResponse)
  })

  it("should throw an error if the fetch fails", async () => {
    const mockError = new Error("Invalid error object - missing data property")
    const mockFetch = jest.fn(() => Promise.reject(mockError))
    global.fetch = mockFetch

    await expect(requestHeadless(query, variables)).rejects.toThrowError(mockError)
  })
})
