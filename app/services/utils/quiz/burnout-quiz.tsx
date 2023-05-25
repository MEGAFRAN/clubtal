export default function calculateBurnoutResult(answers: Record<string, string>): string {
  const answerValueMap: Record<string, number> = {
    Never: 0,
    "A few times a year": 1,
    "Once a month or less": 2,
    "A few times a month": 3,
    "Once a week": 4,
    "A few times a week": 5,
    "Every day": 6,
  }

  const calculateScore = (answersValues: Record<string, number>, start: number, end: number) =>
    Object.values(answersValues)
      .slice(start, end + 1)
      .reduce((sum, value) => sum + value, 0)

  const interpretScore = (
    score: number,
    lowThreshold: number,
    moderateThreshold: number,
  ): string => {
    if (score >= moderateThreshold) {
      return "High"
    }
    if (score >= lowThreshold) {
      return "Moderate"
    }
    return "Low"
  }

  const interpretEmotionalExhaustion = (score: number): string => interpretScore(score, 19, 27)

  const interpretDepersonalization = (score: number): string => interpretScore(score, 6, 12)

  const interpretPersonalAccomplishment = (score: number): string => interpretScore(score, 31, 38)

  const convertedAnswers = Object.fromEntries(
    Object.entries(answers).map(([key, value]) => [key, answerValueMap[value]]),
  )

  const emotionalExhaustionScore = calculateScore(convertedAnswers, 19, 27)
  const depersonalizationScore = calculateScore(convertedAnswers, 6, 12)
  const personalAccomplishmentScore = calculateScore(convertedAnswers, 31, 38)

  const emotionalExhaustionResult = interpretEmotionalExhaustion(emotionalExhaustionScore)
  const depersonalizationResult = interpretDepersonalization(depersonalizationScore)
  const personalAccomplishmentResult = interpretPersonalAccomplishment(personalAccomplishmentScore)

  return `
    <p>Emotional Exhaustion Score: ${emotionalExhaustionScore}</p>
    <p>Emotional Exhaustion Result: ${emotionalExhaustionResult}</p>
    <p>Depersonalization Score: ${depersonalizationScore}</p>
    <p>Depersonalization Result: ${depersonalizationResult}</p>
    <p>Personal Accomplishment Score: ${personalAccomplishmentScore}</p>
    <p>Personal Accomplishment Result: ${personalAccomplishmentResult}</p>
  `
}
