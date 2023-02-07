import { Dispatch, MouseEventHandler, SetStateAction } from "react"

export type TextProps = {
  text: string
  alignment?: "initial" | "center" | "left" | "right" | "justify" | "inherit"
}

export type LinkProps = {
  text?: string
  href: string
  target?: "_self" | "_blank"
  children?: any
  isDownload?: boolean
  isOpenNewWindow?: boolean
  emailAddress?: string
  rel?: "external" | "next" | "prev" | "nofollow"
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url"
}

export type CardProps = {
  id?: string
  tags?: []
  title?: string
  imageUrl?: string
  description?: string
  featured?: boolean
}

export type LanguageToogleProps = {
  setSecondaryLanguage?: Dispatch<SetStateAction<boolean>>
  mainLanguage?: "Español"
  secondaryLanguage?: "English"
}

export type ListProps = {
  listData: []
}

export type ButtonProps = {
  text: string
  style: "cta" | "regular"
  scrollToSection: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export type FormProps = {
  text: string[]
}

export type HeadingProps = {
  title: string
  headingType: "h1" | "h2" | "h3"
}

export type ImageProps = {
  src: string
  height: string
  width: string
  loading: "eager" | "lazy"
}

export type TableProps = {
  tableHeaders: []
  tableRows: []
}

export type Error404Props = {
  text: string
  buttonText: string
  handleClick: () => void
  scrollToSection: string
  styleButton: "cta" | "regular"
}

export type ErrorPageProps = {
  statusCode?: number
  message?: string
}

type homeNavbarOptions = {
  name: string
  link: string
  extraLink?: boolean
}

export interface NavbarProps {
  options: homeNavbarOptions[]
  setSecondaryLanguage?: LanguageToogleProps["setSecondaryLanguage"]
  buttonText: string
  sectionToScroll?: string
  mail: string
  withLanguageToggle: boolean
}

export interface LandingPageProps extends NavbarProps, FormProps, HeadingProps {
  textInformation: string[]
}
