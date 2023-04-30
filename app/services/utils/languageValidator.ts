const getUserLanguage = () => {
    const { language } = navigator
    if (language.startsWith("es")) return "español"
    return "english"
  }

export default getUserLanguage