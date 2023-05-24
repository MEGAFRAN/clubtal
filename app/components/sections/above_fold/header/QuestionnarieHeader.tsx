import styles from "../../../../styles/sections/questionnarie-header.module.scss"

const QuestionnarieHeader = ({ title, children }: any) => (
  <header className={styles.container}>
    <h1>{title}</h1>
    {children}
  </header>
)
export default QuestionnarieHeader
