import styles from "../../../app/styles/layouts/postDetail.module.scss"
import PageHead from "../../../app/components/page_head/PageHead"
import { getStaticPathsItem, getStaticPropsItem } from "../../../lib/companies"

const getStaticProps = getStaticPropsItem
const getStaticPaths = getStaticPathsItem
export { getStaticPaths, getStaticProps }
const CompanyPage = ({ data }: { data: { item: any } }) => {
  const { description, title, slug } = data.item
  return (
    <>
      <PageHead
        description={description}
        title={title}
        locale={"es"}
        url={`https://www.siaki.co/${slug}`}
      />
      <div className={styles.container}>
        <header>
          <h1>{title}</h1>
        </header>
      </div>
    </>
  )
}

export default CompanyPage
