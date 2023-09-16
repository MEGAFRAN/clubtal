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
      <nav>
        {phone && (
          <a href={`tel:${phone}`} aria-label="Numero de telefono">
            tel:{phone}
          </a>
        )}
        {whatsapp && (
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            whatsapp:{whatsapp}
          </a>
        )}
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer" aria-label="Sitio web">
            {website}
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} aria-label="email">
            {email}
          </a>
        )}
      </nav>
    </div>
  )
}

export default React.memo(Card)
