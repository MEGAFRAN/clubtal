import type { NextPage } from 'next'
import { Header } from '../app/components/structure/above_fold/header/Header'




const Home: NextPage = () => {

  const homeNavbarOptions = [{name: 'servicios', link: '/'}, {name: 'precios', link: '/'}]

  return (

    <Header navbarOptions={homeNavbarOptions}/>
    
  )
}

export default Home
