import React, { useEffect, useState } from "react"
import { useTranslation } from "next-i18next"
import handleFileUpload from "../../services/utils/general/file_loader/fileLoader"
import styles from "../../styles/components/file-uploader.module.scss"
import { FileUploaderProps } from "../../constants/types/components_props/types"

const FileUploader = ({ onDataUpdate }: FileUploaderProps) => {
  const [data, setData] = useState("")
  const { t } = useTranslation(["components/text"])

  const handleFileData = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileUpload(event, setData)
  }

  useEffect(() => {
    if (data.length) onDataUpdate(data)
  }, [data])

  return (
    <div className={styles.container}>
      <label htmlFor="file-upload">
        {t("selectOrDragTextFile")} <br />
        {t("supportedFormats")}
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
