import { JobDetailProps } from "../../../constants/types/components_props/types"
import Form from "../../form/Form"
import Title from "../../heading/Heading"
import { Navbar } from "../../sections/above_fold/navbar/Navbar"
import SectionTitleList from "../../sections/title_list/SectionTitleList"
import styles from "../../../styles/layouts/vacancyCurrent.module.scss"

const JobDetail = ({
  options,
  buttonText,
  mail,
  withLanguageToggle,
  titleJob,
  descriptionJob,
  taskJob,
  requirementsJob,
  aboutCompany,
  text,
}: JobDetailProps) => (
  <main className={styles.container}>
    <Navbar
      options={options}
      buttonText={buttonText}
      mail={mail}
      withLanguageToggle={withLanguageToggle}
    />
    <section className={styles.title}>
      <Title title={titleJob} headingType="h1" />
    </section>
    <p>{descriptionJob}</p>
    <SectionTitleList title={taskJob.title} description={taskJob.description} id={taskJob.id} />
    <SectionTitleList
      title={requirementsJob.title}
      description={requirementsJob.description}
      id={requirementsJob.id}
    />
    <SectionTitleList
      title={aboutCompany.title}
      description={aboutCompany.description}
      id={aboutCompany.id}
    />
    <Form text={text} />
  </main>
)
export default JobDetail
