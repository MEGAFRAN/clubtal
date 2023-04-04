import React from "react"
import { useRouter } from "next/router"
import HOME_TEXT from "../../../app/services/pages/home-text"
import PostPage from "../../../app/components/templates/blog/postPage/PostPage"
import post from "../../../app/services/pages/blog/post"
import NotFound from "../../404"
import usePost from "../../../app/hook/usePost"

function Year() {
  const router = useRouter()
  const { pathname, query } = router
  const { year } = query
  const numberYear = Number(year)
  const isHomePage = pathname === "/"
  const currentLanguage = { ...HOME_TEXT.spanishText }
  const { homeNavbarOptions, ctaButtonTexts } = currentLanguage
  const { cardPost, loading } = usePost({ yearFilter: numberYear, posts: post })
  const haveCardPost = cardPost?.length > 0

  if (!loading && haveCardPost)
    return (
      <PostPage
        options={homeNavbarOptions}
        buttonText={ctaButtonTexts[0]}
        mail={"info@clubtal.com"}
        withLanguageToggle={isHomePage}
        yearPost={numberYear}
        cardPosts={cardPost}
      />
    )
  if (!loading && !haveCardPost) return <NotFound />
  return null
}

export default Year
