import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import LanguageToogle from "./LanguageToogle"

describe("<LanguageToogle />", () => {

    it("Tests that the component renders without crashing when no props are provided", () => {
        render(<LanguageToogle />)
        expect(screen.getByRole("button", { name: "English" })).toBeInTheDocument()
        expect(screen.getByRole("button", { name: "Español" })).toBeInTheDocument()
    })

    it("Tests that the component renders with custom mainlanguage and secondarylanguage props", () => {
        render(<LanguageToogle mainLanguage="Français" secondaryLanguage="Deutsch" />)
        expect(screen.getByRole("button", { name: "Deutsch" })).toBeInTheDocument()
        expect(screen.getByRole("button", { name: "Français" })).toBeInTheDocument()
    })
       
    it("Tests that the component renders without crashing when setsecondarylanguage prop is not provided", () => {
        render(<LanguageToogle mainLanguage="Français" secondaryLanguage="Deutsch" />)
        fireEvent.click(screen.getByRole("button", { name: "Deutsch" }))
        fireEvent.click(screen.getByRole("button", { name: "Français" }))
        expect(screen.getByRole("button", { name: "Deutsch" })).toBeInTheDocument()
        expect(screen.getByRole("button", { name: "Français" })).toBeInTheDocument()
    })

    it("Verifies that clicking the secondary language button calls setsecondarylanguage with true", () => {
        const mockSetSecondaryLanguage = jest.fn()
        render(<LanguageToogle mainLanguage="Français" secondaryLanguage="Deutsch" setSecondaryLanguage={mockSetSecondaryLanguage} />)
        fireEvent.click(screen.getByRole("button", { name: "Deutsch" }))
        expect(mockSetSecondaryLanguage).toHaveBeenCalledWith(true)
    })

    it("Verifies that clicking the main language button calls setsecondarylanguage with false", () => {
        const mockSetSecondaryLanguage = jest.fn()
        render(<LanguageToogle mainLanguage="Français" secondaryLanguage="Deutsch" setSecondaryLanguage={mockSetSecondaryLanguage} />)
        fireEvent.click(screen.getByRole("button", { name: "Français" }))
        expect(mockSetSecondaryLanguage).toHaveBeenCalledWith(false)
    })

})
