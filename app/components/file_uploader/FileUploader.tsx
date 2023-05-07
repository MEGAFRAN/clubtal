import React, { useEffect, useState } from "react"
import handleFileUpload from "../../services/utils/general/file_loader/fileLoader"
import styles from "../../styles/components/file-uploader.module.scss"
import { FileUploaderProps } from "../../constants/types/components_props/types"

const FileUploader = ({ onDataUpdate }: FileUploaderProps) => {
  const [data, setData] = useState("")

  const handleFileData = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileUpload(event, setData)
  }

  useEffect(() => {
    if (data.length) onDataUpdate(data)
  }, [data])

  return (
    <div className={styles.container}>
      <label htmlFor="file-upload">
        Select or drag a text file <br />
        (Supported formats: .txt .rtf .doc .docx)
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".rtf, .txt, .doc, .docx"
        onChange={handleFileData}
      />
    </div>
  )
}

export default FileUploader
