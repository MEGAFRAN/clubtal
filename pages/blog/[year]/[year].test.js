import "@testing-library/jest-dom"
import { cleanup, render, waitFor } from "@testing-library/react"
import { useRouter } from "next/router"

import Year from "./index"

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))
describe("[year]", () => {
  afterEach(() => {
    jest.resetAllMocks()
    cleanup()
  })
  test("render page", async () => {
    useRouter.mockImplementation(() => ({
      query: { year: "2023" },
    }))
    const component = render(<Year />)
    await waitFor(() => expect(component.getByText("2023")).toBeInTheDocument())
  })
  test("Should show cardPost that correspond to the year", async () => {
    useRouter.mockImplementation(() => ({
      query: { year: "2023" },
    }))
    const component = render(<Year />)
    await waitFor(() => {
      const cardPosts = component.getAllByRole("article")
      expect(cardPosts).toHaveLength(2)
    })
  })
  test("Should show page 404 when no found post that correspond to the year", async () => {
    useRouter.mockImplementation(() => ({
      query: { year: "2024" },
    }))
    const component = render(<Year />)
    await waitFor(() => {
      const notFound = component.getByText(
        "No encontramos la dirección que buscabas, si quieres más información te invitamos a nuestra página principal",
      )
      expect(notFound).toBeInTheDocument()
    })
  })
})
