

export const Input = ( {inputData, handleChange}: any ) => 
{
    return (

        <div className="input-container">
            <input value={inputData} onChange={handleChange}/>
        </div>  
    )
}
      
