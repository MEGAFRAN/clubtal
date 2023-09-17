import styles from "../../../app/styles/layouts/company.module.scss"
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
  const { phone } = contact
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
          <section className={styles.summary}>
            <h1>{title}</h1>
            {specialities && (
              <ul className={styles.specialities}>
                {specialities.map((speciality, index) => (
                  <li key={index}>{speciality}</li>
                ))}
              </ul>
            )}
            {phone && <p className={styles.phone}>telefono: {phone}</p>}
            {description && <p className={styles.description}>{description}</p>}
          </section>
          {services && (
            <section className={styles.services}>
              <h2>Servicios</h2>
              <ul className={styles.services}>
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </section>
          )}
          {schedule && (
            <section className={styles.schedule}>
              <h2>Horario</h2>
              <ul>
                {Object.entries(schedule).map(([day, time]) => (
                  <li key={day}>
                    {day}:{time}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {contact && (
            <section className={styles.contact}>
              <h2>Contacto</h2>
              {Object.entries(contact).map(([key, value]) => {
                if (key === "website") {
                  return (
                    <p key={key}>
                      {key}: <a href={value.toString()}>{value}</a>
                    </p>
                  )
                }
                return (
                  <p key={key}>
                    {key}: {value}
                  </p>
                )
              })}
            </section>
          )}

          {socialMedia && (
            <section className={styles.social_media}>
              <h2>Redes sociales</h2>
              {Object.entries(socialMedia).map(([key, value]) => (
                <p key={key}>
                  {key}: <a href={value.toString()}>{value}</a>
                </p>
              ))}
            </section>
          )}
        </header>
      </div>
    </>
  )
}

export default CompanyPage
