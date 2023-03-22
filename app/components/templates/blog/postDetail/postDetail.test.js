import { cleanup, render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { PostDetail } from "./PostDetail"
import { post } from "../../../../services/pages/blog/post"

describe("<PostDetail/>", () => {
  let component
  const mockInformation = post
  beforeEach(() => {
    component = render(
      <PostDetail
        titlePost={mockInformation[0].title}
        nameAuthor={mockInformation[0].nameAuthor}
        datePost={mockInformation[0].dataPost}
        readingTime={mockInformation[0].readingTime}
        contentPost={mockInformation[0].contentPost}
      />,
    )
  })
  afterEach(cleanup)
  test("Should display navbar", () => {
    const navbar = component.getByRole("navigation")
    expect(navbar).toBeInTheDocument()
  })
  test("should display title post", () => {
    const titlePost = component.getByRole("heading", { name: mockInformation[0].title })
    expect(titlePost).toHaveTextContent("First post")
  })
  test("Should display information author, date and reading time of the post", () => {
    const name = component.getByText("Clubtal")
    const data = component.getByText("March 21 2023")
    const readingTime = component.getByText("5 min read")
    expect(name).toBeInTheDocument()
    expect(data).toBeInTheDocument()
    expect(readingTime).toBeInTheDocument()
  })
  test("Should display content of post", () => {
    const contents = component.getAllByRole("contentinfo")
    expect(contents).toHaveLength(2)
    contents.forEach((content, index) => {
      const mockContent = mockInformation[0].contentPost[index]
      const titleContent = component.getByRole("heading", { name: mockContent.titleContent })
      const descriptionContent = component.getByText(mockContent.descriptionContent)
      expect(titleContent).toHaveTextContent(mockContent.titleContent)
      expect(descriptionContent).toHaveTextContent(mockContent.descriptionContent)
    })
  })
  test("Should display form", () => {
    const form = component.getByRole("form")
    expect(form).toBeInTheDocument()
  })
  test("Should display footer with button", () => {
    const footer = component.getByRole("toolbar")
    const button = component.getByRole("button", { name: "Contáctanos" })
    expect(footer).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})
