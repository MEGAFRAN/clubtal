/* eslint-disable no-param-reassign */
import { LinkProps } from "../../constants/types/components_props/types"

const Link = ({
  text,
  href = "",
  target = "_self",
  children,
  isDownload = false,
  isOpenNewWindow = false,
  emailAddress = "",
  rel,
  referrerpolicy,
}: LinkProps) => {
  const downloadAssetPath = isDownload ? href.substring(href.lastIndexOf("/") + 1) : null
  if (isOpenNewWindow) target = "_blank"
  if (emailAddress) href = `mailto:${emailAddress}`

  return (
    <a
      href={href}
      target={target}
      download={downloadAssetPath}
      rel={rel}
      referrerPolicy={referrerpolicy}
    >
      {text}
      {children}
    </a>
  )
}
export default Link
