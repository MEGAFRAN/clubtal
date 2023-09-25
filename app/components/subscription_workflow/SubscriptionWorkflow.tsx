import React, { useState } from "react"
import PriceCards from "../price_card/PriceCard"
import getPricingPlan from "../price_card/utils"
import SubscriptionForm from "../subscription_form/company/SubscriptionFormCompany"
import styles from "../../styles/components/subscription-workflow.module.scss"

const SubscriptionWorkflow: React.FC<any> = () => {
  const [wasFormSubmitted, setWasFormSubmitted] = useState<boolean>(false)
  const [wasBasicPlanSelected, setWasBasicPlanSelected] = useState<boolean>(false)
  const [wasPremiumPlanSelected, setWasPremiumPlanSelected] = useState<boolean>(false)
  const isShownSubscriptionForm =
    !wasFormSubmitted && !wasBasicPlanSelected && !wasPremiumPlanSelected
  const isShownPriceCards = wasFormSubmitted && !wasBasicPlanSelected && !wasPremiumPlanSelected

  return (
    <div className={styles.container}>
      {isShownSubscriptionForm && (
        <SubscriptionForm
          categoryOptions={["medicos", "abogados"]}
          setState={setWasFormSubmitted}
        />
      )}
      {isShownPriceCards && (
        <PriceCards plans={getPricingPlan(setWasBasicPlanSelected, setWasPremiumPlanSelected)} />
      )}
      <div className={styles.success}>
        {wasBasicPlanSelected && (
          <span>
            BASICO SELECCIONADO - Bienvenido a SIAKI. Estamos construyendo tu pagina web, en menos
            de 24 horas la tendras disponible
          </span>
        )}
        {wasPremiumPlanSelected && (
          <span>
            PREMIUM SELECCIONADO - Bienvenido a SIAKI. Estamos construyendo tu pagina web, en menos
            de 24 horas la tendras disponible
          </span>
        )}
      </div>
    </div>
  )
}

export default SubscriptionWorkflow
