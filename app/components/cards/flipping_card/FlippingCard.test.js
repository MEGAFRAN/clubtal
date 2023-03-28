/* eslint-disable no-undef */
import React from "react"
import { render, screen } from "@testing-library/react"
import FlippingCard from "./FlippingCard"
import "@testing-library/jest-dom"

it("should render same text passed into title prop", () => {
  const MOCK_TITLE = "test title"
  const EXPECTED_TITLE = /test title/i

  render(<FlippingCard title={MOCK_TITLE} />)
  const h1Element = screen.getAllByText(EXPECTED_TITLE)
  h1Element.forEach((element) => expect(element).toBeInTheDocument())
})

it("should render same text passed into description prop", () => {
  const MOCK_DESCRIPTION = "test description"
  const EXPECTED_DESCRIPTION = /test description/i

  render(<FlippingCard description={MOCK_DESCRIPTION} />)
  const pElement = screen.getAllByText(EXPECTED_DESCRIPTION)
  pElement.forEach((element) => expect(element).toBeInTheDocument())
})

it("should render same url passed into image prop", () => {
  const MOCK_URL = "hero-digital.jpg"
  const MOCK_TITLE = "hero-digital"
  const EXPECTED_ALT = /hero-digital/i
  const EXPECTED_URL = "hero-digital.jpg"

  render(<FlippingCard imageUrl={MOCK_URL} title={MOCK_TITLE} />)
  const imgElement = screen.getAllByAltText(EXPECTED_ALT)
  imgElement.forEach((element) => expect(element).toHaveAttribute("src", EXPECTED_URL))
})

it("should render same array of tags passed into tags prop", () => {
  const MOCK_TAGS = ["restaurants", "clothing", "hotels"]
  const EXPECTED_TAGS = ["restaurants", "clothing", "hotels"]

  render(<FlippingCard tags={MOCK_TAGS} />)
  EXPECTED_TAGS.forEach((element) => expect(screen.getByText(element)).toBeTruthy())
})

it("should render 'featured' text, if 'true' is passed into feature prop", () => {
  const MOCK_FEATURED = true
  const EXPECTED_TEXT = "Featured"

  render(<FlippingCard featured={MOCK_FEATURED} />)
  const spanElement = screen.getByText(EXPECTED_TEXT)
  expect(spanElement).toBeInTheDocument()
})
