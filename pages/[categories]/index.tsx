import React, { useState } from "react"
import styles from "../../app/styles/layouts/category.module.scss"
import PageHead from "../../app/components/page_head/PageHead"
import { getStaticPathsCategory, getStaticPropsCategory } from "../../lib/categories"
import { Category, Company } from "../../app/constants/interfaces/content_models/interfaces"
import CardList from "../../app/components/card_list/CardList"
import Breadcrumb from "../../app/components/breadcrumb/Breadcrumb"
import CardListFilter from "../../app/components/card_list_filter/CardListFilter"

export { getStaticPropsCategory as getStaticProps, getStaticPathsCategory as getStaticPaths }
const CategoryPage = ({ data }: { data: { category: Category; company: Company[] } }) => {
  const { metaDescription, title, slug } = data.category || {}
  const companies = data.company || []
  const [filteredSpecialities, setFilteredSpecialities] = useState<string[]>([])
  const allSpecialities = Array.from(
    new Set(companies.flatMap((company) => company.specialities || [])),
  )

  return (
    <>
      <PageHead
        description={metaDescription}
        title={`${title} | siaki`}
        locale={"es"}
        url={`https://www.siaki.co/${slug.current}`}
      />
      <main className={styles.container}>
        <header>
          <Breadcrumb />
          <CardListFilter specialities={allSpecialities} onFilterChange={setFilteredSpecialities} />
          <section>
            <h1>{title}</h1>
            <CardList cards={companies} filteredSpecialities={filteredSpecialities} />
          </section>
        </header>
      </main>
    </>
  )
}
export default CategoryPage
