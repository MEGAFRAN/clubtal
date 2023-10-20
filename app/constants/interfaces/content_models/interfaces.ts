interface SanityItem {
  _type: string
  _id?: string
}

interface GeneralInformation extends SanityItem {
  title: string
  slug: { current: string; _type: "slug" }
  description: string
}

export interface Schedule {
  lunes?: string
  martes?: string
  miercoles?: string
  jueves?: string
  viernes?: string
  sabado?: string
  domingo?: string
  [key: string]: string | undefined
}

export interface Company extends GeneralInformation {
  isPaidUser: boolean
  reviews?: [{ stars: number; comment: string }]
  specialities?: string[]
  category: { _ref: string; _type: "reference" }
  services?: string[]
  contact: {
    phone: number
    whatsapp: number
    email: string
    website: string
  }
  schedule: Schedule
  socialMedia: {
    linkedin: string
    instagram: string
    facebook: string
    twitter: string
    youtube: string
    tiktok: string
    [key: string]: string | undefined
  }
}

export interface Category extends GeneralInformation {
  companies: Company[]
  name: string
  metaDescription: string
}

export interface UserEmail extends SanityItem {
  _type: "userEmail"
  title: string
}
