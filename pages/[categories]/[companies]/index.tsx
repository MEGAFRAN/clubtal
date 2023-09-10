import styles from "../../../app/styles/layouts/postDetail.module.scss"
import PageHead from "../../../app/components/page_head/PageHead"
import { getStaticPathsItem, getStaticPropsItem } from "../../../lib/companies"
import { Company } from "../../../app/constants/interfaces/content_models/interfaces"

export { getStaticPropsItem as getStaticProps, getStaticPathsItem as getStaticPaths }
const CompanyPage = ({ data }: { data: { item: Company } }) => {
  const {
    name,
    title,
    id,
    slug,
    description,
    category,
    phone,
    whatsapp,
    instagram,
    facebook,
    twitter,
    youtube,
    tiktok,
  } = data.item
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
          {description && <p>descripcion: {description}</p>}
          {phone && <p>telefono: {phone}</p>}
          {whatsapp && <p>whatsapp: {whatsapp}</p>}
          {instagram && <p>instagram: {instagram}</p>}
          {facebook && <p>facebook: {facebook}</p>}
          {twitter && <p>twitter: {twitter}</p>}
          {youtube && <p>youtube: {youtube}</p>}
          {tiktok && <p>tiktok: {tiktok}</p>}
        </header>
      </div>
    </>
  )
}

export default CompanyPage
