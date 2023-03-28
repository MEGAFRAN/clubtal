/* eslint-disable no-undef */
import sendFormMessage from "./general-form.service"

describe("sendFormMessage", () => {
  const mockEndpoint = "https://example.com/send-message"
  const mockFormMessage = "Test message"
  const mockClientName = "Test user"
  const mockClientEmail = "test@example.com"
  const mockSetMessageResponseStatus = jest.fn()
  const mockSetMessageResponse = jest.fn()
  const mockSetLoading = jest.fn()

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("should set message response status and message response to error if form fields are missing", async () => {
    await sendFormMessage(
      mockEndpoint,
      "",
      mockClientName,
      mockClientEmail,
      mockSetMessageResponseStatus,
      mockSetMessageResponse,
      mockSetLoading,
    )

    expect(mockSetMessageResponseStatus).toHaveBeenCalledWith("error")
    expect(mockSetMessageResponse).toHaveBeenCalledWith(
      "Por favor llena todos los campos del formulario, e intenta enviar el mensaje nuevamente",
    )
  })

  it("should call fetch with the correct arguments and set message response status and message response to success if request is successful", async () => {
    const mockResponse = { ok: true }
    const mockFetch = jest.fn(() => Promise.resolve(mockResponse))
    global.fetch = mockFetch

    await sendFormMessage(
      mockEndpoint,
      mockFormMessage,
      mockClientName,
      mockClientEmail,
      mockSetMessageResponseStatus,
      mockSetMessageResponse,
      mockSetLoading,
    )

    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(mockFetch).toHaveBeenCalledWith(mockEndpoint, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formMessage: mockFormMessage,
        clientName: mockClientName,
        clientEmail: mockClientEmail,
      }),
    })
    expect(mockSetMessageResponseStatus).toHaveBeenCalledWith("success")
    expect(mockSetMessageResponse).toHaveBeenCalledWith(
      "Gracias recibimos tu mensaje, pronto nos estaremos comunicando contigo",
    )
  })

  it("should set message response status and message response to error if request fails", async () => {
    const mockError = new Error("Fetch failed")
    const mockFetch = jest.fn(() => Promise.reject(mockError))
    global.fetch = mockFetch

    await sendFormMessage(
      mockEndpoint,
      mockFormMessage,
      mockClientName,
      mockClientEmail,
      mockSetMessageResponseStatus,
      mockSetMessageResponse,
      mockSetLoading,
    )

    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(mockFetch).toHaveBeenCalledWith(mockEndpoint, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formMessage: mockFormMessage,
        clientName: mockClientName,
        clientEmail: mockClientEmail,
      }),
    })
    expect(mockSetMessageResponseStatus).toHaveBeenCalledWith("error")
    expect(mockSetMessageResponse).toHaveBeenCalledWith(
      "Por favor llena todos los campos del formulario, e intenta enviar el mensaje nuevamente",
    )
  })
})
