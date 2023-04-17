import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ChatBotToggle from "./ChatBotToogle"

describe("<ChatBotToggle />", () => {
 
  it("Tests that the chat is initially hidden", () => {
    render(<ChatBotToggle />)
    const chatBotToogleButton = screen.queryByTestId("toogle-button")
    expect(chatBotToogleButton).toBeInTheDocument()
    const chatBotContainer = screen.queryByTestId("chatbot-container")
    expect(chatBotContainer).not.toBeInTheDocument()
  })

})
