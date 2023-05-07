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

export type CardProps = {
  id?: string
  tags?: []
  title?: string
  imageUrl?: string
  description?: string
  featured?: boolean
}

export type LanguageToogleProps = {
  mainLanguage?: "Eng"
  secondaryLanguage?: "Esp"
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
  onClose?: () => void
  initialMessage: string
  inputPlaceholderText: string
  sendButtonText: string
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

export type ColorPickerProps = {
  label?: string
  onChange: (color: string) => void
  initialHex: string
}

type homeNavbarOptions = {
  name: string
  link: string
  extraLink?: boolean
}

export interface NavbarProps {
  options?: homeNavbarOptions[]
  buttonText: string[]
  sectionToScroll?: string
  mail: string
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
  navbarOptions?: homeNavbarOptions[]
  title: string[]
  text: string[]
  buttonText: string[]
  sectionToScroll?: string
  withMagicLink?: boolean
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

export interface SectionContentPageProps {
  content: Record<string, any>
}

export interface Post {
  title: string
  id: number
  nameAuthor: string
  data: string
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
  data: string
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
export interface LanguageContextValue {
  userLanguage: "english" | "español"
  setUserLanguage: (userLanguage: "english" | "español") => void
}

export interface PageMonthProps {
  listPost: Post[]
}

export type LoginFormProps = {
  onSubmit: (email: string) => Promise<void>
  isSubmitting: boolean
  message: string
}

export interface MagicLinkResponse {
  token: string
}

export type TextAnalysisProps = {
  textCta: string
  inputCta: string
  textAreaPlaceholder: string
  inputPlaceholder: string
  buttonText: string
  requiredValueMessage: string
  loadingText: string
  userLanguage: string
}

export type LoadingProps = {
  isLoading: boolean
  buttonText: string
  loadingText: string
  maxProgress: number
}

type CurrentLanguage = {
  userLanguage: string
}

export type SocialSharingProps = CurrentLanguage

export interface SentimentAnalysisState {
  id: string
  warnings: string[]
  sentiment: string
  confidenceScores: {
    positive: number
    neutral: number
    negative: number
  }
  sentences: {
    text: string
    sentiment: string
    confidenceScores: {
      positive: number
      neutral: number
      negative: number
    }
    offset: number
    length: number
    opinions: any[]
  }[]
}

export interface KeyPhrasesState {
  id: string
  warnings: string[]
  keyPhrases: string[]
}

export interface EntityRecognitionState {
  id: string
  warnings: string[]
  entities: {
    text: string
    category: string
    offset: number
    length: number
    confidenceScore: number
  }[]
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

export interface ButtonLocaleProps {
  currentLocale: string | string[]
}

export interface LinkNavigationProps {
  children: React.ReactNode
  href: string
  locale?: any
  skipLocaleHandling?: boolean
}
export type FileUploaderProps = {
  onDataUpdate: (data: string) => void
}
