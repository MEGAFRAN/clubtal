import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import i18nextConfig from "../next-i18next.config"
import { getMetaDataOfPostByLocale, sortPostByDate } from "./posts"
import { Ctx, GetI18Props, MakeStaticProps } from "../app/constants/types/components_props/types"
import { getI18nPaths } from "./getStatic"

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
})

export async function getI18nProps({ ctx, ns = ["common"] }: GetI18Props) {
  const locale = ctx?.params?.locale || i18nextConfig.i18n.defaultLocale
  const props = {
    ...(await serverSideTranslations(locale, ns)),
  }
  return props
}

export function makeStaticProps({ ns = [] }: MakeStaticProps) {
  return async function getStaticProps(ctx: Ctx) {
    const locale = ctx?.params?.locale || (i18nextConfig.i18n.defaultLocale as string)
    const allPostData = await getMetaDataOfPostByLocale(locale)
    const sortAllPostData = sortPostByDate(allPostData)
    const i18Configuration = await getI18nProps({ ctx, ns })
    return {
      props: { listPost: sortAllPostData, ...i18Configuration },
    }
  }
}
