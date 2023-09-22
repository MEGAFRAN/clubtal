const capitalizeFirstLetter = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1)

const createSlug = (string: string): string => string.split(" ").join("-")

const getLeftSideOfEmail = (string: string): string => string.split("@")[0]

const formatTextUtils = {
  capitalizeFirstLetter,
  createSlug,
  getLeftSideOfEmail,
}

export default formatTextUtils
