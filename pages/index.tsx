import React from "react"
import { getStaticPropsIndexContent } from "../lib/pages"
import PageHead from "../app/components/page_head/PageHead"
import { IndexContent } from "../app/constants/types/content_models/types"
import HeaderSearch from "../app/components/sections/above_fold/header_search/HeaderSearch"
import { Company } from "../app/constants/interfaces/content_models/interfaces"
import cmsCrud from "../lib/sanity/crud/crud"
import BottomBar from "../app/components/bottomBar/BottomBar"
import styles from "../app/styles/pages/index.module.scss"
import Breadcrumb from "../app/components/breadcrumb/Breadcrumb"
import EmailForm from "../app/components/email_form/EmailForm"
import MagicLinkLogin from "../app/components/magic_link_login/MagicLinkLogin"
import SectionUnderlineList from "../app/components/sections/underline_list/SectionUnderlineList"
import downloadAsset from "../app/services/form_services/download_asset/download-asset.service"

// const getStaticProps = getStaticPropsIndexContent
// export { getStaticProps }
const Home = ({ homePageData, categories }: IndexContent) => (
  // const { metaDescription, headerTitle } = homePageData || {}
  <>
    <PageHead description={""} title={"clubtal"} locale={"es"} url={"https://www.clubtal.dev"} />
    <Breadcrumb />
    <section className={styles.container}>
      <header>
        <h1>
          Mejoramos tu salario y calidad de vida como desarrollador de software, enseñándote
          habilidades blandas
        </h1>
        <p>*Pre-Lanzamiento</p>
        <p>
          <strong>
            Registrate y recibe gratis: Las 10 verdades de las vacantes de desarrollo de software
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
          "Articulos",
          "Contacto con especialistas",
          "Respuestas en vivo",
        ]}
        title="¿Que beneficios tendras?"
        buttonText="Quiero unirme"
        sectionToScroll="section-underline-list"
      />
      <section className={styles.why_join}>
        <h2>¿Por qué unirse?</h2>
        <p>
          CLUBTAL fue creado por un desarrollador, que durante la pandemia de COVID19, dejó su
          profesión como médico para aprender programación y así evitar que su familia se
          contagiara.
        </p>
        <p>
          Durante meses su familia vivió de ahorros, mientras aplicaba a vacantes Junior de
          desarrollo. Consiguió su primer trabajo como desarrollador Frontend Angular, sin siquiera
          saber git, angular o typescript !!!
        </p>
        <p>
          <strong>
            Todo gracias a las habilidades blandas y estrategias usadas en el proceso de selección
          </strong>
        </p>
        <p>
          Actualmente trabaja para una multinacional de USA, y gana más de 11 veces el salario de su
          primer empleo
        </p>
        <p>Tu puedes lograr esto y mucho más</p>
        <p>
          <strong>¿Quieres mejorar tu calidad de vida y salario como desarrollador?</strong>
        </p>
        <p>Únete a la lista de espera, y recibe gratis en tu correo:</p>
        <p>
          <strong>Las 10 verdades de las vacantes de desarrollo de software</strong>
        </p>
        <EmailForm />
      </section>
    </section>
  </>
)

export default Home
