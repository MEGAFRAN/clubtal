import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import fs from "fs/promises"
import { useRouter } from "next/router"
import PageTitle, {
  getStaticPaths,
  getStaticProps,
} from "../../../../pages/blog/[year]/[month]/[day]/[title]/index"
import mockPost1 from "../../../constants/mocks/mockListPost1.json"
import mockPost2 from "../../../constants/mocks/mockListPost2.json"

jest.mock("fs/promises")
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))
describe("<PageTitle />", () => {
  test("Should render component", () => {
    const mockRouter = {
      pathname: "/blog/2021/01/01/test-title",
      query: { year: "2021", month: "01", day: "01", title: "test-title" },
    }
    useRouter.mockImplementation(() => mockRouter)
    render(<PageTitle />)
  })
})

describe("getStaticPaths", () => {
  test("Should return paths", async () => {
    const mockFiles = ["2023-03-04.json", "2023-03-21.json"]
    const expectPaths = [
      { params: { year: "2023", month: "03", day: "04", title: "first-post-1" } },
      { params: { year: "2023", month: "03", day: "21", title: "first-post-3" } },
    ]
    jest.spyOn(fs, "readdir").mockResolvedValue(mockFiles)
    jest.spyOn(fs, "readFile").mockResolvedValueOnce(JSON.stringify(mockPost1))
    jest.spyOn(fs, "readFile").mockResolvedValueOnce(JSON.stringify(mockPost2))
    const result = await getStaticPaths()
    expect(result).toEqual({
      paths: expectPaths,
      fallback: false,
    })
  })
  test("Should return paths empty array when there aren't any files", async () => {
    const mockFiles = []
    jest.spyOn(fs, "readdir").mockResolvedValue(mockFiles)
    const expectedPaths = []
    const paths = await getStaticPaths()
    expect(paths).toEqual({ paths: expectedPaths, fallback: false })
  })
})

describe("getStaticProps", () => {
  test("Should return lisPost that correspond params", async () => {
    const mockFiles = ["2023-03-04.json", "2023-03-21.json"]
    const params = { year: "2023", month: "03", day: "21", title: "first-post-3" }
    const expectedProps = {
      props: {
        post: {
          title: "First post 3",
          id: 20230321,
          nameAuthor: "Clubtal",
          data: "2023-03-21",
          readingTime: "5 min read",
          category: "Performance",
          contentPost: [
            {
              titleContent: "Title content 3",
              descriptionContent:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid. Exercitationem, distinctio! Blanditiis, quas vel. Expedita eius consequatur fuga facere voluptas architecto non cumque autem possimus, unde aliquid voluptatibus. Inventore!",
            },
            {
              titleContent: "Title content 2",
              descriptionContent:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid. Exercitationem, distinctio! Blanditiis, quas vel. Expedita eius consequatur fuga facere voluptas architecto non cumque autem possimus, unde aliquid voluptatibus. Inventore! 02",
            },
          ],
        },
      },
    }
    jest.spyOn(fs, "readdir").mockResolvedValue(mockFiles)
    jest.spyOn(fs, "readFile").mockResolvedValueOnce(JSON.stringify(mockPost1))
    jest.spyOn(fs, "readFile").mockResolvedValueOnce(JSON.stringify(mockPost2))
    const props = await getStaticProps({ params })
    expect(props).toEqual(expectedProps)
  })
  test("Should return empty array when params that not correspond to files", async () => {
    const mockFiles = ["2023-03-04.json", "2023-03-21.json"]
    const params = { category: "develop" }
    const expectProps = { props: { post: [] } }
    jest.spyOn(fs, "readdir").mockResolvedValue(mockFiles)
    jest.spyOn(fs, "readFile").mockResolvedValueOnce(JSON.stringify(mockPost1))
    jest.spyOn(fs, "readFile").mockResolvedValueOnce(JSON.stringify(mockPost2))
    const props = await getStaticProps({ params })
    expect(props).toEqual(expectProps)
  })
})
