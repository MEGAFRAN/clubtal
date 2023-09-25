import React, { FC } from "react"
import styles from "../../styles/components/card-list.module.scss"
import { CardListProps } from "../../constants/interfaces/component_props/interfaces"
import cardListUtils from "./utils"
import useRenderCard from "./hooks"

const CardList: FC<CardListProps> = ({ cards, filteredSpecialities = [] }) => {
  const renderCard = useRenderCard({ filteredSpecialities })
  const sortedCards = [...cards].sort(cardListUtils.sortCards)

  return <div className={styles.container}>{sortedCards.map(renderCard)}</div>
}

export default CardList
