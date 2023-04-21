import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Link from "./Link"

describe("<Link />", () => {

    it("Tests that the function sets default values for text and target if they are not provided", () => {
        render(<Link />)
        const linkElement = screen.getByRole("link")
        expect(linkElement).toHaveTextContent("")
        expect(linkElement).toHaveAttribute("target", "_self")
    })

    it("Tests that the function renders an anchor tag with custom text and href values", () => {
        render(<Link text="Custom Text" href="https://www.example.com" />)
        const linkElement = screen.getByRole("link")
        expect(linkElement).toHaveTextContent("Custom Text")
        expect(linkElement).toHaveAttribute("href", "https://www.example.com")
    })

    it("Tests that the function renders an anchor tag with child elements", () => {
        render(<Link><span>Child Element</span></Link>)
        const linkElement = screen.getByRole("link")
        expect(linkElement).toContainHTML("<span>Child Element</span>")
    })

    it("Tests that the function renders a mailto link", () => {
        render(<Link emailAddress="test@example.com" />)
        const linkElement = screen.getByRole("link")
        expect(linkElement).toHaveAttribute("href", "mailto:test@example.com")
    })

    it("Tests that the function renders a link that should be downloaded instead of navigated to", () => {
        render(<Link href="https://www.example.com/file.pdf" isDownload={true} />)
        const linkElement = screen.getByRole("link")
        expect(linkElement).toHaveAttribute("href", "https://www.example.com/file.pdf")
        expect(linkElement).toHaveAttribute("download", "file.pdf")
    })

    it("Tests that the function renders a link that should be opened in a new window", () => {
        render(<Link href="https://www.example.com" isOpenNewWindow={true} />)
        const linkElement = screen.getByRole("link")
        expect(linkElement).toHaveAttribute("href", "https://www.example.com")
        expect(linkElement).toHaveAttribute("target", "_blank")
    })

})
