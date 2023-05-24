import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import i18nextConfig from "../next-i18next.config"
import { Ctx, GetI18Props, MakeStaticProps } from "../app/constants/types/components_props/types"
import { getAllPathsOfPost, getFileByLocaleAndTitle } from "./posts"

export const getStaticPaths = () => {
  const paths = getAllPathsOfPost()
  return {
    paths,
    fallback: false,
  }
}

export async function getI18nProps({ ctx, ns = ["common"] }: GetI18Props) {
  const locale = ctx?.params?.locale || i18nextConfig.i18n.defaultLocale
  const props = {
    ...(await serverSideTranslations(locale, ns)),
  }
  return props
}

export function makeStaticProps({ ns = [] }: MakeStaticProps) {
  return async function getStaticProps(ctx: Ctx) {
    const locale = ctx?.params?.locale || i18nextConfig.i18n.defaultLocale
    const title = ctx?.params?.title as string
    const { frontMatter, source } = await getFileByLocaleAndTitle({ locale, title })
    const i18Configuration = await getI18nProps({ ctx, ns })
    return {
      props: { frontMatter, source, ...i18Configuration },
    }
  }
}
