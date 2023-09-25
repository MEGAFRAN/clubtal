// components/PriceCards.tsx
import React from "react"
import styles from "../../styles/components/price-card.module.scss"

interface PriceCardProps {
  name: string
  description: string
  yearlyCost: number
  features: string[]
  callToActionText: string
  onActionClick?: () => void
}

interface Props {
  plans: PriceCardProps[]
}

const PriceCards: React.FC<Props> = ({ plans }) => (
  <div className={styles.container}>
    {plans.map((plan, index) => (
      <div key={index} className={styles.card}>
        <h2>{plan.name}</h2>
        <p>{plan.description}</p>
        {plan.yearlyCost ? <span>Anual: ${plan.yearlyCost}</span> : <span>Gratis</span>}
        <ol>
          {plan.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ol>
        <button onClick={plan.onActionClick}>{plan.callToActionText}</button>
      </div>
    ))}
  </div>
)

export default PriceCards
