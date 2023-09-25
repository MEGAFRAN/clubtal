import React from "react"
import PageHead from "../../app/components/page_head/PageHead"
import PriceCards from "../../app/components/price_card/PriceCard"

const PlansPage = () => {
  const pricingPlans = [
    {
      name: "Premium",
      description: "Si quieres aumentar la visibilidad y ventas de tu negocio o servicio",
      yearlyCost: 120000,
      features: [
        "Pagina web con informacion de tu servicio",
        "Recibir pagos desde el sitio web",
        "Prioridad en busquedas",
        "Redes sociales",
        "Calificaciones y opiniones",
        "Información de contacto en pagina de busqueda",
        "Exposicion ilimitada a todos los usuarios de siaki",
        "1 post publicitario en el blog",
        "Actualizaciones",
      ],
      callToActionText: "Comprar premium",
      onActionClick: () => alert("Premium plan selected!"),
    },
    {
      name: "Basic",
      description: "Si quieres probar la plataforma",
      yearlyCost: 0,
      features: ["Pagina web con informacion de tu servicio"],
      callToActionText: "Subscribete",
      onActionClick: () => alert("Basic plan selected!"),
    },
  ]
  return (
    <>
      <PageHead description={""} title={"siaki"} locale={"es"} url={"https://www.siaki.co"} />
      <h1>Planes</h1>
      <PriceCards plans={pricingPlans} />
    </>
  )
}

export default PlansPage
