// CardList.tsx
import React, { FC } from "react"
import Link from "next/link"
import styles from "../../styles/components/card.module.scss"
import { CardProps } from "../../constants/types/components_props/types"
import useCurrentPath from "../../hook/useCurrentPath"

const Card: FC<CardProps> = ({ title, slug, description, features }) => {
  const currentPath = useCurrentPath()
  return (
    <Link className={styles.container} key={title} href={`${currentPath}${slug.current}`}>
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
  )
}

export default React.memo(Card)
