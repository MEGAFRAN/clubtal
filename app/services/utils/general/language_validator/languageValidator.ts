const getUserLanguage = (navigator = window.navigator) => {
  const { language } = navigator
  return language?.toLowerCase().startsWith("es") ? "español" : "english"
}

export default getUserLanguage
