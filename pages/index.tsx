import type { NextPage } from 'next'
import { Header } from '../app/components/sections/above_fold/header/Header'
import { UseCases } from '../app/components/sections/use_cases/UseCase'


const Home: NextPage = () => {

  const homeNavbarOptions = [{name: 'servicios', link: '/'}, {name: 'precios', link: '/'}]
  const tokensUseCases = ['Darselos a cualquier persona que quieras', 'Venderlos', 'Subastarlos',
                          'Darlos como premio', 'Darlos como recuerdo', 
                          'Crear beneficios especiales para poseedores', 
                          'Utilizarlos como moneda en tu comunidad']

  return (

    <>
      <Header navbarOptions={homeNavbarOptions}/>
      <UseCases listData={tokensUseCases}/>
    </>
  )
}

export default Home
