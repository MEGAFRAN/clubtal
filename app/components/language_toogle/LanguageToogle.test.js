import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import LanguageToogle from "./LanguageToogle"

describe("<LanguageToogle />", () => {

    it("Should update languagecontext values correctly based on the user's preferred language and toggle button clicks", () => {
        const setSecondaryLanguageMock = jest.fn()
        jest.spyOn(React, "useContext").mockImplementation(() => ({ isSecondaryLanguage: false, setSecondaryLanguage: setSecondaryLanguageMock }))

        render(<LanguageToogle />)
        expect(setSecondaryLanguageMock).toHaveBeenCalledWith(true)
        fireEvent.click(screen.getByRole("button"))
        expect(setSecondaryLanguageMock).toHaveBeenCalledWith(true)

        jest.spyOn(React, "useContext").mockRestore()
    })

    it("Should display the secondary language toggle button when clicked", () => {
        const originalLanguage = window.navigator.language
        Object.defineProperty(window.navigator, "language", {
            configurable: true,
            get: () => "es-CO", 
        })

        const setIsSecondaryLanguageMock = jest.fn()
        const mockContextValue = {
          isSecondaryLanguage: false,
          setSecondaryLanguage: setIsSecondaryLanguageMock,
        }
      
        jest.spyOn(React, "useContext").mockImplementation(() => mockContextValue)

        const { getByText } = render(<LanguageToogle />)
        fireEvent.click(screen.getByRole("button"))

        expect(getByText("English")).toBeInTheDocument()

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
        const setSecondaryLanguageMock = jest.fn()
        jest.spyOn(React, "useContext").mockImplementation(() => ({ isSecondaryLanguage: false, setSecondaryLanguage: setSecondaryLanguageMock }))


        render(<LanguageToogle />)
        expect(setSecondaryLanguageMock).toHaveBeenCalledWith(true)

        jest.spyOn(React, "useContext").mockRestore()
        Object.defineProperty(window.navigator, "language", {
            configurable: true,
            get: () => originalLanguage,
        })
    })

})
