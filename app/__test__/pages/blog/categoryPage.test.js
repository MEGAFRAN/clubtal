import fs from "fs/promises"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { useRouter } from "next/router"
import CategoryPage, {
  getStaticPaths,
  getStaticProps,
} from "../../../../pages/blog/category/[category]/index"
import mockPost1 from "../../../constants/mocks/mockListPost1.json"
import mockPost2 from "../../../constants/mocks/mockListPost2.json"
jest.mock("fs/promises")
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))
describe("<CategoryPage/>", () => {
  test("Should render component", () => {
    const mockRouter = { pathname: "/blog/category/IA", query: { category: "IA" } }
    useRouter.mockImplementation(() => mockRouter)
    render(<CategoryPage />)
  })
  test("Should display navbar", () => {
    const mockRouter = { pathname: "/blog/category/IA", query: { category: "IA" } }
    useRouter.mockImplementation(() => mockRouter)
    render(<CategoryPage />)
    const navbar = screen.getByRole("navigation")
    expect(navbar).toBeInTheDocument()
  })
  test("Should display header with tile category that correspond", () => {
    const mockRouter = {
      pathname: "/blog/category/Performance",
      query: { category: "Performance" },
    }
    const mockTitle = "Performance"
    useRouter.mockImplementation(() => mockRouter)
    render(<CategoryPage />)
    const title = screen.getByRole("heading", { name: mockTitle })
    expect(title).toBeInTheDocument()
  })
  test("Should display navigation with element blog with its attribute href and element of category", () => {
    const mockRouter = { pathname: "/blog/category/IA", query: { category: "IA" } }
    const expectRouteElementBlog = "/blog"
    const expectCategory = "IA"
    useRouter.mockImplementation(() => mockRouter)
    render(<CategoryPage />)
    const elementBlog = screen.getByRole("link", { name: "Blog" })
    const elementCategory = screen.getByRole("paragraph")
    expect(elementBlog).toBeInTheDocument()
    expect(elementBlog).toHaveAttribute("href", expectRouteElementBlog)
    expect(elementCategory).toHaveTextContent(expectCategory)
  })
})

describe("getStaticPaths", () => {
  test("Should return paths", async () => {
    const mockFiles = ["2023-03-04.json", "2023-03-21.json"]
    const expectPaths = [{ params: { category: "ia" } }, { params: { category: "performance" } }]
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
    const params = { category: "performance" }
    const expectedProps = {
      props: {
        listPost: [
          {
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
        ],
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
    const expectProps = { props: { listPost: [] } }
    jest.spyOn(fs, "readdir").mockResolvedValue(mockFiles)
    jest.spyOn(fs, "readFile").mockResolvedValueOnce(JSON.stringify(mockPost1))
    jest.spyOn(fs, "readFile").mockResolvedValueOnce(JSON.stringify(mockPost2))
    const props = await getStaticProps({ params })
    expect(props).toEqual(expectProps)
  })
})
