import { Company } from "../content_models/interfaces"

export interface CardProps extends Company {
  style?: { display: "block" | "none" }
}

export interface CardListProps {
  cards: CardProps[]
  filteredSpecialities?: string[]
}
