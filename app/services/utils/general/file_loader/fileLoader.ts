import React from "react"
import mammoth from "mammoth"

const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>, setData: React.Dispatch<React.SetStateAction<string>>): Promise<void> => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.readAsBinaryString(file)

    reader.onload = async () => {
        const fileData = reader.result as string
        let newData: string[] = []

        if (file.type === "text/plain" || file.type === "application/rtf") {
          newData = fileData
            .trim()
            .split("\n")
            .map((row) => row.replace(/<\/?[^>]+(>|$)/g, "").trim()) // Remove HTML tags from each row and trim any extra white space
        } else if (file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
          const result = await mammoth.convertToHtml({ arrayBuffer: reader.result })
          const docData = result.value.replace(/<\/p>/g, "\n") // Replace closing paragraph tags with line breaks
          newData = docData
            .split("\n")
            .map((row) => row.replace(/<\/?[^>]+(>|$)/g, "").trim()) // Remove HTML tags from each row and trim any extra white space
        } else {
          alert("Invalid file type. Only .rtf, .txt, .doc, and .docx files are allowed.")
        }

        setData(newData.join(""))
    }
}

export default handleFileUpload