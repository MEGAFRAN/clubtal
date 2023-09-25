import { Dispatch, SetStateAction } from "react"
import { Company } from "../../../constants/interfaces/content_models/interfaces"
import cmsCrud from "../../../../lib/sanity/crud/crud"
import formatTextUtils from "../../../../lib/format/text"

const defaultCompany: Company = {
  _id: "",
  _type: "company",
  title: "",
  slug: { current: "", _type: "slug" },
  description: "",
  isPaidUser: false,
  specialities: [],
  category: { _ref: "", _type: "reference" },
  services: [],
  contact: {
    phone: 0,
    whatsapp: 0,
    email: "",
    website: "",
  },
  schedule: {
    lunes: "",
    martes: "",
    miercoles: "",
    jueves: "",
    viernes: "",
    sabado: "",
    domingo: "",
  },
  socialMedia: {
    linkedin: "",
    instagram: "",
    facebook: "",
    twitter: "",
    youtube: "",
    tiktok: "",
  },
}

/* const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, formData: Company) => {
  event.preventDefault()
  await cmsCrud.createCompany(formData)
  await cmsCrud.addCompanyToCategoryReference(formData.category._ref, formData._id)
} */

const handleSubmit = (
  event: React.FormEvent<HTMLFormElement>,
  setState: Dispatch<SetStateAction<boolean>>,
): void => {
  event.preventDefault()
  setState(true)
}

const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  formData: Company,
  setFormData: Dispatch<SetStateAction<Company>>,
) => {
  const { name, value } = event.target

  let updatedData: Partial<Company> = { [name]: value }

  if (name === "title") {
    updatedData = {
      ...updatedData,
      title: value.toLowerCase(),
      slug: { current: formatTextUtils.createSlug(value), _type: "slug" },
    }
  }

  if (name === "category") {
    updatedData = {
      ...updatedData,
      category: { _ref: value, _type: "reference" },
    }
  }

  if (name in formData.contact) {
    if (name === "email") {
      setFormData((prevState: Company) => ({
        ...prevState,
        _id: formatTextUtils.getLeftSideOfEmail(value),
        contact: { ...prevState.contact, [name]: value },
      }))

      return
    }

    const validatedValue = name === "whatsapp" || name === "phone" ? Number(value) : value

    setFormData((prevState: Company) => ({
      ...prevState,
      contact: { ...prevState.contact, [name]: validatedValue },
    }))

    return
  }

  if (name in formData.schedule) {
    setFormData((prevState: Company) => ({
      ...prevState,
      schedule: { ...prevState.schedule, [name]: value },
    }))

    return
  }

  if (name in formData.socialMedia) {
    setFormData((prevState: Company) => ({
      ...prevState,
      socialMedia: { ...prevState.socialMedia, [name]: value },
    }))

    return
  }

  setFormData((prevState: Company) => ({ ...prevState, ...updatedData }))
}

const subscriptionFormCompanyUtils = {
  handleSubmit,
  handleInputChange,
  defaultCompany,
}

export default subscriptionFormCompanyUtils
