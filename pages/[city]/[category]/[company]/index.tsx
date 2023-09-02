import styles from "../../../../app/styles/layouts/postDetail.module.scss"
import { getStaticPathsBlogSlug, getStaticPropsBlogSlug } from "../../../../lib/blog"
import PageHead from "../../../../app/components/page_head/PageHead"

const getStaticProps = getStaticPropsBlogSlug
const getStaticPaths = getStaticPathsBlogSlug
export { getStaticPaths, getStaticProps }
const CompanyPage = ({ company }: any) => {
  const { description, name, slug } = company
  return (
    <>
      <PageHead
        description={description}
        title={name}
        locale={"es"}
        url={`https://www.siaki.co/${slug}`}
      />
      <div className={styles.container}>
        <header>
          <h1>{name}</h1>
        </header>
      </div>
    </>
  )
}

export default CompanyPage
