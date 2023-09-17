// CardList.tsx
import React, { FC } from "react"
import Link from "next/link"
import styles from "../../styles/components/card.module.scss"
import useCurrentPath from "../../hook/useCurrentPath"
import { CardProps } from "../../constants/interfaces/component_props/interfaces"

const Card: FC<CardProps> = ({ title, slug, description, specialities, contact, style }) => {
  const currentPath = useCurrentPath()
  const { whatsapp, phone, website, email } = contact
  return (
    <div className={styles.container} style={style}>
      <Link key={title} href={`${currentPath}${slug.current}`}>
        <div className={styles.card}>
          <h2>{title}</h2>
          {specialities && (
            <ul>
              {specialities.map((speciality, index) => (
                <li key={index}>{speciality}</li>
              ))}
            </ul>
          )}
          <p>{description}</p>
        </div>
      </Link>
      <address>
        <dl>
          {phone && (
            <>
              <dt>tel</dt>
              <dd>
                <a href={`tel:${phone}`} aria-label="Numero de telefono">
                  {phone}
                </a>
              </dd>
            </>
          )}
          {whatsapp && (
            <>
              <dt>whatsapp</dt>
              <dd>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  {whatsapp}
                </a>
              </dd>
            </>
          )}
          {website && (
            <>
              <dt>sitio web</dt>
              <dd>
                <a href={website} target="_blank" rel="noopener noreferrer" aria-label="Sitio web">
                  {website}
                </a>
              </dd>
            </>
          )}
          {email && (
            <>
              <dt>email</dt>
              <dd>
                <a href={`mailto:${email}`} aria-label="email">
                  {email}
                </a>
              </dd>
            </>
          )}
        </dl>
      </address>
    </div>
  )
}

export default React.memo(Card)
