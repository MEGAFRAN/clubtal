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
  const yearPost = stringToArray[0]
  const monthPost = stringToArray[1]
  const dayPost = stringToArray[2]
  return { yearPost, monthPost, dayPost }
}

const functionPost = {
  mapPostToCardPost,
  getYearMonthDayFromString,
}

export default functionPost
