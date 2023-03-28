const Input = ({ inputData, handleChange }: any) => (
  <div className="input-container">
    <input value={inputData} onChange={handleChange} />
  </div>
)
export default Input
