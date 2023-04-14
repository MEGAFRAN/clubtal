import path from "path"
import fs from "fs/promises"
import { CardPost, Post } from "../../../constants/types/components_props/types"

const mapPostToCardPost = (postsFromApi: Post[]): CardPost[] =>
  postsFromApi.map((postFromApi) => {
    const { descriptionContent } = postFromApi.contentPost[0]
    return {
      title: postFromApi.title,
      id: postFromApi.id,
      nameAuthor: postFromApi.nameAuthor,
      data: postFromApi.data,
      readingTime: postFromApi.readingTime,
      category: postFromApi.category,
      description: descriptionContent,
    }
  })

const getYearMonthDayFromString = (date: string) => {
  const stringToArray = date.split("-")
  const regex = /^\d+$/
  const allNumbers = stringToArray.every((string) => regex.test(string))
  if (stringToArray.length === 3 && allNumbers) {
    const yearPost = stringToArray[0]
    const monthPost = stringToArray[1]
    const dayPost = stringToArray[2]
    if (monthPost === "02" && Number(dayPost) >= 29)
      throw new Error("Check your input, is possible date is not valid")
    return { yearPost, monthPost, dayPost }
  }
  throw new Error("Check your input, is possible date is not valid")
}

const getInformationFromFile = (files: string[]) =>
  files.map(async (file) => {
    const fileDirectory = path.join(process.cwd(), `post/${file}`)
    const readFile = await fs.readFile(fileDirectory, "utf-8")
    return JSON.parse(readFile)
  })

const functionPost = {
  mapPostToCardPost,
  getYearMonthDayFromString,
  getInformationFromFile,
}

export default functionPost
