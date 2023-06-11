import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import i18nextConfig from "../next-i18next.config"
import {
  GetI18Props,
  LOCALES,
  MakeStaticProps,
  ParamsStaticProps,
} from "../app/constants/types/components_props/types"
import { getAllPathsOfPost, getPostByLocaleAndSlug } from "./posts"

export const getStaticPathsEs = async () => {
  const paths = await getAllPathsOfPost(LOCALES.SPANISH)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticPathsEn = async () => {
  const paths = await getAllPathsOfPost(LOCALES.ENGLISH)
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
    const locale = (paramStatic?.params?.locale || i18nextConfig.i18n.defaultLocale) as LOCALES
    const slug = paramStatic?.params?.slug as string
    const post = await getPostByLocaleAndSlug({ locale, slug })
    const i18Configuration = await getI18nProps({ paramStatic, ns })
    if (!post) {
      return {
        notFound: true,
      }
    }
    return {
      props: { post, ...i18Configuration },
    }
  }
}
