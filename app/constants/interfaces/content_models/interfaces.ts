interface GeneralInformation {
  name: string
  title: string
  id: string
  slug: { current: string }
  description: string
  metaDescription: string
}

export interface Category extends GeneralInformation {}

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
  schedule: {
    lunes: string
    martes: string
    miercoles: string
    jueves: string
    viernes: string
    sabado: string
    domingo: string
  }
  socialMedia: {
    linkedin: string
    instagram: string
    facebook: string
    twitter: string
    youtube: string
    tiktok: string
  }
}
