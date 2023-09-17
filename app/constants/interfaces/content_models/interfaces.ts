interface GeneralInformation {
  name: string
  title: string
  id: string
  slug: { current: string }
  description: string
  metaDescription: string
}

export interface Category extends GeneralInformation {}

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
  specialities?: string[]
  category: string
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
  }
}
