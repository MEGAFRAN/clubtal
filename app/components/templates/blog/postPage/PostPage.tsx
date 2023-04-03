import Link from "next/link"
import { CardPost, NavbarProps } from "../../../../constants/types/components_props/types"
import ListCardPost from "../../../list/card_post/ListCardPost"
import Navbar from "../../../sections/above_fold/navbar/Navbar"
import styles from "../../../../styles/layouts/postPage.module.scss"

interface PostPageProps extends NavbarProps {
  yearPost: number
  cardPosts: CardPost[]
}
export default function PostPage({
  options,
  buttonText,
  mail,
  withLanguageToggle,
  yearPost,
  cardPosts,
}: PostPageProps) {
  return (
    <div className={styles.container}>
      <Navbar
        options={options}
        buttonText={buttonText}
        mail={mail}
        withLanguageToggle={withLanguageToggle}
      />
      <header>
        <h1>Año: {yearPost}</h1>
        <div>
          <Link href={"/"}>Inicio</Link> / <span>{yearPost}</span>
        </div>
      </header>
      <main>
        <ListCardPost cardPosts={cardPosts} />
      </main>
    </div>
  )
}
