import { CardPost } from "../../../constants/types/components_props/types"
import useDate from "../../../hook/useDate"
import SectionCardPost from "../../sections/card_post/SectionCardPost"
import styles from "../../../styles/components/listCardPost.module.scss"

interface ListCardPost {
  cardPosts: CardPost[]
}

export default function ListCardPost({ cardPosts }: ListCardPost) {
  const { transformDataToDataString, generateEndpointCardPost, truncateText } = useDate()
  return (
    <ul className={styles.container}>
      {cardPosts
        ? cardPosts.map((cardPost) => {
            const newDateString = transformDataToDataString(cardPost.data)
            const newEndPoint = generateEndpointCardPost({
              date: cardPost.data,
              title: cardPost.title,
            })
            const newDescription = truncateText(cardPost.description)
            return (
              <SectionCardPost
                className={styles.cardPost}
                key={cardPost.id}
                nameAuthor={cardPost.nameAuthor}
                datePost={newDateString}
                readingTime={cardPost.readingTime}
                hrefTitle={newEndPoint}
                title={cardPost.title}
                description={newDescription}
                hrefFooter={newEndPoint}
              />
            )
          })
        : null}
    </ul>
  )
}
