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

export type LoadingProps = {
  isLoading: boolean
  maxProgress: number
  loadingMessage: string
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

export interface LinkNavigationProps {
  children: React.ReactNode
  href: string
  locale?: any
  skipLocaleHandling?: boolean
}
export type FileUploaderProps = {
  onDataUpdate: (data: string) => void
}

export type QuestionnarieProps = {
  questions: string[]
  options: string[]
  quizLogic: (ratings: Record<string, string>) => string
}

export type QuestionnarieFormState = {
  [key: string]: string
}

export type ParamsStaticProps = {
  params: {
    locale: string | undefined
    slug: string | undefined
  }
  locales: string[] | undefined
  locale: string | undefined
  defaultLocale: string | undefined
}
export interface GetI18Props {
  paramStatic: ParamsStaticProps
  ns: string[]
}

export interface MakeStaticProps {
  ns: string[]
}

export interface BlogPageProps {
  listPost: CardPost[]
}

export type PathsPost = {
  params: {
    locale: string
    slug: string
  }
}

export type LOCALES = "en" | "es"

export type LANGUAGE = "english" | "español"

export const LOCALES = {
  ENGLISH: "en",
  SPANISH: "es",
} as const

export const LANGUAGES = {
  ENGLISH: "english",
  SPANISH: "español",
} as const

export type pageHeadProps = {
  description: string
  title: string
  locale: string
  url: string
  favicon?: string
  name?: string
  themeColor?: string
}

export const RESULT_LANGUAGE_BY_LOCALE = {
  [LOCALES.ENGLISH]: LANGUAGES.ENGLISH,
  [LOCALES.SPANISH]: LANGUAGES.SPANISH,
}

export const RESULT_LOCALE_BY_LANGUAGE = {
  [LANGUAGES.ENGLISH]: LOCALES.ENGLISH,
  [LANGUAGES.SPANISH]: LOCALES.SPANISH,
}

export interface AuthorNode {
  id: string
  name: string
}
export interface Author {
  node: AuthorNode
}

export interface EdgeNode {
  name: string
}

export interface Edge {
  node: EdgeNode
}

export interface Categories {
  edges: Edge[]
}

export interface PostFromGraphqlNode {
  readingTime: string
  id: string
  title: string
  content: string
  uri: string
  date: Date
  author: Author
  categories: Categories
}

export interface PostsEdge {
  node: PostFromGraphqlNode
}

export interface Posts {
  edges: PostsEdge[]
}

export interface DataPost {
  posts: Posts
}

export interface PostFromGraphql {
  data: DataPost
}

export interface getPostByLocaleAndSlugParams {
  locale: LOCALES
  slug: string
}

export interface queryPostByLanguageAndSlug {
  language: LANGUAGE
  slug: string
}

export type CardProps = {
  title: string
  slug: { current: string }
  description: string
  features?: string[]
}

export type CardListProps = {
  cards: CardProps[]
}
