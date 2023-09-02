import styles from "../../app/styles/layouts/postDetail.module.scss"
import PageHead from "../../app/components/page_head/PageHead"
import { getStaticPathsCategoriesSlug, getStaticPropsCategoriesSlug } from "../../lib/categories"

const getStaticProps = getStaticPropsCategoriesSlug
const getStaticPaths = getStaticPathsCategoriesSlug
export { getStaticPaths, getStaticProps }
const CityPage = ({ city }: any) => {
  const { description, name, slug } = city.fields
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

export default CityPage
