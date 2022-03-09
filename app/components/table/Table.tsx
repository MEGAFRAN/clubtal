import React from 'react'


export const Table = ({ tableHeaders, tableRows }:any) =>
{

  let headers = tableHeaders ? <tr> {tableHeaders.map((element: any, index: number) => (<><th key={index}>{element}</th></>))}  </tr>
                             : null

  let rows = tableRows ? tableRows.map((element: any) =>
  (

    <tr key={element.id}>
      {Object.values(element).map((objectValue: any, index:number) => <td key={index}>{objectValue}</td> )}
    </tr>  

  )) : null 
  

  return (
    
      <table>

        <tbody>
          
          {headers}
          
          {rows}

        </tbody>
        
      </table>

  )
    

}

