import type { NextPage } from 'next'
import { Navbar } from '../app/components/structure/header/Navbar'
import { HomeProvider } from '../app/contexts/Home'



const Home: NextPage = () => {

  return (

    <section>

      <HomeProvider>

        <Navbar />

      </HomeProvider>
      
    </section>
    
  )
}

export default Home
