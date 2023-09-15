import React, { FC, useState, useRef, useEffect, useCallback, useMemo } from "react"
import styles from "../../styles/components/card-list-filter.module.scss"

type CardListFilterProps = {
  specialities: string[]
  onFilterChange: (filteredSpecialities: string[]) => void
}

const CardListFilter: FC<CardListFilterProps> = ({ specialities, onFilterChange }) => {
  const [selectedSpecialities, setSelectedSpecialities] = useState<string[]>([])
  const dialogRef = useRef<HTMLDialogElement>(null)
  const filterButtonRef = useRef<HTMLButtonElement>(null)

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

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    if (dialogRef.current) {
      const rect = dialogRef.current.getBoundingClientRect()
      const isOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom

      if (isOutside) {
        dialogRef.current.close()
      }
    }
  }, [])

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick)

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [handleOutsideClick])

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
      <button
        ref={filterButtonRef}
        onClick={() => dialogRef.current?.showModal()}
        className={styles.filter_button}
      >
        Filtrar
      </button>
      <div className={styles.scrollable_filters}>{renderedSpecialities}</div>

      <dialog ref={dialogRef}>
        <div>
          {renderedSpecialities}
          <button onClick={() => dialogRef.current?.close()} className={styles.close_button}>
            Cerrar
          </button>
        </div>
      </dialog>
    </div>
  )
}

export default React.memo(CardListFilter)
