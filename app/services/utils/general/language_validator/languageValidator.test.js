import getUserLanguage from "./languageValidator"

describe("getUserLanguage function", () => {
  const originalLanguage = window.navigator.language

  afterEach(() => {
    Object.defineProperty(window.navigator, "language", {
      configurable: true,
      get: () => originalLanguage,
    })
  })

  it("Tests that the function returns 'español' when navigator.language starts with 'es'. ", () => {
    Object.defineProperty(window.navigator, "language", {
      configurable: true,
      get: () => "es-MX",
    })
    expect(getUserLanguage()).toBe("español")
  })

  it("Tests that the function returns 'english' when navigator.language does not start with 'es'", () => {
    Object.defineProperty(window.navigator, "language", {
      configurable: true,
      get: () => "en-US",
    })
    expect(getUserLanguage()).toBe("english")
  })

  it("Tests that the function returns 'english' when navigator.language is null or undefined. ", () => {
    Object.defineProperty(window.navigator, "language", {
      configurable: true,
      get: () => null,
    })
    expect(getUserLanguage()).toBe("english")
  })

  it("Tests that the function handles additional language codes that may be added in the future. ", () => {
    Object.defineProperty(window.navigator, "language", {
      configurable: true,
      get: () => "fr-FR",
    })
    expect(getUserLanguage()).toBe("english")
  })

  it("Tests that the function returns 'español' when navigator.language starts with 'es' in different casing (e.g. 'ES', 'Es'). ", () => {
    Object.defineProperty(window.navigator, "language", {
      configurable: true,
      get: () => "ES-MX",
    })
    expect(getUserLanguage()).toBe("español")
  })

  it("Tests that the function returns 'english' when navigator.language does not start with 'es' in different casing (e.g. 'EN', 'En'). ", () => {
    Object.defineProperty(window.navigator, "language", {
      configurable: true,
      get: () => "EN-US",
    })
    expect(getUserLanguage()).toBe("english")
  })
})
