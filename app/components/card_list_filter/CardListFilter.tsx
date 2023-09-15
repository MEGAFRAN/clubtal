import React, { FC, useState, useCallback, useEffect, useMemo } from "react"
import styles from "../../styles/components/card-list-filter.module.scss"

type CardListFilterProps = {
  specialities: string[]
  onFilterChange: (filteredSpecialities: string[]) => void
}

const CardListFilter: FC<CardListFilterProps> = ({ specialities, onFilterChange }) => {
  const [selectedSpecialities, setSelectedSpecialities] = useState<string[]>([])
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false)

  const handleCheckboxChange = useCallback(
    (speciality: string) => {
      if (selectedSpecialities.includes(speciality)) {
        setSelectedSpecialities((prev) => prev.filter((sp) => sp !== speciality))
      } else {
        setSelectedSpecialities((prev) => [...prev, speciality])
      }
    },
    [selectedSpecialities],
  )

  useEffect(() => {
    onFilterChange(selectedSpecialities)
  }, [selectedSpecialities, onFilterChange])

  const renderedSpecialities = useMemo(
    () =>
      specialities.map(
        (speciality, index) =>
          speciality && (
            <label key={index} className={styles.label}>
              <input
                type="checkbox"
                checked={selectedSpecialities.includes(speciality)}
                onChange={() => handleCheckboxChange(speciality)}
              />
              {speciality}
            </label>
          ),
      ),
    [specialities, selectedSpecialities, handleCheckboxChange],
  )

  return (
    <div className={styles.container}>
      <button onClick={() => setDialogOpen(true)} className={styles.filter_button}>
        Filtrar
      </button>
      <div className={styles.scrollable_filters}>{renderedSpecialities}</div>

      {isDialogOpen && (
        <div className={styles.overlay} onClick={() => setDialogOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div>
              {renderedSpecialities}
              <button onClick={() => setDialogOpen(false)} className={styles.close_button}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default React.memo(CardListFilter)
