import {
  FormProps,
  NavbarProps,
  SectionAboutPostProps,
  SectionContentPostProps,
} from "../../../../constants/types/components_props/types"
import Button from "../../../button/Button"
import Title from "../../../heading/Heading"
import SectionAboutPost from "../../../sections/about_post/SectionAboutPost"
import SectionContentPost from "../../../sections/content_post/SectionContentPost"
import styles from "../../../../styles/layouts/postDetail.module.scss"
import Navbar from "../../../sections/above_fold/navbar/Navbar"
import SectionContact from "../../../sections/contact/SectionContact"

interface PostDetailProps
  extends NavbarProps,
    SectionAboutPostProps,
    SectionContentPostProps,
    FormProps {
  titlePost: string
}
function PostDetail({
  options,
  buttonText,
  mail,
  withLanguageToggle,
  titlePost,
  nameAuthor,
  datePost,
  readingTime,
  contentPost,
  text,
}: PostDetailProps) {
  return (
    <div className={styles.container}>
      <Navbar
        options={options}
        buttonText={buttonText}
        mail={mail}
        withLanguageToggle={withLanguageToggle}
      />
      <main>
        <header>
          <Title title={titlePost} headingType="h1" />
        </header>
        <SectionAboutPost
          className={styles.about}
          nameAuthor={nameAuthor}
          datePost={datePost}
          readingTime={readingTime}
        />
        <SectionContentPost contentPost={contentPost} />
      </main>

      <SectionContact title="Contáctanos" formText={text} />
      <footer role={"toolbar"}>
        <Button text="Contáctanos" style="cta" scrollToSection="#section-contact" />
      </footer>
    </div>
  )
}
export default PostDetail
