interface GeneralInformation {
  name: string
  title: string
  id: string
  slug: { current: string }
  description: string
}

export interface Category extends GeneralInformation {}

export interface Company extends GeneralInformation {
  specialities?: string[]
  category: string
  phone: number
  whatsapp: number
  instagram: string
  facebook: string
  twitter: string
  youtube: string
  tiktok: string
}
