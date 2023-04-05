import { cleanup, render } from "@testing-library/react"
import "@testing-library/jest-dom"
import PostPage from "./PostPage"
import mockResponsePageYear from "../../../../constants/mocks/mockPostPage"

describe("<PostPage/>", () => {
  let component
  const { yearPost, posts, options, buttonText, withLanguageToggle } = mockResponsePageYear
  beforeEach(() => {
    component = render(
      <PostPage
        options={options}
        buttonText={buttonText}
        mail={""}
        withLanguageToggle={withLanguageToggle}
        yearPost={yearPost}
        posts={posts}
      />,
    )
  })
  afterEach(cleanup)

  test("Should display navbar", () => {
    const navbar = component.getByRole("navigation")
    expect(navbar).toBeInTheDocument()
  })
  test("Should display header with title year", () => {
    const mockTitleExpect = `Año: ${yearPost}`
    const title = component.getByRole("heading", { name: mockTitleExpect })
    expect(title).toBeInTheDocument()
  })
  test("Should display navigation header and element home should have attribute for navigate a home page ", () => {
    const mockEndPointToHome = "/"
    const elementHome = component.getByText("Inicio")
    const elementYear = component.getByText(yearPost)
    expect(elementHome).toHaveAttribute("href", mockEndPointToHome)
    expect(elementYear).not.toHaveAttribute("href")
  })
  test("Should display cardPost", () => {
    const cardPostExpectLength = posts.length
    const elementsPostCard = component.getAllByRole("article")
    expect(elementsPostCard).toHaveLength(cardPostExpectLength)
  })
})
