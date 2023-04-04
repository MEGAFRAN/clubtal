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
  listData: string[]
}

export type ButtonProps = {
  text: string
  style: "cta" | "regular"
  scrollToSection?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  linkTo?: string
}

export type FormProps = {
  text: string[]
  endpoint?: string
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

export type ChatbotProps = {
  onClose: () => void
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
  withLanguageToggle?: boolean
  withLoginButton?: boolean
}

export interface SectionTitleListProps {
  title: string
  description: string[]
  id: string
}

export interface LandingPageProps extends NavbarProps, FormProps, HeadingProps {
  textInformation: string[]
}

export interface JobDetailProps extends NavbarProps, FormProps {
  titleJob: string
  descriptionJob: string
  taskJob: SectionTitleListProps
  requirementsJob: SectionTitleListProps
  aboutCompany: SectionTitleListProps
}

export interface HeaderProps {
  navbarOptions: homeNavbarOptions[]
  setSecondaryLanguage: LanguageToogleProps["setSecondaryLanguage"]
  title: string[]
  text: string[]
  buttonText: string[]
  sectionToScroll: string
}

export interface SectionContactProps {
  title: string
  formText: string[]
}

export interface SectionGeneralProps {
  listData: string[]
  title: string
  subTitle?: string
  buttonText: string
  sectionToScroll?: string
  linkTo?: string
}
export interface SectionAboutPostProps {
  nameAuthor: string
  datePost: string
  readingTime: string
  id?: string
  className?: string
}

type ContentPost = {
  titleContent: string
  descriptionContent: string
  id?: string
}

export interface SectionContentPostProps {
  contentPost: ContentPost[]
}

export interface Post {
  title: string
  id: number
  nameAuthor: string
  data: Date
  readingTime: string
  category: string
  contentPost: ContentPost[]
}

export interface ChatbotMessage {
  role: "system" | "user" | "assistant"
  content: string
}

export interface ChatbotTagGroups {
  metaDescription: string[]
  title: string[]
  h1: string[]
  h2: string[]
  h3: string[]
  a: string[]
  p: string[]
  span: string[]
  [key: string]: string[]
}

export interface CardPost {
  title: string
  id: number
  nameAuthor: string
  data: Date
  readingTime: string
  category: string
  description: string
}

export interface SectionCardPostProps extends SectionAboutPostProps {
  title: string
  hrefTitle: string
  description: string
  hrefFooter: string
  className?: string
}
