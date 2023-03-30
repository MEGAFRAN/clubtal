import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Table from "./Table"

describe("<Table />", () => {

    it("Tests that the table renders with the correct headers based on the input data", () => {
        const tableHeaders = ["Name", "Age", "Gender"]
        const { getByText } = render(<Table tableHeaders={tableHeaders} />)
        const nameHeader = getByText("Name")
        const ageHeader = getByText("Age")
        const genderHeader = getByText("Gender")
        expect(nameHeader).toBeInTheDocument()
        expect(ageHeader).toBeInTheDocument()
        expect(genderHeader).toBeInTheDocument()
    })

    it("Tests that the table renders with the correct rows based on the input data", () => {
        const tableHeaders = ["Name", "Age", "Gender"]
        const tableRows = [
            { id: 1, Name: "John", Age: 25, Gender: "Male" },
            { id: 2, Name: "Jane", Age: 30, Gender: "Female" },
            { id: 3, Name: "Bob", Age: 40, Gender: "Male" },
        ]
        const { getByText } = render(<Table tableHeaders={tableHeaders} tableRows={tableRows} />)
        const johnName = getByText("John")
        const janeAge = getByText("30")
        const janeGender = getByText("Female")
        expect(johnName).toBeInTheDocument()
        expect(janeAge).toBeInTheDocument()
        expect(janeGender).toBeInTheDocument()
    })

    it("Tests that the table handles cases where the tablerows prop is empty", () => {
        const tableHeaders = ["Name", "Age", "Gender"]
        const { queryByRole } = render(<Table tableHeaders={tableHeaders} />)
        const tableBody = queryByRole("table")?.querySelector("tbody")
        expect(tableBody?.childElementCount).toBe(1)
    })

    it("Tests that the table handles cases where the tableheaders prop is empty", () => {
        const tableRows = [
            { id: 1, Name: "John", Age: 25, Gender: "Male" },
            { id: 2, Name: "Jane", Age: 30, Gender: "Female" },
            { id: 3, Name: "Bob", Age: 40, Gender: "Male" },
        ]
        const { queryByRole } = render(<Table tableRows={tableRows} />)
        const tableHead = queryByRole("table")?.querySelector("thead")
        expect(tableHead).toBeNull()
    })


    it("Tests that the table handles cases where the tablerows prop contains objects with missing or extra keys", () => {
        const tableHeaders = ["Name", "Age", "Gender"]
        const tableRows = [
            { id: 1, Name: "John", Age: 25, Gender: "Male", Occupation: "Engineer" },
            { id: 2, Name: "Jane", Age: 30, Gender: "Female" },
            { id: 3, Name: "Bob", Age: 40 },
        ]
        const { getByText } = render(<Table tableHeaders={tableHeaders} tableRows={tableRows} />)
        const johnOccupation = getByText("Engineer")
        const janeGender = getByText("Female")
        const bobAge = getByText("40")
        expect(johnOccupation).toBeInTheDocument()
        expect(janeGender).toBeInTheDocument()
        expect(bobAge).toBeInTheDocument()
    })

})
