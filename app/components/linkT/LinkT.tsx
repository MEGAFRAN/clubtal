import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

interface LinkTProps {
  children: React.ReactNode
  href: string
  locale?: any
  skipLocaleHandling?: boolean
}
const LinkComponent = ({ children, skipLocaleHandling, ...rest }: LinkTProps) => {
  const router = useRouter()
  const locale = rest.locale || router.query.locale || ""

  let href = rest.href || router.asPath
  if (href.indexOf("http") === 0) skipLocaleHandling = true
  if (locale && !skipLocaleHandling) {
    href = href ? `/${locale}${href}` : router.pathname.replace("[locale]", locale)
  }

  return (
    <>
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    </>
  )
}

export default LinkComponent
