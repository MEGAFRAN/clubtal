import { Dispatch, SetStateAction } from "react"
import { Company } from "../../../constants/interfaces/content_models/interfaces"
import cmsCrud from "../../../../lib/sanity/crud/crud"
import formatTextUtils from "../../../../lib/format/text"

const defaultCompany = (defaultIsPaidUser: boolean): Company => ({
  _id: "",
  _type: "company",
  name: "",
  title: "",
  slug: { current: "", _type: "slug" },
  description: "",
  metaDescription: "",
  isPaidUser: defaultIsPaidUser,
  specialities: [],
  category: { _ref: "", _type: "reference" },
  services: [],
  contact: {
    phone: 0,
    whatsapp: 0,
    email: "",
    website: "",
  },
  schedule: {},
  socialMedia: {
    linkedin: "",
    instagram: "",
    facebook: "",
    twitter: "",
    youtube: "",
    tiktok: "",
  },
})

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, formData: Company) => {
  event.preventDefault()
  console.log(formData)
  // await cmsCrud.createCompany(formData)
}

const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  formData: Company,
  setFormData: Dispatch<SetStateAction<Company>>,
) => {
  const { name, value } = event.target

  let updatedData: Partial<Company> = { [name]: value }

  if (name === "email") {
    // eslint-disable-next-line no-underscore-dangle
    updatedData._id = formatTextUtils.getLeftSideOfEmail(value)
  }

  if (name === "name") {
    updatedData = {
      ...updatedData,
      title: formatTextUtils.capitalizeFirstLetter(value),
      slug: { current: formatTextUtils.createSlug(value), _type: "slug" },
    }
  }

  if (name in formData.contact) {
    setFormData((prevState: Company) => ({
      ...prevState,
      ...updatedData,
      contact: { ...prevState.contact, [name]: value },
    }))
  } else {
    setFormData((prevState: Company) => ({ ...prevState, ...updatedData }))
  }
}

const subscriptionFormCompanyUtils = {
  handleSubmit,
  handleInputChange,
  defaultCompany,
}

export default subscriptionFormCompanyUtils
