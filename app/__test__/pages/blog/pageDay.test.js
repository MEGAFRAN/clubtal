import "@testing-library/jest-dom"
import fs from "fs/promises"
import { useRouter } from "next/router"
import { render, screen } from "@testing-library/react"
import PageDay, {
  getStaticPaths,
  getStaticProps,
} from "../../../../pages/blog/[year]/[month]/[day]/index"
import mockPost1 from "../../../constants/mocks/mockListPost1.json"
import mockPost2 from "../../../constants/mocks/mockListPost2.json"

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))
jest.mock("fs/promises")
describe("dayPage", () => {
  test("Should render component", () => {
    const mockRouter = {
      pathname: "blog/2023/03/21",
      query: { year: "2023", month: "03", day: "21" },
    }
    useRouter.mockImplementation(() => mockRouter)
    render(<PageDay />)
  })
  test("Should display navbar", () => {
    const mockRouter = {
      pathname: "blog/2023/03/21",
      query: { year: "2023", month: "03", day: "21" },
    }
    useRouter.mockImplementation(() => mockRouter)
    render(<PageDay />)
    const navbar = screen.getByRole("navigation")
    expect(navbar).toBeInTheDocument()
  })
  test("Should display header with title day that correspond", () => {
    const mockRouter = {
      pathname: "blog/2023/03/21",
      query: { year: "2023", month: "03", day: "1" },
    }
    const mockTitle = "Día: 1 de marzo de 2023"
    useRouter.mockImplementation(() => mockRouter)
    render(<PageDay />)
    const title = screen.getByRole("heading", { name: mockTitle })
    expect(title).toBeInTheDocument()
  })
  test("Should display navigation header and elements like blog, year, month and day with its corresponding attribute for navigation of each", () => {
    const mockRouter = {
      pathname: "blog/2023/03/21",
      query: { year: "2023", month: "03", day: "1" },
    }
    useRouter.mockImplementation(() => mockRouter)
    render(<PageDay />)
    const expectNameElementBlog = "Blog"
    const expectUrlElementBlog = "/blog"
    const expectNameElementYear = "2023"
    const expectUrlElementYear = "/blog/2023"
    const expectNameElementMonth = "03"
    const expectUrlElementMonth = "/blog/2023/03"
    const expectNameElementDay = "1"
    const elementBlog = screen.getByRole("link", { name: expectNameElementBlog })
    const elementYear = screen.getByRole("link", { name: expectNameElementYear })
    const elementMonth = screen.getByRole("link", { name: expectNameElementMonth })
    const elementDay = screen.getByText(expectNameElementDay)
    expect(elementBlog).toHaveAttribute("href", expectUrlElementBlog)
    expect(elementYear).toHaveAttribute("href", expectUrlElementYear)
    expect(elementMonth).toHaveAttribute("href", expectUrlElementMonth)
    expect(elementDay).toBeInTheDocument()
  })
})

describe("getStaticPaths", () => {
  test("Should return paths", async () => {
    const mockFiles = ["2024-01-23.json", "2023-02-24.json", "2025-02-24.json"]
    jest.spyOn(fs, "readdir").mockResolvedValue(mockFiles)
    const expectedPaths = [
      { params: { year: "2024", month: "01", day: "23" } },
      { params: { year: "2023", month: "02", day: "24" } },
      { params: { year: "2025", month: "02", day: "24" } },
    ]
    const paths = await getStaticPaths()
    expect(paths).toEqual({ paths: expectedPaths, fallback: false })
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
  test("Should return listProps that correspond params", async () => {
    const mockFiles = ["2023-03-04.json", "2023-03-21.json", "2024-04-01.json"]
    const params = { year: "2023", month: "03", day: "21" }
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
    jest.spyOn(fs, "readFile").mockResolvedValueOnce(JSON.stringify(mockPost2))
    const props = await getStaticProps({ params })
    expect(props).toEqual(expectedProps)
  })
  test("Should return empty array when params that not correspond to files", async () => {
    const mockFiles = ["2025-03-01.json", "2026-04-12.json", "2030-12-12.json"]
    const params = { year: "2022", month: "01", day: "30" }
    const expectProps = { props: { listPost: [] } }
    jest.spyOn(fs, "readdir").mockResolvedValue(mockFiles)
    const props = await getStaticProps({ params })
    expect(props).toEqual(expectProps)
  })
})
