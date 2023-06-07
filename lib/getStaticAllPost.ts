import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import i18nextConfig from "../next-i18next.config"
import { getMetaDataOfPostByLocale } from "./posts"
import {
  ParamsStaticProps,
  GetI18Props,
  MakeStaticProps,
  LOCALES,
} from "../app/constants/types/components_props/types"
import { getI18nPaths } from "./getStatic"

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
})

export async function getI18nProps({ paramStatic, ns = ["common"] }: GetI18Props) {
  const locale = paramStatic?.params?.locale || i18nextConfig.i18n.defaultLocale
  const props = {
    ...(await serverSideTranslations(locale, ns)),
  }
  return props
}

export function makeStaticProps({ ns = [] }: MakeStaticProps) {
  return async function getStaticProps(paramStatic: ParamsStaticProps) {
    const locale = (paramStatic?.params?.locale || i18nextConfig.i18n.defaultLocale) as LOCALES
    const allPostData = await getMetaDataOfPostByLocale(locale)

    const i18Configuration = await getI18nProps({ paramStatic, ns })
    return {
      props: { listPost: allPostData, ...i18Configuration },
    }
  }
}
