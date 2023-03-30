import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Text from "./Text"

describe("<Text />", () => {

    it("Tests that the paragraph element is rendered with the correct text and alignment style when both text and alignment props are provided", () => {
        const { getByText } = render(<Text text="Hello World" alignment="center" />)
        const textElement = getByText("Hello World")
        expect(textElement).toBeInTheDocument()
        expect(textElement).toHaveStyle("text-align: center")
    })

    it("Tests that the paragraph element is rendered with the correct text and default alignment style when only the text prop is provided", () => {
        const { getByText } = render(<Text text="Hello World" />)
        const textElement = getByText("Hello World")
        expect(textElement).toBeInTheDocument()
        expect(textElement).toHaveStyle("text-align: left")
    })

    it("Tests that the paragraph element is rendered with the default text and the correct alignment style when only the alignment prop is provided", () => {
        const { getByText } = render(<Text alignment="center" />)
        const textElement = getByText("default title")
        expect(textElement).toBeInTheDocument()
        expect(textElement).toHaveStyle("text-align: center")
    })

    it("Tests that the paragraph element is rendered with the correct text and alignment style when a very long text string is provided", () => {
        const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien."
        const { getByText } = render(<Text text={longText} alignment="right" />)
        const textElement = getByText(longText)
        expect(textElement).toBeInTheDocument()
        expect(textElement).toHaveStyle("text-align: right")
    })

})
