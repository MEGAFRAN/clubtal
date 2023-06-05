import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import {
  CardPost,
  DataPost,
  LANGUAGE,
  LOCALES,
  PathsPost,
  PostFromGraphql,
  PostFromGraphqlEdge,
  PostsEdge,
  RESULT_LANGUAGE_BY_LOCALE,
} from "../app/constants/types/components_props/types"
import IS_DEVELOPMENT from "../app/constants/config/config"
import queries from "../app/constants/query/query"
import requestHeadlessData from "../app/services/headless/request-headless.service"

const root = process.cwd()

export const getFiles = (directoryFiles: string): string[] => {
  const postsDirectory = path.join(root, directoryFiles)
  const foldersName = fs.readdirSync(postsDirectory)
  return foldersName
}

interface GetAllPostData {
  folders: string[]
  locale: string
  title?: string
}
interface GetFileByLocaleAndTitle {
  locale: string
  title: string
}

export const getAllPathsOfPost = (locale: string) => {
  const postDirectory = path.join("post")
  const localeNames = getFiles(postDirectory)
  const findIndexLocale = localeNames.findIndex((name) => name === locale)
  const localName = localeNames[findIndexLocale]
  const paths: PathsPost[] = []
  const localeDirectory = path.join(postDirectory, localName)
  const yearNames = getFiles(localeDirectory)
  for (const yearName of yearNames) {
    const yearDirectory = path.join(localeDirectory, yearName)
    const postNames = getFiles(yearDirectory)
    for (const postName of postNames) {
      const titlePost = postName.replace(/\.mdx?$/, "")
      paths.push({
        params: {
          locale: localName,
          title: titlePost,
        },
      })
    }
  }
  return paths
}

export const getAllPostDataAndPathFile = ({ folders, locale, title }: GetAllPostData) => {
  let pathFile = ""
  const allPostData: CardPost[] = []
  for (const foldersName of folders) {
    const yearDirectory = path.join("post", locale, foldersName)
    const fileNames = getFiles(yearDirectory)
    for (const fileName of fileNames) {
      const fullPath = path.join(yearDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      // Use gray-matter to parse the post metadata section
      const { data } = matter(fileContents)
      allPostData.push(data as CardPost)
      if (title && pathFile === "") {
        const nameWithoutMdx = fileName.replace(/\.mdx$/, "")
        const isEqualName = nameWithoutMdx === title
        if (isEqualName) pathFile = fullPath
      }
    }
  }
  return { allPostData, pathFile }
}

export const getMetaDataOfPostByLocale = async (locale: LOCALES) => {
  const language = RESULT_LANGUAGE_BY_LOCALE[locale] as LANGUAGE
  const allPostData = await getAllPostByLanguage(language)
  return allPostData
}

export const getFileByLocaleAndTitle = async ({ locale, title }: GetFileByLocaleAndTitle) => {
  const localDirectory = path.join("post", locale)
  const folders = getFiles(localDirectory)
  const { pathFile } = getAllPostDataAndPathFile({ folders, locale, title })
  const fileContent = readFileContent(pathFile)
  // Use gray-matter to parse the post metadata and content section
  if (!fileContent) return null
  const { data, content } = matter(fileContent)
  const source = await serialize(content)
  const frontMatter = data as CardPost
  return { frontMatter, source }
}

export const sortPostByDate = (posts: CardPost[]) =>
  posts.sort((currentPost, nextPost) => {
    if (currentPost.date < nextPost.date) return 1
    return -1
  })

async function getAllPostByLanguage(language: LANGUAGE): Promise<CardPost[]> {
  const currentQuery = queries.allInformation(language)
  const variables = {
    where: language,
  }
  const response = await requestHeadlessData(currentQuery, variables)
  const json = await response.json()
  if (json.errors) {
    console.error(json.errors)
  }
  const dataPosts = json.data as DataPost

  const postsEdges = dataPosts.posts.edges
  const cardPosts = mapPost(postsEdges)
  const cardPostSorted = sortPostByDate(cardPosts)

  return cardPostSorted
}

// mapPost ---> This function was created to maintain the CardPost interface contract.
function mapPost(posts: PostsEdge[]): CardPost[] {
  return posts.map((post) => {
    const [language, category] = post.node.categories.edges
    const date = String(post.node.date)
    return {
      title: post.node.title,
      id: post.node.id,
      nameAuthor: post.node.author.node.name,
      date: date,
      readingTime: post.node.readingTime,
      category: category.node.name,
      overview: post.node.content,
      locale: language.node.name,
    }
  })
}
function readFileContent(pathFile: string) {
  try {
    const fileContent = fs.readFileSync(pathFile, "utf8")
    return fileContent
  } catch (error) {
    if (IS_DEVELOPMENT) {
      console.error(error)
      return null
    }
    return null
  }
}
