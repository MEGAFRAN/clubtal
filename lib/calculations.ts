const getAverageOfReviews = (reviews: [{ stars: number; comment: string }]): number => {
  const reviewStars = reviews?.map((review) => review.stars) || []

  if (reviewStars.length === 0) return 0

  const sum = reviewStars.reduce((acc, curr) => acc + curr, 0)
  return sum / reviewStars.length
}

const calculationsUtils = {
  getAverageOfReviews,
}

export default calculationsUtils
