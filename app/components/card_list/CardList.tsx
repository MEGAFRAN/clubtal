import React, { FC, useCallback } from "react"
import styles from "../../styles/components/card-list.module.scss"
import Card from "../card/Card"
import { CardListProps, CardProps } from "../../constants/types/components_props/types"

const CardList: FC<CardListProps> = ({ cards }) => {
  const renderCard = useCallback(
    (card: CardProps, index: number) => <Card key={index} {...card} />,
    [],
  )

  return <div className={styles.container}>{cards.map(renderCard)}</div>
}

export default CardList
