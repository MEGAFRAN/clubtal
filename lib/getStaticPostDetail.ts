import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import i18nextConfig from "../next-i18next.config"
import { Ctx, GetI18Props, MakeStaticProps } from "../app/constants/types/components_props/types"

export const getStaticPaths = () => {
  const paths = [
    {
      params: {
        locale: "en",
        title: "software-for-counts",
      },
    },
    {
      params: {
        locale: "es",
        title: "software-para-conteos",
      },
    },
  ]
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
    return {
      props: await getI18nProps({ ctx, ns }),
    }
  }
}
