import formatTextUtils from "./text"

describe("formatTextUtils", () => {
  describe("capitalizeFirstLetter", () => {
    it("should capitalize the first letter of a given string", () => {
      expect(formatTextUtils.capitalizeFirstLetter("hello")).toBe("Hello")
      expect(formatTextUtils.capitalizeFirstLetter("world")).toBe("World")
    })

    it("should return the same string if it is empty", () => {
      expect(formatTextUtils.capitalizeFirstLetter("")).toBe("")
    })
  })

  describe("createSlug", () => {
    it("should convert a string to a slug", () => {
      expect(formatTextUtils.createSlug("Hello World")).toBe("Hello-World")
      expect(formatTextUtils.createSlug("test slug generation")).toBe("test-slug-generation")
    })

    it("should return the same string if there is only one word", () => {
      expect(formatTextUtils.createSlug("hello")).toBe("hello")
    })
  })

  describe("getLeftSideOfEmail", () => {
    it("should get the left side of an email address", () => {
      expect(formatTextUtils.getLeftSideOfEmail("user@example.com")).toBe("user")
      expect(formatTextUtils.getLeftSideOfEmail("test.email@domain.net")).toBe("test.email")
    })

    it('should return the full string if there is no "@" symbol', () => {
      expect(formatTextUtils.getLeftSideOfEmail("userexample.com")).toBe("userexample.com")
    })
  })
})
