import React from "react"
import mammoth from "mammoth"

const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>): Promise<string[] | undefined> => {
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
                .map((row) => row.trim())
        } else if (
            file.type === "application/msword" ||
            file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
            const result = await mammoth.convertToHtml({ arrayBuffer: reader.result })
            const docData = result.value.replace(/<\/p>/g, "\n")
            newData = docData.split("\n").map((row) => row.trim())
        } else {
            alert("Invalid file type. Only .rtf, .txt, .doc, and .docx files are allowed.")
            return
        }
        console.log(newData)
        // eslint-disable-next-line consistent-return
        return newData
    }
    
}

export default handleFileUpload