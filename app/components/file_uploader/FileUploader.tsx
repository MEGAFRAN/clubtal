import React, { useState } from "react"
import handleFileUpload from "../../services/utils/general/file_loader/fileLoader"

const FileUploader: React.FC = () => {
  const [data, setData] = useState<string[]>([])

  const handleFileData = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const arrayFileData = await handleFileUpload(event)
    if (arrayFileData) setData(arrayFileData)
  }

  return (
    <div>
      <input type="file" accept=".rtf, .txt, .doc, .docx" onChange={handleFileData} />
      {data.map((row, index) => (
        <div key={index}>{row}</div>
      ))}
    </div>
  )
}

export default FileUploader
