import React, { useState, useRef } from "react"
import { useRouter } from "next/router"
import styles from "../../styles/components/search.module.scss"

type SearchProps = {
  options: string[]
}

const Search: React.FC<SearchProps> = ({ options }) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredOptions, setFilteredOptions] = useState<any>([])
  const blurTimeout = useRef<number | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchTerm(value)

    if (value.trim() === "") {
      setFilteredOptions(options)
      return
    }

    const matchedOptions = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase()),
    )

    setFilteredOptions(matchedOptions)
  }

  const handleFocus = () => {
    if (blurTimeout.current) {
      clearTimeout(blurTimeout.current)
      blurTimeout.current = null
    }

    setFilteredOptions(options)
  }

  const handleBlur = () => {
    blurTimeout.current = window.setTimeout(() => {
      setFilteredOptions([])
    }, 150)
  }

  const handleOptionClick = (value: string) => {
    router.push(`/${value}`)
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label="Search"
        placeholder="Search..."
      />
      <ul role="listbox">
        {filteredOptions.map((option: string) => (
          <li key={option} onClick={() => handleOptionClick(option)} role="option">
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search
