import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../../app/styles/layouts/postDetail.module.scss"
import PageHead from "../../app/components/page_head/PageHead"
import { getStaticPathsCategory, getStaticPropsCategory } from "../../lib/categories"
import { Category, Company } from "../../app/constants/interfaces/content_models/interfaces"

export { getStaticPropsCategory as getStaticProps, getStaticPathsCategory as getStaticPaths }
const CategoryPage = ({ data }: { data: { category: Category; items: [Company] } }) => {
  const { description, title, slug } = data.category
  const router = useRouter()
  const currentPath = router.asPath
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
          <h1>{title}</h1>
          <ul>
            {data.items.map((item) => (
              <Link
                key={item.title}
                href={`${currentPath}${item.slug.current}`}
                className="p-4 hover:bg-blue-50"
              >
                <h2>{item.title}</h2>
              </Link>
            ))}
          </ul>
        </header>
      </div>
    </>
  )
}
export default CategoryPage
