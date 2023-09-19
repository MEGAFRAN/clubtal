import React from "react"
import { getStaticPropsIndexContent } from "../lib/pages"
import PageHead from "../app/components/page_head/PageHead"
import { IndexContent } from "../app/constants/types/content_models/types"
import HeaderSearch from "../app/components/sections/above_fold/header_search/HeaderSearch"
import { Company } from "../app/constants/interfaces/content_models/interfaces"
import cmsCrud from "../lib/sanity/crud/crud"

const getStaticProps = getStaticPropsIndexContent
export { getStaticProps }
const Home = ({ homePageData, categories }: IndexContent) => {
  const { metaDescription, headerTitle } = homePageData || {}

  const companyData: Company = {
    _id: "2022-programadores-anibal",
    _type: "programadores",
    name: "anibal",
    title: "anibal",
    slug: { current: "anibal", _type: "slug" },
    description: "soy anibal el terrible",
    metaDescription: "soy anibal el terrible",
    specialities: ["backend", "java", "spring"],
    category: { _ref: "26ea48c6-f2e8-4141-9fe9-cb802a3c6e28", _type: "reference" },
    services: ["reseteo de computador", "backup base de datos"],
    contact: {
      phone: 88992,
      whatsapp: 88992,
      email: "testing@mj.com",
      website: "www.qui.com",
    },
    schedule: {
      lunes: "",
      martes: "",
      miercoles: "",
      jueves: "",
      viernes: "",
      sabado: "",
      domingo: "",
    },
    socialMedia: {
      linkedin: "linkedin.com",
      instagram: "instagram.com",
      facebook: "facebook.com",
      twitter: "twitter.com",
      youtube: "youtube.com",
      tiktok: "tiktok.com",
    },
  }

  return (
    <>
      <PageHead
        description={metaDescription}
        title={"siaki"}
        locale={"es"}
        url={"https://www.siaki.co"}
      />
      <HeaderSearch categories={categories} title={headerTitle} text="" />
      <button onClick={() => cmsCrud.createCompany(companyData)}>Crear usuario random</button>
      <button onClick={() => cmsCrud.deleteDocument("2022-programadores-anibal")}>
        Borrar usuario
      </button>
    </>
  )
}

export default Home
