interface GeneralInformation {
  name: string
  id: string
  slug: string
  description: string
}

export interface IndividualCategory extends GeneralInformation {
  subcategories: string[]
}

export interface Company extends GeneralInformation {
  category: string
  subcategories: string[]
}

export interface Category {
  categories: {
    [category: string]: IndividualCategory
  }
}
