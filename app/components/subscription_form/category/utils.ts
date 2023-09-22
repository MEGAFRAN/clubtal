import { Dispatch, SetStateAction } from "react"
import { Category } from "../../../constants/interfaces/content_models/interfaces"
import cmsCrud from "../../../../lib/sanity/crud/crud"
import formatTextUtils from "../../../../lib/format/text"

const defaultCategory = (): Category => ({
  _id: "",
  _type: "category",
  name: "",
  title: "",
  slug: { current: "", _type: "slug" },
  description: "",
  metaDescription: "",
  companies: [],
})

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, formData: Category) => {
  event.preventDefault()
  await cmsCrud.createCategory(formData)
}

const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFormData: Dispatch<SetStateAction<Category>>,
) => {
  const { name, value } = event.target

  let updatedData: Partial<Category> = { [name]: value }

  if (name === "name") {
    updatedData = {
      ...updatedData,
      _id: value,
      title: formatTextUtils.capitalizeFirstLetter(value),
      slug: { current: formatTextUtils.createSlug(value), _type: "slug" },
    }
  }

  setFormData((prevState: Category) => ({ ...prevState, ...updatedData }))
}

const subscriptionFormCategoryUtils = {
  handleSubmit,
  handleInputChange,
  defaultCategory,
}

export default subscriptionFormCategoryUtils
