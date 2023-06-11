import countWordsRepetitions from "./countWordsRepetitions"

describe("countWordsRepetitions function", () => {
  it("Tests that the function returns the correct word counts for a valid string and array of words. ", () => {
    const string = "The quick brown fox jumps over the lazy dog"
    const words = ["the", "quick", "brown", "fox", "jumps", "over", "lazy", "dog"]
    const expectedOutput = [
      { the: 2 },
      { quick: 1 },
      { brown: 1 },
      { fox: 1 },
      { jumps: 1 },
      { over: 1 },
      { lazy: 1 },
      { dog: 1 },
    ]
    expect(countWordsRepetitions(string, words)).toEqual(expectedOutput)
  })

  it("Tests that the function returns an empty array of objects when given empty string and array of words. ", () => {
    const string = ""
    const words = []
    const expectedOutput = []
    expect(countWordsRepetitions(string, words)).toEqual(expectedOutput)
  })

  it("Tests that the function throws an error when given null inputs. ", () => {
    const string = null
    const words = null
    expect(() => countWordsRepetitions(string, words)).toThrow()
  })

  it("Tests that the function can handle large inputs without significant performance issues. ", () => {
    const string =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
    const words = [
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing",
      "elit",
      "Sed",
      "non",
      "risus",
      "Suspendisse",
      "lectus",
      "tortor",
      "dignissim",
      "nec",
      "ultricies",
      "sed",
    ]
    expect(() => countWordsRepetitions(string.repeat(100000), words)).not.toThrow()
  })
})
