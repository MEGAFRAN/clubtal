// CardList.tsx
import React, { FC } from "react"
import Link from "next/link"
import styles from "../../styles/components/card.module.scss"
import { CardProps } from "../../constants/types/components_props/types"
import useCurrentPath from "../../hook/useCurrentPath"

const Card: FC<CardProps> = ({
  title,
  slug,
  description,
  features,
  phone,
  whatsapp,
  website,
  email,
}) => {
  const currentPath = useCurrentPath()
  return (
    <div className={styles.container}>
      <Link key={title} href={`${currentPath}${slug.current}`}>
        <div className={styles.card}>
          <h2>{title}</h2>
          <p>{description}</p>
          {features && (
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
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
