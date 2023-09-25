import { useCallback } from "react"
import { CardProps } from "../../constants/interfaces/component_props/interfaces"
import Card from "../card/Card"

interface UseRenderCardProps {
  filteredSpecialities: string[]
}

const useRenderCard = ({ filteredSpecialities }: UseRenderCardProps) =>
  useCallback(
    (card: CardProps, index: number) => {
      const isVisible =
        !filteredSpecialities.length ||
        filteredSpecialities.every((sp) => card.specialities?.includes(sp))

      return <Card key={index} {...card} style={{ display: isVisible ? "block" : "none" }} />
    },
    [filteredSpecialities],
  )

export default useRenderCard
