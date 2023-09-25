import { Dispatch, SetStateAction } from "react"

const getPricingPlan = (
  setBasicPlanState: Dispatch<SetStateAction<boolean>>,
  setPremiumPlanState: Dispatch<SetStateAction<boolean>>,
) => [
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
    callToActionText: "Ser premium",
    onActionClick: () => setPremiumPlanState(true),
  },
  {
    name: "Basico",
    description: "Si quieres probar la plataforma",
    yearlyCost: 0,
    features: ["Pagina web con informacion de tu servicio"],
    callToActionText: "Ser basico",
    onActionClick: () => setBasicPlanState(true),
  },
]

export default getPricingPlan
