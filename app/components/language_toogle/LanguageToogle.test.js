import React from "react"
import { render, fireEvent, screen, act } from "@testing-library/react"
import "@testing-library/jest-dom"
import LanguageToogle from "./LanguageToogle"

describe("<LanguageToogle />", () => {

    it("Tests that the component renders with default props", () => {
        const { getByText } = render(<LanguageToogle />)
        expect(getByText("English")).toBeInTheDocument()
    })

    it("Tests that the component renders with custom main and secondary languages", () => {
        const { getByText } = render(<LanguageToogle mainLanguage="Français" secondaryLanguage="Deutsch" />)
        expect(getByText("Deutsch")).toBeInTheDocument()
    })


    it("Tests that the component still renders when setsecondarylanguage prop is not provided", () => {
        const { getByText, container } = render(<LanguageToogle isSecondaryLanguage={false} />)
        const button = getByText("English", { container })
        fireEvent.click(button)
        act(() => render(<LanguageToogle isSecondaryLanguage={true} />, { container }))
        expect(getByText("Español", { container })).toBeInTheDocument()
    })

    it("Tests that the component still renders when mainlanguage prop is not provided", () => {
        const { getByText } = render(<LanguageToogle mainLanguage={undefined} />)
        expect(getByText("English")).toBeInTheDocument()
    })

    it("Tests that the component still renders when secondarylanguage prop is not provided", () => {
        const { getByText } = render(<LanguageToogle secondaryLanguage={undefined} />)
        expect(getByText("English")).toBeInTheDocument()
    })

    it("Verifies that clicking the secondary language button calls setsecondarylanguage with true", () => {
        const mockSetSecondaryLanguage = jest.fn()
        render(<LanguageToogle mainLanguage="Français" secondaryLanguage="Deutsch" setSecondaryLanguage={mockSetSecondaryLanguage} />)
        fireEvent.click(screen.getByRole("button", { name: "Deutsch" }))
        expect(mockSetSecondaryLanguage).toHaveBeenCalledWith(true)
    })

    it("Tests that the component toggles between main and secondary languages when the button is clicked", () => {
        const { getByText, container } = render(<LanguageToogle isSecondaryLanguage={false} />)
        const button = getByText("English", { container })
        fireEvent.click(button)
        act(() => render(<LanguageToogle isSecondaryLanguage={true} />, { container }))
        expect(getByText("Español", { container })).toBeInTheDocument()
        fireEvent.click(button)
        act(() => render(<LanguageToogle isSecondaryLanguage={false} />, { container }))
        expect(getByText("English", { container })).toBeInTheDocument()
      })

})
