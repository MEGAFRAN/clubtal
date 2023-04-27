import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Loading from "./Loading"

describe("<Loading />", () => {

    it("Tests that the loading component is rendered when isLoading is true. ", () => {
        const props = {
            isLoading: true,
            loadingText: "Loading...",
            buttonText: "Submit",
            maxProgress: 100
        }

        const { getByRole } = render(<Loading {...props} />)

        const container = getByRole("progressbar")

        expect(container).toBeInTheDocument()
    })


    it("Tests that the button component is rendered when isLoading is false. ", () => {
        const { getByRole } = render(<Loading isLoading={false} buttonText="Submit" loadingText="Loading" maxProgress={100} />)
        const button = getByRole("button")
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent("Submit")
        expect(button).not.toBeDisabled()
    })

})
