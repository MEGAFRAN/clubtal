import { CardPost } from "../../../constants/types/components_props/types"
import useDate from "../../../hook/useDate"
import SectionCardPost from "../../sections/card_post/SectionCardPost"
import styles from "../../../styles/components/listCardPost.module.scss"

export default function ListCardPost({ listPost }: any) {
  const { truncateText, generateEndpointCardPost } = useDate()

  return (
    <ul className={styles.container}>
      {listPost
        ? listPost.map((cardPost: any) => {
            const { title, author, summary } = cardPost.fields
            const newDescription = truncateText(summary)
            const endPoint = generateEndpointCardPost({ title })

            return (
              <SectionCardPost
                className={styles.card_post}
                key={title}
                nameAuthor={author.content[0].content[0].value}
                hrefTitle={endPoint}
                title={title}
                description={newDescription}
                hrefFooter={endPoint}
              />
            )
          })
        : null}
    </ul>
  )
}
