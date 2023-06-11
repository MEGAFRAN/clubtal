import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import List from "./List"

describe("<List />", () => {
  it("Tests that the list renders correctly with valid data", () => {
    const listData = ["item1", "item2", "item3"]
    const { getByText } = render(<List listData={listData} />)
    listData.forEach((item) => {
      expect(getByText(item)).toBeInTheDocument()
    })
  })

  it("Tests that the list renders empty when passed empty data", () => {
    const listData = []
    const { queryByRole } = render(<List listData={listData} />)
    expect(queryByRole("list")).toBeNull()
  })

  it("Tests that the function handles invalid data correctly", () => {
    const listData = "invalid data"
    const { queryByRole } = render(<List listData={listData} />)
    expect(queryByRole("list")).toBeNull()
  })

  it("Tests that the function handles null and undefined data correctly", () => {
    const { queryByRole } = render(<List listData={null} />)
    expect(queryByRole("list")).toBeNull()
    render(<List listData={undefined} />)
    expect(queryByRole("list")).toBeNull()
  })

  it("Tests that the function handles data with duplicate keys correctly", () => {
    const listData = ["item1", "item2", "item1"]
    const { getAllByRole } = render(<List listData={listData} />)
    const listItems = getAllByRole("listitem")
    expect(listItems.length).toBe(listData.length)
  })
})
