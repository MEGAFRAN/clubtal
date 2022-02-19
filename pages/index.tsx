import type { NextPage } from 'next'
import { Button } from '../app/components/button/Button'
import { Link } from '../app/components/link/Link'
import { Navbar } from '../app/components/structure/header/Navbar'
import { Text } from '../app/components/text/Text'



const Home: NextPage = () => {

  let dummyText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries,
  but also the leap into electronic typesetting, remaining essentially unchanged.
  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

  return (

    <section>

      <Navbar />

      <Link emailAddress="fulanito@gmail.com">
        <Button text="soy el boton linkeado"/>
      </Link>

      <Text text={dummyText}  alignment="justify"/>

      
      
    </section>
    
  )
}

export default Home
