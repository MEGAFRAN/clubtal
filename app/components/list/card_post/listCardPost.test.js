import "@testing-library/jest-dom"
import { useRouter } from "next/router"
import { i18n, useTranslation } from "next-i18next"
import { cleanup, render } from "@testing-library/react"
import ListCardPost from "./ListCardPost"
import mockResponsePageYear from "../../../constants/mocks/mockPostPage"
import "@testing-library/jest-dom/extend-expect"
import common from "../../../../public/locales/en/common.json"

jest.mock("next-i18next", () => ({
  useTranslation: jest.fn(),
}))
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))
describe("<ListCardPost/>", () => {
  const mockCommon = common
  const mockTranslation = {
    t: (key) => mockCommon[key],
    i18n: { language: "en" },
  }

  const mockRouter = { query: { locale: "en" } }
  const mockPost = mockResponsePageYear.posts
  const mockDescription = [
    "In the fast-paced and stressful world we live in, it&#8217;s common for many people to experience anxiety at some ...",
  ]
  const mockEndpointsPost = ["/en/blog/first-post-1", "/en/blog/second-post-2"]
  const mockDataPost = ["21 March, 2023", "1 April, 2023"]
  let component
  beforeEach(() => {
    useRouter.mockImplementation(() => mockRouter)
    useTranslation.mockImplementation((ns = ["common"]) => mockTranslation)
    component = render(<ListCardPost listPost={mockPost} />)
  })
  afterEach(cleanup)
  test("should render cardPost", () => {
    const totalCardPost = mockPost.length
    const cardPost = component.getAllByRole("article")
    expect(cardPost).toHaveLength(totalCardPost)
  })
  test("should display information about post authorName, dataPost, redingTime", () => {
    const cardPost = component.getAllByRole("article")
    cardPost.forEach((card, index) => {
      const mockAuthorName = mockPost[index].nameAuthor
      const mockReadingTime = mockPost[index].readingTime
      const expectDataPost = mockDataPost[index]
      const authorName = component.getByText(mockAuthorName)
      const readingTime = component.getByText(mockReadingTime)
      const dataPost = component.getByText(expectDataPost)
      expect(card).toBeInTheDocument()
      expect(authorName).toBeInTheDocument()
      expect(readingTime).toBeInTheDocument()
      expect(dataPost).toBeInTheDocument()
    })
  })
  test("Should display title post with it endpoint", () => {
    const mockTitle1Expect = mockPost[0].title
    const mockTitle2Expect = mockPost[1].title
    const titlesPost = []
    const title1 = component.getByRole("link", { name: mockTitle1Expect })
    const title2 = component.getByRole("link", { name: mockTitle2Expect })
    titlesPost.push(title1, title2)
    titlesPost.forEach((title, index) => {
      const mockUrlExpect = mockEndpointsPost[index]
      expect(title).toBeInTheDocument()
      expect(title).toHaveAttribute("href", mockUrlExpect)
    })
  })
  test("Should display description post with first 20 words", () => {
    const description = component.getAllByRole("definition")
    description.forEach((title) => {
      expect(title).toBeInTheDocument()
      expect(title).toHaveTextContent(mockDescription[0])
    })
  })
  test("Should display footer wit name continue reading and it endpoint", () => {
    const mockNameFooter = "Read more"
    const footers = component.getAllByRole("link", { name: mockNameFooter })
    footers.forEach((footer, index) => {
      const mockUrlExpect = mockEndpointsPost[index]
      expect(footer).toBeInTheDocument()
      expect(footer).toHaveAttribute("href", mockUrlExpect)
    })
  })
})
