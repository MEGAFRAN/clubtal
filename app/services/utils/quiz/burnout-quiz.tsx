export default function calculateBurnoutResult(answers: Record<string, number>): string {
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

  const emotionalExhaustionScore = calculateScore(answers, 19, 27)
  const depersonalizationScore = calculateScore(answers, 6, 12)
  const personalAccomplishmentScore = calculateScore(answers, 31, 38)

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
