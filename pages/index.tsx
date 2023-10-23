import React from "react"
import PageHead from "../app/components/page_head/PageHead"
import { IndexContent } from "../app/constants/types/content_models/types"
import styles from "../app/styles/pages/index.module.scss"
import EmailForm from "../app/components/email_form/EmailForm"
import SectionUnderlineList from "../app/components/sections/underline_list/SectionUnderlineList"
import SectionAnalytics from "../app/components/sections/analytics/SectionAnalytics"

// const getStaticProps = getStaticPropsIndexContent
// export { getStaticProps }
const Home = ({ homePageData, categories }: IndexContent) => (
  // const { metaDescription, headerTitle } = homePageData || {}
  <>
    <PageHead
      description={
        "¿Quieres mejorar tu sueldo como desarrollador de software? Te enseñamos estrategias para aumentar tu sueldo como programador. ¡Entra y descubre cómo!"
      }
      title={"Aumenta tu sueldo como desarrollador de software, Clubtal te enseña"}
      locale={"es"}
      url={"https://clubtal.dev"}
    />
    <section className={styles.container}>
      <header>
        <h1>Aumenta tu sueldo como desarrollador de software, Clubtal te enseña</h1>
        <p>
          <strong>
            Regístrate y recibe gratis: Las 10 verdades de las vacantes de desarrollo de software
          </strong>
        </p>
        <p>#1: Juego de probabilidades, #2: No siempre gana el mejor y 8 verdades más</p>
        <span>(lo que nadie te cuenta)</span>
        <EmailForm />
      </header>
      <SectionUnderlineList
        listData={[
          "Cursos",
          "Videos",
          "Ebooks",
          "Artículos",
          "Contacto con especialistas",
          "Respuestas en vivo",
        ]}
        title="¿Qué beneficios tendrás?"
        buttonText="Quiero unirme"
        sectionToScroll="section-underline-list"
      />
      <section className={styles.why_join}>
        <h2>¿Por qué unirse?</h2>
        <p>
          CLUBTAL fue creado por un desarrollador que, durante la pandemia de COVID-19, dejó su
          profesión como médico para aprender programación y así evitar que su familia se
          contagiara.
        </p>
        <p>
          Durante meses su familia vivió de ahorros mientras aplicaba a vacantes Junior de
          desarrollo. Consiguió su primer trabajo como desarrollador Frontend Angular, ¡sin siquiera
          saber git, angular o typescript!
        </p>
        <p>
          <strong>
            Todo gracias a las habilidades blandas y estrategias usadas en el proceso de selección.
          </strong>
        </p>
        <p>
          Actualmente trabaja para una multinacional de USA y gana más de 11 veces el sueldo de su
          primer empleo.
        </p>
        <p>Tú puedes lograr esto y mucho más.</p>
        <p>
          <strong>¿Quieres mejorar tu calidad de vida y sueldo como desarrollador?</strong>
        </p>
        <p>Únete a la lista de espera y recibe gratis en tu correo:</p>
        <p>
          <strong>Las 10 verdades de las vacantes de desarrollo de software.</strong>
        </p>
        <EmailForm />
      </section>
    </section>
    <SectionAnalytics />
  </>
)

export default Home
