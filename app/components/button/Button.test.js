import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Button from "./Button"

describe("<Button />", () => {

    it("Tests rendering a regular button with text and handleclick function", () => {
        const handleClick = jest.fn()
        const { getByText } = render(<Button text="Click me" handleClick={handleClick} />)
        const button = getByText("Click me")
        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalled()
    })

    it("Tests rendering a cta button with text and handleclick function", () => {
        const handleClick = jest.fn()
        const { getByText } = render(<Button text="Click me" handleClick={handleClick} style="cta" />)
        const button = getByText("Click me")
        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalled()
    })

    it("Tests rendering a button that scrolls to a specific section on the page", () => {
        const scrollTo = jest.fn()
        document.querySelector = jest.fn().mockReturnValue({ scrollIntoView: scrollTo })
        const { getByText } = render(<Button text="Scroll to section" scrollToSection="#section1" />)
        const button = getByText("Scroll to section")
        fireEvent.click(button)
        expect(document.querySelector).toHaveBeenCalledWith("#section1")
        expect(scrollTo).toHaveBeenCalled()
    })

    it("Tests behavior when handleclick function not provided", () => {
        const { getByText } = render(<Button text="Click me" />)
        const button = getByText("Click me")
        fireEvent.click(button)
    })

    it("Tests behavior when invalid selector provided for scrolltosection", () => {
        document.querySelector = jest.fn().mockReturnValue(null)
        const { getByText } = render(<Button text="Scroll to section" scrollToSection="#invalidSelector" />)
        const button = getByText("Scroll to section")
        fireEvent.click(button)
        expect(document.querySelector).toHaveBeenCalledWith("#invalidSelector")
    })

    it("renders a button with a link when linkTo prop is provided", () => {
        const linkTo = "https://www.example.com"
        const buttonText = "Click me!"
        const { getByText } = render(<Button text={buttonText} linkTo={linkTo} />)
        const button = getByText(buttonText)
        expect(button).toBeInTheDocument()
        expect(button.tagName).toBe("BUTTON")
        expect(button.parentNode.tagName).toBe("A")
        expect(button.parentNode).toHaveAttribute("href", linkTo)
      })

  })
