import comunicateChatBot from "./comunicate-chat-bot.service"

describe("comunicateChatBot()", () => {
  const mockResponse = { status: 200, json: jest.fn() }
  const mockFetch = jest.fn(() => Promise.resolve(mockResponse))

  beforeEach(() => {
    global.fetch = mockFetch
  })

  afterEach(() => {
    jest.clearAllMocks()
    delete global.fetch
  })

  test("sends messages to chatbot and returns response", async () => {
    const initialHiddenContextMessage = { role: "bot", content: "Welcome!" }
    const messages = [
      { role: "assistant", content: "How can I help you?" },
      { role: "user", content: "i'm testing you" },
    ]
    const userMessage = "John Doe"

    const expectedRequestBody = {
      messages: [initialHiddenContextMessage, ...messages, { role: "user", content: userMessage }],
    }

    const response = await comunicateChatBot(initialHiddenContextMessage, messages, userMessage)

    expect(mockFetch).toHaveBeenCalledWith(
      "https://clubtal-web-services.azurewebsites.net/api/comunicate-chat-bot",
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expectedRequestBody),
      }),
    )

    expect(response).toEqual(mockResponse)
  })
})
