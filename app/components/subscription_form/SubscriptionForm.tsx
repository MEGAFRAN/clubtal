// components/SubscriptionForm.tsx
import { useState } from "react"
import { Company } from "../../constants/interfaces/content_models/interfaces"
import useCurrentPath from "../../hook/useCurrentPath"
import InputList from "../input_list/InputList"
import styles from "../../styles/components/subscription-form.module.scss"

interface Props {
  categoryOptions: string[]
}

const SubscriptionForm: React.FC<Props> = ({ categoryOptions }) => {
  const defaultIsPaidUser = useCurrentPath() !== "/basic"
  const [formData, setFormData] = useState<Company>({
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name in formData.contact) {
      setFormData((prevState) => ({
        ...prevState,
        contact: { ...prevState.contact, [name]: value },
      }))
    } else {
      let updatedData: Partial<Company> = { [name]: value }

      if (name === "name") {
        updatedData = {
          ...updatedData,
          title: value,
          slug: { current: value.split(" ").join("-"), _type: "slug" },
        }
      }

      if (name === "email") {
        const leftSideOfEmail = value.split("@")[0]
        // eslint-disable-next-line no-underscore-dangle
        updatedData._id = leftSideOfEmail
      }

      setFormData((prevState) => ({ ...prevState, ...updatedData }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Meta Description:
        <input
          type="text"
          name="metaDescription"
          value={formData.metaDescription}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category:
        <select
          name="category"
          // eslint-disable-next-line no-underscore-dangle
          value={formData.category._ref}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              category: { _ref: e.target.value, _type: "reference" },
            }))
          }
        >
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <InputList
        label="Specialities"
        values={formData.specialities || []}
        onChange={(updatedValues) =>
          setFormData((prevState) => ({ ...prevState, specialities: updatedValues }))
        }
      />
      <InputList
        label="Services"
        values={formData.services || []}
        onChange={(updatedValues) =>
          setFormData((prevState) => ({ ...prevState, services: updatedValues }))
        }
      />
      <label>
        Phone:
        <input
          type="number"
          name="phone"
          value={formData.contact.phone}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              contact: { ...prevState.contact, phone: Number(e.target.value) },
            }))
          }
        />
      </label>
      <label>
        WhatsApp:
        <input
          type="number"
          name="whatsapp"
          value={formData.contact.whatsapp}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              contact: { ...prevState.contact, whatsapp: Number(e.target.value) },
            }))
          }
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.contact.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Website:
        <input
          type="text"
          name="website"
          value={formData.contact.website}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              contact: { ...prevState.contact, website: e.target.value },
            }))
          }
        />
      </label>
      {/* Schedule fields */}
      {["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"].map((day) => (
        <label key={day}>
          {day.charAt(0).toUpperCase() + day.slice(1)}:
          <input
            type="text"
            name={day}
            value={formData.schedule[day] || ""}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                schedule: { ...prevState.schedule, [day]: e.target.value },
              }))
            }
          />
        </label>
      ))}
      {/* Social Media fields */}
      {["linkedin", "instagram", "facebook", "twitter", "youtube", "tiktok"].map((platform) => (
        <label key={platform}>
          {platform.charAt(0).toUpperCase() + platform.slice(1)}:
          <input
            type="text"
            name={platform}
            value={formData.socialMedia[platform]}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                socialMedia: { ...prevState.socialMedia, [platform]: e.target.value },
              }))
            }
          />
        </label>
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}

export default SubscriptionForm
