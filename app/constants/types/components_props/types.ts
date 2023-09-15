import { MouseEventHandler } from "react"

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

export type ListProps = {
  listData: string[]
}

export type ButtonProps = {
  text: string
  style: "cta" | "regular" | "navbar"
  scrollToSection?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  linkTo?: string
}

export type FormProps = {
  text?: string[]
  endpoint?: string
  title: string
  placeholder: string
  callToAction: string
  invalidMessage: string
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
  buttonTextEnglish: string
  handleClickEnglish: () => void
  buttonTextSpanish: string
  handleClickSpanish: () => void
  scrollToSection: string
  styleButton: "cta" | "regular"
}

export type ErrorPageProps = {
  statusCode?: number
  message?: string
}

export type ChatbotProps = {
  onClose?: () => void
}

export interface ChatbotSkeletonColors {
  one: string
  two: string
  three: string
  four: string
  five: string
  six: string
  seven: string
}

export type ChatbotSkeletonProps = {
  colors: ChatbotSkeletonColors
}

type homeNavbarOptions = {
  name: string
  link: string
  extraLink?: boolean
}

export interface NavbarProps {
  options?: homeNavbarOptions[]
  buttonText?: string[]
  sectionToScroll?: string
  mail?: string
  withToogleMenu?: boolean
  withLanguageToggle?: boolean
  withLoginButton?: boolean
  withContactButton?: boolean
  withHomeButton?: boolean
}

export interface SectionTitleListProps {
  title: string
  description: string[]
  id: string
}

export interface HeaderSearchProps {
  title: string
  text: string
  categories: string[]
}

export interface HeaderProps {
  navbarOptions?: homeNavbarOptions[]
  title: string
  text: string
  buttonText: string[]
  sectionToScroll?: string
  withMagicLink?: boolean
  callToAction: string
}

export interface SectionContactProps {
  title: string
}

export interface SectionQuizContentProps {
  titles: string[]
  paragraphs: string[]
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

export interface SectionContentPageProps {
  content: Record<string, any>
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
  id: string
  author: string
  body: string
  slug: string
  date: string
}

export interface Post extends CardPost {
  content: string
}

export interface SectionCardPostProps extends SectionAboutPostProps {
  title: string
  hrefTitle: string
  description: string
  hrefFooter: string
  className?: string
}

export type LoginFormProps = {
  onSubmit: (email: string) => Promise<void>
  isSubmitting: boolean
  message: string
}

export interface MagicLinkResponse {
  token: string
}

export type LoadingProps = {
  isLoading: boolean
  maxProgress: number
  loadingMessage: string
}

export interface MagicLink {
  button: string
  messageOk: string
  messageFail: string
}
export interface HomePageProps {
  headerTitle: string[]
  headerText: string[]
  headerButtons: string[]
  sectionInnerRounded: SectionGeneralProps
  sectionUnderLineList: SectionGeneralProps
  sectionDottedCard: SectionGeneralProps
  sectionHamburger: SectionGeneralProps
  form: SectionContactProps
  chatbot: ChatbotProps
  sectionContact: string
}

export type FileUploaderProps = {
  onDataUpdate: (data: string) => void
}

export type pageHeadProps = {
  description: string
  title: string
  locale: string
  url: string
  favicon?: string
  name?: string
  themeColor?: string
}

export type CardProps = {
  title: string
  slug: { current: string }
  description: string
  specialities?: string[]
  phone?: number
  whatsapp?: number
  website?: string
  email?: string
  style?: { display: "block" | "none" }
}

export type CardListProps = {
  cards: CardProps[]
}
