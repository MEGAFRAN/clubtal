import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import i18nextConfig from "../next-i18next.config"
import {
  GetI18Props,
  LOCALES,
  MakeStaticProps,
  ParamsStaticProps,
} from "../app/constants/types/components_props/types"
import { getAllPathsOfPost, getFileByLocaleAndTitle } from "./posts"

export const getStaticPathsEs = () => {
  const paths = getAllPathsOfPost(LOCALES.SPANISH)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticPathsEn = () => {
  const paths = getAllPathsOfPost(LOCALES.ENGLISH)
  return {
    paths,
    fallback: false,
  }
}

export async function getI18nProps({ paramStatic, ns = ["common"] }: GetI18Props) {
  const locale = paramStatic?.params?.locale || i18nextConfig.i18n.defaultLocale
  const props = {
    ...(await serverSideTranslations(locale, ns)),
  }
  return props
}

export function makeStaticProps({ ns = [] }: MakeStaticProps) {
  return async function getStaticProps(paramStatic: ParamsStaticProps) {
    const locale = paramStatic?.params?.locale || i18nextConfig.i18n.defaultLocale
    const title = paramStatic?.params?.title as string
    const fileContent = await getFileByLocaleAndTitle({ locale, title })
    const i18Configuration = await getI18nProps({ paramStatic, ns })
    if (fileContent === null) return { notFound: true }
    const { frontMatter, source } = fileContent
    return {
      props: { frontMatter, source, ...i18Configuration },
    }
  }
}
