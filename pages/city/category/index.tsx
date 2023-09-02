import React from "react"
import styles from "../../../app/styles/layouts/postDetail.module.scss"
import PageHead from "../../../app/components/page_head/PageHead"

// const getStaticProps = getStaticPropsSubCategoriesSlug
// const getStaticPaths = getStaticPathsSubCategoriesSlug
// export { getStaticPaths, getStaticProps }
const CategoryPage = ({ category }: any) => {
  const { description, name, slug } = category.fields
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

export default CategoryPage
