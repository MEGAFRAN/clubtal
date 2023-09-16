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
    contact,
    services,
    socialMedia,
    schedule,
    specialities,
  } = data.item
  const { phone, whatsapp, email } = contact
  const { linkedin, instagram, facebook, twitter, tiktok, youtube } = socialMedia
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
          {specialities && (
            <ul>
              {specialities.map((speciality, index) => (
                <li key={index}>{speciality}</li>
              ))}
            </ul>
          )}
          {phone && <p>telefono: {phone}</p>}
          {description && <p>descripcion: {description}</p>}
          {services && (
            <ul>
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          )}
          {schedule && (
            <ul>
              {Object.entries(schedule).map(([day, time]) => (
                <li key={day}>
                  {day}:{time}
                </li>
              ))}
            </ul>
          )}
          <h3>Contacto</h3>
          {phone && <p>telefono: {phone}</p>}
          {whatsapp && <p>whatsapp: {whatsapp}</p>}
          {email && <p>email: {email}</p>}
          <h3>Redes sociales</h3>
          {linkedin && <p>linkedin: {linkedin}</p>}
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
