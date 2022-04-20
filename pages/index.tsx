import type { NextPage } from 'next'
import { Header } from '../app/components/sections/above_fold/header/Header'
import { Advantages } from '../app/components/sections/advantages/Advantages'
import { SupportedBy } from '../app/components/sections/supported_by/SupportedBy'
import { UseCases } from '../app/components/sections/use_cases/UseCase'


const Home: NextPage = () => {

  const homeNavbarOptions = [{name: 'servicios', link: '/'}, {name: 'precios', link: '/'}]

  const tokensUseCases = [
    'Darselos a quien quieras: (Pareja, familia, amigos)', 'Venderlos: (Clientes, Fans)', 'Subastarlos',
    'Como premio: (Concursos)', 'Como recuerdo: (Matrimonios, cumpleaños, aniversarios, bautizos)', 
    'Crear beneficios especiales para poseedores: (Acceso VIP, descuentos)', 
    'Utilizarlos como moneda en tu comunidad', 'Cualquier idea que tengas la creamos en crypto'
  ]
  
  const blockchainAdvantages = [
    'Segura', 'Verificable', 'Dificil de alterar', 'Descentralizada', 'Accesible', 'Igualitaria'
  ]

  const solanaStats = [
    'Desarrollamos Tokens SPL en Solana','Red con un valor mayor a 30 billones de dolares', 
    'Minimos costos por transaccion', 'Gran velocidad', 
    'Mas de 1700 nodos asegurando la infraestructura'
  ]

  return (

    <>
      <Header navbarOptions={homeNavbarOptions}/>
      <UseCases listData={tokensUseCases}/>
      <Advantages listData={blockchainAdvantages}/>
      <SupportedBy listData={solanaStats}/>
    </>
  )
}

export default Home
