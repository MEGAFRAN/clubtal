import { NextPage } from "next"
import LoginForm from "../../app/components/login_form/login_form"
import styles from "../../app/styles/pages/register.module.scss"
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic"

const Register: NextPage = () => (
  <section className={styles.container}>
    <LoginForm />
  </section>
)

export default Register
// ns ---> is variable of next-i18next that should to have array strings these strings are names of files that we want to translate in this page
const ns = ["pages/burnOutQuiz", "components/text"]
const getStaticProps = makeStaticProps({ ns })
export { getStaticPaths, getStaticProps }
