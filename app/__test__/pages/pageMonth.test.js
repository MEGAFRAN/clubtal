import { render, screen } from "@testing-library/react"
import { useRouter } from "next/router"
import fs from "fs/promises"
import MonthPage, { getStaticPaths, getStaticProps } from "../../../pages/blog/[year]/[month]/index"
import "@testing-library/jest-dom"
import mockListPost1 from "../../constants/mocks/mockListPost1.json"
import mockListPost2 from "../../constants/mocks/mockListPost2.json"

jest.mock("fs")
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))
describe("<MonthPage/>", () => {
  test("Should render monthPage", () => {
    const mockRouter = { pathname: "/blog/2023/03", query: { year: "2023 ", month: "03" } }
    useRouter.mockImplementation(() => mockRouter)
    render(<MonthPage />)
  })
  test("Should display navbar", () => {
    const mockRouter = { pathname: "/blog/2023/03", query: { year: "2023 ", month: "03" } }
    useRouter.mockImplementation(() => mockRouter)
    render(<MonthPage />)
    const navbar = screen.getByRole("navigation")
    expect(navbar).toBeInTheDocument()
  })
  test("Should display header with tile month that correspond", () => {
    const mockRouter = { pathname: "/blog/2023/03", query: { year: "2023 ", month: "03" } }
    const mockTitle = "Mes: Marzo 2023"
    useRouter.mockImplementation(() => mockRouter)
    render(<MonthPage />)
    const title = screen.getByRole("heading", { name: mockTitle })
    expect(title).toBeInTheDocument()
  })
  test("Should display navigation header and elements like blog, year and month with its corresponding attribute for navigation of each", () => {
    const mockRouter = { pathname: "/blog/2023/03", query: { year: "2023", month: "03" } }
    const mockElementBlog = "Blog"
    const mockYear = "2023"
    const mockMonth = "03"
    useRouter.mockImplementation(() => mockRouter)
    render(<MonthPage />)
    const elementBlog = screen.getByText(mockElementBlog)
    const elementYear = screen.getByText(mockYear)
    const elementMonth = screen.getByText(mockMonth)
    expect(elementBlog).toHaveAttribute("href", "/blog")
    expect(elementYear).toHaveAttribute("href", "/blog/2023")
    expect(elementMonth).toBeInTheDocument()
  })
})

describe("getStaticPaths", () => {
  test("Should return paths", async () => {
    const mockFiles = ["2024-01-23.json", "2023-02-24.json", "2025-02-24.json"]
    jest.spyOn(fs, "readdir").mockResolvedValue(mockFiles)
    const expectedPaths = [
      { params: { year: "2024", month: "01" } },
      { params: { year: "2023", month: "02" } },
      { params: { year: "2025", month: "02" } },
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
    const params = { year: "2023", month: "03" }
    const expectedProps = {
      props: {
        listPost: [
          {
            title: "First post 1",
            id: 20230321,
            nameAuthor: "Clubtal",
            data: "2023-03-04",
            readingTime: "5 min read",
            category: "IA",
            contentPost: [
              {
                titleContent: "Title content 1",
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
          {
            title: "First post 3",
            id: 20230321,
            nameAuthor: "Clubtal",
            data: "2023-03-21",
            readingTime: "5 min read",
            category: "IA",
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
    jest.spyOn(fs, "readFile").mockResolvedValueOnce(JSON.stringify(mockListPost1))
    jest.spyOn(fs, "readFile").mockResolvedValueOnce(JSON.stringify(mockListPost2))
    const props = await getStaticProps({ params })
    expect(props).toEqual(expectedProps)
  })
  test("Should return empty array when params that not correspond to files", async () => {
    const mockFiles = ["2025-03-01.json", "2026-04-12.json", "2030-12-12.json"]
    const params = { year: "2022", month: "01" }
    const expectProps = { props: { listPost: [] } }
    jest.spyOn(fs, "readdir").mockResolvedValue(mockFiles)
    const props = await getStaticProps({ params })
    expect(props).toEqual(expectProps)
  })
})
