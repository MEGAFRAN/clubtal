import { useContext } from "react"
import { render } from "@testing-library/react"
import languageContext from "./languageContext"

describe("languageContext", () => {
  it("should render without crashing", () => {
    render(
      <languageContext.Provider value={{ language: "en" }}>
        <div></div>
      </languageContext.Provider>
    )
  })

  it("should provide the correct default value", () => {
    function TestComponent() {
      const value = useContext(languageContext)
      expect(value).toBeUndefined()
      return null
    }
    render(<TestComponent />)
  })

  it("should provide a language value when a value is passed in", () => {
    function TestComponent() {
      const value = useContext(languageContext)
      expect(value.language).toEqual("en")
      return null
    }
    render(
      <languageContext.Provider value={{ language: "en" }}>
        <TestComponent />
      </languageContext.Provider>
    )
  })
})
