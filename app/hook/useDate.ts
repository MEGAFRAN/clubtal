export default function useDate() {
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
  const months: TypeMonth = {
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
  }

  type GenerateEndPointCardPostParam = {
    date: Date
    title: string
  }

  const getStringMonth = (number: any): string => {
    const monthIndex: keyof TypeMonth = number
    const monthString = months[monthIndex]
    return monthString
  }

  const getYearMonthDayOfDate = (data: Date) => {
    const MONTH_LAG = 1
    const year = data.getFullYear()
    const month = data.getMonth() + MONTH_LAG
    const day = data.getDate()
    return { year, month, day }
  }

  const transformDataToDataString = (data: Date): string => {
    const { year, month, day } = getYearMonthDayOfDate(data)
    const monthLetters = getStringMonth(month)
    const dataString = `${day} ${monthLetters}, ${year}`
    return dataString
  }

  const generateEndpointCardPost = ({ date, title }: GenerateEndPointCardPostParam): string => {
    const DEFAULT_URL = "/blog"
    const { year, month, day } = getYearMonthDayOfDate(date)
    const titleToLowerCase = title.toLocaleLowerCase()
    const stringToArray = titleToLowerCase.split(" ")
    const separateTitleWithCharacter = stringToArray.join("-")
    const endPoint = `${DEFAULT_URL}/${year}/${month}/${day}/${separateTitleWithCharacter}/`
    return endPoint
  }

  const truncateText = (text: string): string => {
    const MAX_LONG = 10
    const stringToArray = text.split(" ")
    if (stringToArray.length > MAX_LONG) {
      const cutArray = stringToArray.slice(0, MAX_LONG)
      const arrayToString = cutArray.join(" ")
      const truncatedText = arrayToString.concat(" ...")
      return truncatedText
    }
    return text
  }
  return { transformDataToDataString, generateEndpointCardPost, truncateText }
}
