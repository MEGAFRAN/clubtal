import { CardPost, LANGUAGE } from "../../../constants/types/components_props/types"
import useDate from "../../../hook/useDate"
import SectionCardPost from "../../sections/card_post/SectionCardPost"
import styles from "../../../styles/components/listCardPost.module.scss"

interface ListCardPost {
  listPost: CardPost[]
}

export default function ListCardPost({ listPost }: ListCardPost) {
  const { transformDataToDataString, truncateText, generateEndpointCardPost } = useDate()

  return (
    <ul className={styles.container}>
      {listPost
        ? listPost.map((cardPost) => {
            const data = cardPost.date
            const language = cardPost.locale as LANGUAGE
            const newDateString = transformDataToDataString({ data, language })
            const newDescription = truncateText(cardPost.overview)
            const endPoint = generateEndpointCardPost({
              title: cardPost.title,
            })
            return (
              <SectionCardPost
                className={styles.card_post}
                key={cardPost.title.concat(cardPost.date)}
                nameAuthor={cardPost.nameAuthor}
                datePost={newDateString}
                readingTime={cardPost.readingTime}
                hrefTitle={endPoint}
                title={cardPost.title}
                description={newDescription}
                hrefFooter={endPoint}
              />
            )
          })
        : null}
    </ul>
  )
}
