interface GeneralInformation {
  _id: string
  _type: string
  name: string
  title: string
  slug: { current: string; _type: "slug" }
  description: string
  metaDescription: string
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
  }
}

export interface Category extends GeneralInformation {
  companies: Company[]
}
