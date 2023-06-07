import {
  CardPost,
  DataPost,
  LANGUAGE,
  LOCALES,
  getPostByLocaleAndSlugParams,
  PostsEdge,
  RESULT_LANGUAGE_BY_LOCALE,
  PathsPost,
  RESULT_LOCALE_BY_LANGUAGE,
  Post,
} from "../app/constants/types/components_props/types"
import IS_DEVELOPMENT from "../app/constants/config/config"
import queries from "../app/constants/query/query"
import requestHeadlessData from "../app/services/headless/request-headless.service"

export interface GetFileByLocaleAndTitle {
  locale: LOCALES
  title: string
}

export const getAllPathsOfPost = async (locale: LOCALES) => {
  const language = RESULT_LANGUAGE_BY_LOCALE[locale] as LANGUAGE
  const allPostData = await getAllPostByLanguage(language)
  const Paths: PathsPost[] = allPostData.map((post) => {
    const language = post.language as LANGUAGE
    const locale = RESULT_LOCALE_BY_LANGUAGE[language] as LOCALES
    const slug = post.slug.replace(/\//g, "")
    return {
      params: {
        slug,
        locale,
      },
    }
  })
  return Paths
}

export const getMetaDataOfPostByLocale = async (locale: LOCALES) => {
  const language = RESULT_LANGUAGE_BY_LOCALE[locale] as LANGUAGE
  const allPostData = await getAllPostByLanguage(language)
  return allPostData
}

export const sortPostByDate = (posts: CardPost[]) =>
  posts.sort((currentPost, nextPost) => {
    if (currentPost.date < nextPost.date) return 1
    return -1
  })

export async function getPostByLocaleAndSlug({ locale, slug }: getPostByLocaleAndSlugParams) {
  const language = RESULT_LANGUAGE_BY_LOCALE[locale] as LANGUAGE
  const currentQuery = queries.byLanguageAndSlug({ language, slug })
  const variables = {
    where: { categoryName: language, uri: slug },
  }
  const response = await requestHeadlessData(currentQuery, variables)
  const json = await response.json()
  if (json.errors) {
    if (IS_DEVELOPMENT) {
      console.error(json.errors)
    }
    return null
  }
  const dataPost = json.data as DataPost
  const postsEdges = dataPost.posts.edges
  const post = mapPost(postsEdges)
  return post
}

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
  const cardPosts = mapCardPost(postsEdges)
  const cardPostSorted = sortPostByDate(cardPosts)

  return cardPostSorted
}

// mapPost ---> This function was created to maintain the Post interface contract.
function mapPost(post: PostsEdge[]): Post {
  const [language, category] = post[0].node.categories.edges
  const date = String(post[0].node.date)
  return {
    title: post[0].node.title,
    id: post[0].node.id,
    nameAuthor: post[0].node.author.node.name,
    date: date,
    readingTime: post[0].node.readingTime,
    category: category.node.name,
    overview: post[0].node.content,
    language: language.node.name,
    slug: post[0].node.uri,
    content: post[0].node.content,
  }
}

// mapCardPost ---> This function was created to maintain the CardPost interface contract.
function mapCardPost(posts: PostsEdge[]): CardPost[] {
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
      language: language.node.name,
      slug: post.node.uri,
    }
  })
}
