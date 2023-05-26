import Link from "next/link"
import { CardPost, NavbarProps } from "../../../../constants/types/components_props/types"
import ListCardPost from "../../../list/card_post/ListCardPost"
import styles from "../../../../styles/layouts/postPage.module.scss"
import Navbar from "../../../sections/above_fold/navbar/Navbar"

interface PostPageProps extends NavbarProps {
  yearPost: number
  posts: CardPost[]
}
export default function PostPage({
  options,
  buttonText,
  mail,
  withLanguageToggle,
  yearPost,
  posts,
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
        <ListCardPost listPost={posts} />
      </main>
    </div>
  )
}
