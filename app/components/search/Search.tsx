import React, { useState, useRef, useEffect, useCallback } from "react"
import { useRouter } from "next/router"
import styles from "../../styles/components/search.module.scss"

type SearchProps = {
  options: string[]
}

const Search: React.FC<SearchProps> = ({ options }) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredOptions, setFilteredOptions] = useState<string[]>([])
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)
  const blurTimeout = useRef<number | null>(null)
  const listRef = useRef<HTMLUListElement | null>(null)

  const handleOptionClick = useCallback(
    (value: string) => {
      router.push(`/${value}`)
    },
    [router],
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          if (highlightedIndex === null || highlightedIndex === filteredOptions.length - 1) {
            setHighlightedIndex(0)
          } else {
            setHighlightedIndex((prev) => (prev !== null ? prev + 1 : null))
          }
          break
        case "ArrowUp":
          e.preventDefault()
          if (highlightedIndex === 0 || highlightedIndex === null) {
            setHighlightedIndex(filteredOptions.length - 1)
          } else {
            setHighlightedIndex((prev) => (prev !== null ? prev - 1 : null))
          }
          break
        case "Enter":
          e.preventDefault()
          if (highlightedIndex !== null) {
            handleOptionClick(filteredOptions[highlightedIndex])
          }
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [highlightedIndex, filteredOptions, handleOptionClick])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
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
    },
    [options],
  )

  const handleFocus = useCallback(() => {
    if (blurTimeout.current) {
      clearTimeout(blurTimeout.current)
      blurTimeout.current = null
    }
    setFilteredOptions(options)
  }, [options])

  const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (listRef.current?.contains(event.relatedTarget as Node)) {
      return
    }

    blurTimeout.current = window.setTimeout(() => {
      setFilteredOptions([])
    }, 150)
  }, [])

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label="Escribe el servicio que buscas"
        placeholder="Escribe el servicio que buscas..."
        aria-owns="option-list"
      />
      <ul role="listbox" id="option-list" ref={listRef}>
        {filteredOptions.map((option: string, index: number) => (
          <li
            key={option}
            onClick={() => handleOptionClick(option)}
            role="option"
            aria-selected={highlightedIndex === index}
            tabIndex={0}
            className={highlightedIndex === index ? styles.highlighted : ""}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search
