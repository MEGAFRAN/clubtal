import { LANGUAGE } from "../constants/types/components_props/types"

export default function useDate() {
  type GenerateEndPointCardPostParam = {
    title: string
  }

  interface TransformDataToDataStringProps {
    data: string
    language: LANGUAGE
  }

  interface GetStringMonth {
    month: number
    language: LANGUAGE
  }
  type TypeMonth = {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
    7: string
    8: string
    9: string
    10: string
    11: string
    12: string
  }
  interface Months {
    español: TypeMonth
    english: TypeMonth
  }
  const months: Months = {
    español: {
      1: "Enero",
      2: "Febrero",
      3: "Marzo",
      4: "Abril",
      5: "Mayo",
      6: "Junio",
      7: "Julio",
      8: "Agosto",
      9: "Septiembre",
      10: "Octubre",
      11: "Noviembre",
      12: "Diciembre",
    },
    english: {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    },
  }

  const getStringMonth = ({ month, language }: GetStringMonth): string => {
    const numberMonth = month as keyof TypeMonth
    const monthString = months[language][numberMonth]
    console.log(month, language)
    return monthString
  }
  const deleteCeroStart = (number: string): string => {
    if (number.startsWith("0")) {
      return number.substring(1)
    }
    return number
  }
  const stringToDate = (data: string): Date => {
    const stringToArray = data.split("-")
    const stringYear = stringToArray[0]
    const stringMonth = deleteCeroStart(stringToArray[1])
    const stringDay = deleteCeroStart(stringToArray[2])
    const numberYear = Number(stringYear)
    const numberMonth = Number(stringMonth)
    const numberDay = Number(stringDay)
    const date = new Date(numberYear, numberMonth, numberDay)
    return date
  }

  const addCeroStart = (number: string): string => {
    if (number.length < 2) {
      return `0${number}`
    }
    return number
  }

  const getYearMonthDayOfDate = (data: string) => {
    const date = new Date(data)
    const year = date.getFullYear()
    const month = date.getUTCMonth() + 1 // Months are counted from 0, so add 1
    const day = date.getUTCDate()

    return { year, month, day }
  }

  const transformDataToDataString = ({
    data,
    language,
  }: TransformDataToDataStringProps): string => {
    const { year, month, day } = getYearMonthDayOfDate(data)
    const monthLetters = getStringMonth({ month, language })
    const dataString = `${day} ${monthLetters}, ${year}`
    return dataString
  }

  const generateEndpointCardPost = ({ title }: GenerateEndPointCardPostParam): string => {
    const DEFAULT_URL = "/blog"
    const titleToLowerCase = title.toLocaleLowerCase()
    const stringToArray = titleToLowerCase.split(" ")
    const separateTitleWithCharacter = stringToArray.join("-")
    return `${DEFAULT_URL}/${separateTitleWithCharacter}`
  }

  const truncateText = (text: string): string => {
    const MAX_LONG = 20
    const withoutTags = text.replace(/<\/?[^>]+(>|$)/g, "")
    const withoutNewlines = withoutTags.replace(/\n/g, "")
    const withoutExtraSpaces = withoutNewlines.replace(/\s{2,}/g, " ")
    const stringToArray = withoutExtraSpaces.split(" ")
    if (stringToArray.length > MAX_LONG) {
      const cutArray = stringToArray.slice(0, MAX_LONG)
      const arrayToString = cutArray.join(" ")
      const truncatedText = arrayToString.concat(" ...")
      return truncatedText
    }
    return withoutExtraSpaces
  }
  return {
    transformDataToDataString,
    generateEndpointCardPost,
    truncateText,
    getStringMonth,
    deleteCeroStart,
  }
}
