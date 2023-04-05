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

export default mapPostToCardPost
