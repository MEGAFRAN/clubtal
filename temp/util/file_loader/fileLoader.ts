import React from "react"
import mammoth from "mammoth"

const handleFileUpload = async (
  event: React.ChangeEvent<HTMLInputElement>,
  setData: React.Dispatch<React.SetStateAction<string>>
): Promise<void> => {
  const file = event.target.files?.[0]
  if (!file) return

  const reader = new FileReader()

  const readAsText = () => new Promise((resolve, reject) => {
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.onerror = () => {
        reject(reader.error)
      }
      reader.readAsText(file, "UTF-8")
    })

  const readAsArrayBuffer = () => new Promise((resolve, reject) => {
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.onerror = () => {
        reject(reader.error)
      }
      reader.readAsArrayBuffer(file)
    })

  let fileData
  try {
    if (file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      fileData = await readAsArrayBuffer()
    } else {
      fileData = await readAsText()
    }
    
    let newData: string[] = []

    const validExtensions = ["txt", "rtf", "doc", "docx"]
    const fileExtension = file.name.split(".").pop()?.toLowerCase()
    const fileTypes = [
      "text/plain",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/rtf",
    ]

    if (
      fileExtension &&
      validExtensions.includes(fileExtension) &&
      fileTypes.includes(file.type)
    ) {
      if (file.type === "text/plain" || file.type === "application/rtf") {
        newData = (fileData as string)
          .trim()
          .split("\n")
          .map((row) => row.replace(/<\/?[^>]+(>|$)/g, "").trim()) // Remove HTML tags from each row and trim any extra white space
      } else if (
        file.type === "application/msword" ||
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        const result = await mammoth.convertToHtml({ arrayBuffer: fileData as ArrayBuffer })
        const docData = result.value.replace(/<\/p>/g, "\n") // Replace closing paragraph tags with line breaks
        newData = docData
          .split("\n")
          .map((row: string) => row.replace(/<\/?[^>]+(>|$)/g, "").trim()) // Remove HTML tags from each row and trim any extra white space
      }
      setData(newData.join(""))
    } else {
      alert("Invalid file type. Only .rtf, .txt, .doc, and .docx files are allowed.")
    }
  } catch (error) {
    console.error("Error reading the file:", error)
  }
}

export default handleFileUpload
