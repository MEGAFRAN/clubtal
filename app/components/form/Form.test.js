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

  test("renders the correct text", () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <Form text={MOCK_INFORMATION} />,
    )
    expect(getByText(MOCK_INFORMATION[0])).toBeInTheDocument()
    expect(getByText(MOCK_INFORMATION[1])).toBeInTheDocument()
    expect(getByPlaceholderText(MOCK_INFORMATION[2])).toBeInTheDocument()
    expect(getByText(MOCK_INFORMATION[3])).toBeInTheDocument()
    expect(getByPlaceholderText(MOCK_INFORMATION[4])).toBeInTheDocument()
    expect(getByText(MOCK_INFORMATION[5])).toBeInTheDocument()
    expect(getByPlaceholderText(MOCK_INFORMATION[6])).toBeInTheDocument()
    expect(getByText(MOCK_INFORMATION[7])).toBeInTheDocument()
    expect(getByLabelText(MOCK_INFORMATION[1])).toBeInTheDocument()
  })

  test("displays error message for invalid input or some fields empty", () => {
    const { getByRole } = render(<Form text={MOCK_INFORMATION} />)
    const submitButton = getByRole("button", { name: "Enviar mi mensaje" })
    fireEvent.click(submitButton)
    expect(
      screen.getByText(
        "Por favor llena todos los campos del formulario, e intenta enviar el mensaje nuevamente",
      ),
    ).toBeInTheDocument()
  })

  test("display message send and disable button when clicked submit with field full and valid data send ", async () => {
    const { getByText, getByLabelText, getByRole } = render(
      <Form
        text={MOCK_INFORMATION}
        endpoint={"https://post-push.azurewebsites.net/api/EmailService"}
      />,
    )
    const messageInput = getByLabelText(MOCK_INFORMATION[1])
    const nameInput = getByLabelText(MOCK_INFORMATION[3])
    const emailInput = getByLabelText(MOCK_INFORMATION[5])
    const submitButton = getByRole("button", { name: "Enviar mi mensaje" })
    fireEvent.change(messageInput, { target: { value: "Hello, World!" } })
    fireEvent.change(nameInput, { target: { value: "John Doe" } })
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } })
    fireEvent.click(submitButton)
    expect(await getByText("Enviando...")).toBeInTheDocument()
    expect(await submitButton).toBeDisabled()
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
