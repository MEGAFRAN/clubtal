import React from "react"
import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Form from "./Form"
import HOME_TEXT from "../../services/pages/home-text"
import sendFormMessage from "../../services/form_services/general_form/general-form.service"

jest.mock("../../services/form_services/general_form/general-form.service")

describe("<Form />", () => {
  const textSpanish = HOME_TEXT.spanish
  const MOCK_INFORMATION = textSpanish.formText

  test("display message send and disable button when clicked submit with field full and valid data send ", async () => {
    const { getByText } = render(
      <Form
        text={MOCK_INFORMATION}
        endpoint={"https://post-push.azurewebsites.net/api/EmailService"}
      />,
    )
    const messageInput = screen.getByTestId("user-message")
    const nameInput = screen.getByTestId("user-name")
    const emailInput = screen.getByTestId("user-email")
    const submitButton = screen.getByTestId("submit-button")
    fireEvent.change(messageInput, { target: { value: "Hello, World!" } })
    fireEvent.change(nameInput, { target: { value: "John Doe" } })
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } })
    fireEvent.click(submitButton)
    expect(getByText("sending")).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
    await waitFor(() => {
      expect(sendFormMessage).toHaveBeenCalledWith(
        "https://post-push.azurewebsites.net/api/EmailService",
        "Hello, World!",
        "John Doe",
        "johndoe@example.com",
        expect.any(Function),
        expect.any(Function),
        expect.any(Function),
      )
    })
  })
})
