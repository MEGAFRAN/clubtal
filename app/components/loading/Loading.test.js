import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Loading from "./Loading"

describe("<Loading />", () => {

    it("Tests that the loading component is rendered when isLoading is true. ", () => {
        const props = {
            isLoading: true,
            loadingMessage: "Validating",
            maxProgress: 100
        }

        const { getByRole } = render(<Loading {...props} />)

        const container = getByRole("progressbar")

        expect(container).toBeInTheDocument()
    })

})
