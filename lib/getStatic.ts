import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import i18nextConfig from "../next-i18next.config"
import {
  GetI18Props,
  MakeStaticProps,
  ParamsStaticProps,
} from "../app/constants/types/components_props/types"

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng,
    },
  }))

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
    return {
      props: await getI18nProps({ paramStatic, ns }),
    }
  }
}
