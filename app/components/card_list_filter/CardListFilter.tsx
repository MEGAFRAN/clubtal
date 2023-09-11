import React, { FC, useState } from "react"
import styles from "../../styles/components/card-list-filter.module.scss"

type CardListFilterProps = {
  specialities: string[]
  onFilterChange: (filteredSpecialities: string[]) => void
}

const CardListFilter: FC<CardListFilterProps> = ({ specialities, onFilterChange }) => {
  const [selectedSpecialities, setSelectedSpecialities] = useState<string[]>([])

  const handleCheckboxChange = (speciality: string) => {
    if (selectedSpecialities.includes(speciality)) {
      setSelectedSpecialities((prev) => prev.filter((sp) => sp !== speciality))
    } else {
      setSelectedSpecialities((prev) => [...prev, speciality])
    }
  }

  React.useEffect(() => {
    onFilterChange(selectedSpecialities)
  }, [selectedSpecialities, onFilterChange])

  return (
    <div className={styles.container}>
      {specialities.map((speciality, index) => (
        <label key={index} className={styles.label}>
          <input
            type="checkbox"
            checked={selectedSpecialities.includes(speciality)}
            onChange={() => handleCheckboxChange(speciality)}
          />
          {speciality}
        </label>
      ))}
    </div>
  )
}

export default CardListFilter
