import { useEffect, useState } from "react"
import { CardPost, Post } from "../constants/types/components_props/types"

interface usePostParams {
  yearFilter?: number
  posts?: Post[]
}
export default function usePost({ yearFilter, posts }: usePostParams) {
  const [cardPost, setCardPost] = useState<CardPost[]>([])
  const [loading, setLoading] = useState<boolean>(true)

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
  interface filterCardPostByYearParams {
    year: number
    postsToFilter: Post[]
  }
  const filterPostByYear = ({ year, postsToFilter }: filterCardPostByYearParams) => {
    const filteredPost = postsToFilter.filter((postFilter) => {
      const yearPost = postFilter.data.getFullYear()
      return yearPost === year
    })
    const cardPosts = mapPostToCardPost(filteredPost)
    setCardPost(cardPosts)
  }

  useEffect(() => {
    if (yearFilter && posts) {
      setTimeout(() => {
        filterPostByYear({ year: yearFilter, postsToFilter: posts })
        setLoading(false)
      }, 100)
    }
  }, [yearFilter])
  return { cardPost, loading }
}
