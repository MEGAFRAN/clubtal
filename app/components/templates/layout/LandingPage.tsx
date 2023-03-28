import { LandingPageProps } from "../../../constants/types/components_props/types"
import Form from "../../form/Form"
import Title from "../../heading/Heading"
import { Navbar } from "../../sections/above_fold/navbar/Navbar"
import styles from "../../../styles/layouts/landingPage.module.scss"

const LandingPage = ({
  title,
  headingType,
  textInformation,
  options,
  buttonText,
  mail,
  withLanguageToggle,
  text,
  endpoint,
}: LandingPageProps) => (
  <main className={styles.container}>
    <Navbar
      options={options}
      buttonText={buttonText}
      mail={mail}
      withLanguageToggle={withLanguageToggle}
    />
    <section>
      <aside>
        <Title headingType={headingType} title={title} />
        <ul>
          {textInformation && textInformation.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </aside>
      <Form text={text} endpoint={endpoint} />
    </section>
  </main>
)
export default LandingPage
