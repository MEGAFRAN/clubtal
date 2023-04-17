import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ChatBotSkeleton from "./ChatBotSkeleton"

describe("<ChatBotSkeleton />", () => {
 
    it("Tests that the component renders with the correct colors and messages", () => {
        const colors = {
          one: "red",
          two: "blue",
          three: "green",
          four: "yellow",
          five: "purple",
          six: "orange",
          seven: "pink",
        }
        render(<ChatBotSkeleton colors={colors} />)
        const closeButton = screen.getByTestId("close-button")
        const background = screen.getByTestId("background")
        const sendButton = screen.getByTestId("send-button")
        expect(closeButton).toBeInTheDocument()
        expect(background).toBeInTheDocument()
        expect(sendButton).toBeInTheDocument()
        expect(background).toHaveStyle(`background-color: ${colors.three}`)
        expect(closeButton).toHaveStyle(`color: ${colors.two}`)
        expect(sendButton).toHaveStyle(`background-color: ${colors.seven}`)
    })

})
