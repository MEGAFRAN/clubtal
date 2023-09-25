import { CardProps } from "../../constants/interfaces/component_props/interfaces"

const sortCards = (cardA: CardProps, cardB: CardProps): number => {
  if (cardB.isPaidUser && !cardA.isPaidUser) {
    return 1
  }
  if (cardA.isPaidUser && !cardB.isPaidUser) {
    return -1
  }
  return 0
}

const cardListUtils = {
  sortCards,
}

export default cardListUtils
