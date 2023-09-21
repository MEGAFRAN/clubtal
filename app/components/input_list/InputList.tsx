// components/InputList.tsx
import { useState } from "react"

interface Props {
  label: string
  values: string[]
  onChange: (updatedValues: string[]) => void
}

const InputList: React.FC<Props> = ({ label, values, onChange }) => {
  const [localValues, setLocalValues] = useState<string[]>(values)

  const handleAdd = () => {
    setLocalValues([...localValues, ""])
  }

  const handleRemove = (index: number) => {
    const newValues = [...localValues]
    newValues.splice(index, 1)
    setLocalValues(newValues)
  }

  const handleChange = (index: number, value: string) => {
    const newValues = [...localValues]
    newValues[index] = value
    setLocalValues(newValues)
    onChange(newValues)
  }

  return (
    <div>
      {label}
      {localValues.map((value, index) => (
        <div key={index}>
          <input type="text" value={value} onChange={(e) => handleChange(index, e.target.value)} />
          <button type="button" onClick={() => handleRemove(index)}>
            Delete
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAdd}>
        Add {label}
      </button>
    </div>
  )
}

export default InputList
