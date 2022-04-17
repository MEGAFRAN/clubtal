import type { NextPage } from 'next'
import { List } from '../app/components/list/List'
import { Header } from '../app/components/structure/above_fold/header/Header'


const Home: NextPage = () => {

  const homeNavbarOptions = [{name: 'servicios', link: '/'}, {name: 'precios', link: '/'}]
  const tokensUseCases = ['Darselos a cualquier persona que quieras', 'Venderlos', 'Subastarlos',
                          'Darlos como premio', 'Darlos como recuerdo', 
                          'Crear beneficios especiales para poseedores', 
                          'Utilizarlos como moneda en tu comunidad']

  return (

    <>
      <Header navbarOptions={homeNavbarOptions}/>

      <section className=''>

        <h2>¿Que podras hacer con tu crypto / token?</h2>
        <List listData={tokensUseCases}/>

      </section>
    </>
  )
}

export default Home
