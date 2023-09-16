import React, { FC, useCallback } from "react"
import styles from "../../styles/components/card-list.module.scss"
import Card from "../card/Card"
import { CardListProps, CardProps } from "../../constants/interfaces/component_props/interfaces"

const CardList: FC<CardListProps> = ({ cards, filteredSpecialities = [] }) => {
  const renderCard = useCallback(
    (card: CardProps, index: number) => {
      const isVisible =
        !filteredSpecialities.length ||
        card.specialities?.some((sp) => filteredSpecialities.includes(sp))

      return <Card key={index} {...card} style={{ display: isVisible ? "block" : "none" }} />
    },
    [filteredSpecialities],
  )

  return <div className={styles.container}>{cards.map(renderCard)}</div>
}

export default CardList
