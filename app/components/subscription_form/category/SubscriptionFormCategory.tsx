import { useState } from "react"
import styles from "../../../styles/components/subscription-form.module.scss"
import subscriptionFormCategoryUtils from "./utils"
import { Category } from "../../../constants/interfaces/content_models/interfaces"

const SubscriptionFormCategory: React.FC = () => {
  const [formData, setFormData] = useState<Category>(
    subscriptionFormCategoryUtils.defaultCategory(),
  )

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    subscriptionFormCategoryUtils.handleInputChange(event, setFormData)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    subscriptionFormCategoryUtils.handleSubmit(event, formData)
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
      <button type="submit">Submit</button>
    </form>
  )
}

export default SubscriptionFormCategory
