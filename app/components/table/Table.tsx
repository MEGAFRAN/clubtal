import React from "react"
import { TableProps } from "../../constants/types/components_props/types"

export const Table = ({ tableHeaders, tableRows }: TableProps) => {
  const headers = tableHeaders ? (
    <tr>
      {" "}
      {tableHeaders.map((element: any, index: number) => (
        <>
          <th key={index}>{element}</th>
        </>
      ))}{" "}
    </tr>
  ) : null

  const rows = tableRows
    ? tableRows.map((element: any) => (
        <tr key={element.id}>
          {Object.values(element).map((objectValue: any, index: number) => (
            <td key={index}>{objectValue}</td>
          ))}
        </tr>
      ))
    : null

  return (
    <table>
      <tbody>
        {headers}

        {rows}
      </tbody>
    </table>
  )
}
export default Table
