function countWordsRepetitions(string: string, words: string[]): Array<{ [key: string]: number }> {
  const wordCounts = new Map<string, number>()
  const lowerCaseString = string.toLowerCase()
  const lowerCaseWords = words.map((word) => word.toLowerCase())

  // Build a single regular expression to search for all words at once
  const regex = new RegExp(`\\b(${lowerCaseWords.join("|")})\\b`, "gi")

  // Find all matches in the string at once and update the counts
  let match = regex.exec(lowerCaseString)
  while (match) {
    const word = match[0]
    const count = wordCounts.get(word) ?? 0
    wordCounts.set(word, count + 1)
    match = regex.exec(lowerCaseString)
  }

  return Array.from(wordCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ [name]: count }))
}

export default countWordsRepetitions
