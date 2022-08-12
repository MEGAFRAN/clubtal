import { LinkProps } from "../../constants/types/components_props/types"

export const Link = ({
  text,
  href,
  target,
  children,
  isDownload,
  isOpenNewWindow,
  emailAddress,
  rel,
  referrerpolicy,
}: LinkProps) => {
  let downloadAssetPath = isDownload
    ? href.substring(href.lastIndexOf("/") + 1)
    : null
  isOpenNewWindow ? (target = "_blank") : null
  emailAddress ? (href = `mailto:${emailAddress}`) : null

  return (
    <a
      href={href}
      target={target}
      download={downloadAssetPath}
      rel={rel}
      referrerPolicy={referrerpolicy}
    >
      {children}

      {text}
    </a>
  )
}

Link.defaultProps = {
  text: "default text",
  href: "",
  target: "_self",
  isDownload: false,
  isOpenNewWindow: false,
  emailAddress: "",
}
