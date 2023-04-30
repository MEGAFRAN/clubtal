import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import LanguageToogle from "./LanguageToogle"

describe("<LanguageToogle />", () => {

    it("Should display the secondary language toggle button when clicked", () => {
        const originalLanguage = window.navigator.language
        Object.defineProperty(window.navigator, "language", {
            configurable: true,
            get: () => "es-CO", 
        })

        const setUserLanguageMock = jest.fn()
        const mockContextValue = {
            userLanguage: "es-CO",
          setUserLanguage: setUserLanguageMock,
        }
      
        jest.spyOn(React, "useContext").mockImplementation(() => mockContextValue)

        const { getByText } = render(<LanguageToogle />)
        fireEvent.click(screen.getByRole("button"))

        expect(getByText("Eng")).toBeInTheDocument()

        jest.spyOn(React, "useContext").mockRestore()
        Object.defineProperty(window.navigator, "language", {
            configurable: true,
            get: () => originalLanguage,
        })
    })
      
    it("Should set default language to english when the browser language is not supported", () => {
        const originalLanguage = window.navigator.language
        Object.defineProperty(navigator, "language", {
            value: "fr-FR",
            writable: true,
        })
        const setUserLanguageMock = jest.fn()
        jest.spyOn(React, "useContext").mockImplementation(() => ({ userLanguage: "fr-FR", setUserLanguage: setUserLanguageMock }))


        render(<LanguageToogle />)
        expect(setUserLanguageMock).toHaveBeenCalledWith("english")

        jest.spyOn(React, "useContext").mockRestore()
        Object.defineProperty(window.navigator, "language", {
            configurable: true,
            get: () => originalLanguage,
        })
    })

})
