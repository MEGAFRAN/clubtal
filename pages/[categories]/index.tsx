import React from "react"
import styles from "../../app/styles/layouts/category.module.scss"
import PageHead from "../../app/components/page_head/PageHead"
import { getStaticPathsCategory, getStaticPropsCategory } from "../../lib/categories"
import { Category, Company } from "../../app/constants/interfaces/content_models/interfaces"
import CardList from "../../app/components/card_list/CardList"
import Navbar from "../../app/components/sections/above_fold/navbar/Navbar"
import Breadcrumb from "../../app/components/breadcrumb/Breadcrumb"

export { getStaticPropsCategory as getStaticProps, getStaticPathsCategory as getStaticPaths }
const CategoryPage = ({ data }: { data: { category: Category; items: [Company] } }) => {
  const { description, title, slug } = data.category

  return (
    <>
      <PageHead
        description={description}
        title={title}
        locale={"es"}
        url={`https://www.siaki.co/${slug.current}`}
      />
      <div className={styles.container}>
        <header>
          <Breadcrumb />
          <section>
            <h1>{title}</h1>
            <CardList cards={data.items} />
          </section>
        </header>
      </div>
    </>
  )
}
export default CategoryPage
