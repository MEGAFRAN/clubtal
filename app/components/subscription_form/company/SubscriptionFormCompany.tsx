import { useState } from "react"
import { Company } from "../../../constants/interfaces/content_models/interfaces"
import useCurrentPath from "../../../hook/useCurrentPath"
import InputList from "../../input_list/InputList"
import styles from "../../../styles/components/subscription-form.module.scss"
import subscriptionFormCompanyUtils from "./utils"

interface Props {
  categoryOptions: string[]
}

const SubscriptionForm: React.FC<Props> = ({ categoryOptions }) => {
  const isPaidUser = !useCurrentPath().includes("/basico")
  const [formData, setFormData] = useState<Company>(
    subscriptionFormCompanyUtils.defaultCompany(isPaidUser),
  )

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    subscriptionFormCompanyUtils.handleInputChange(event, formData, setFormData)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    subscriptionFormCompanyUtils.handleSubmit(event, formData)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
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
        Category:
        <select
          name="category"
          required
          value={formData.category._ref}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              category: { _ref: e.target.value, _type: "reference" },
            }))
          }
        >
          <option value="">Select an option</option>

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
          onChange={handleInputChange}
        />
      </label>
      <label>
        WhatsApp:
        <input
          type="number"
          name="whatsapp"
          value={formData.contact.whatsapp}
          onChange={handleInputChange}
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
      {["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"].map((day) => (
        <label key={day}>
          {day.charAt(0).toUpperCase() + day.slice(1)}:
          <input
            type="text"
            name={day}
            value={formData.schedule[day] || ""}
            onChange={handleInputChange}
          />
        </label>
      ))}
      {isPaidUser &&
        ["linkedin", "instagram", "facebook", "twitter", "youtube", "tiktok"].map((platform) => (
          <label key={platform}>
            {platform.charAt(0).toUpperCase() + platform.slice(1)}:
            <input
              type="text"
              name={platform}
              value={formData.socialMedia[platform]}
              onChange={handleInputChange}
            />
          </label>
        ))}
      <button type="submit">Submit</button>
    </form>
  )
}

export default SubscriptionForm
