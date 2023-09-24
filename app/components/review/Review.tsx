import React from "react"
import RatingStars from "../rating_stars/RatingStars"

interface ReviewProps {
  reviews: {
    stars: number
    comment: string
  }[]
}

const Review: React.FC<ReviewProps> = ({ reviews }) => (
  <section>
    <h2>Reviews</h2>
    {reviews.map(({ stars, comment }, index) => (
      <React.Fragment key={index}>
        <RatingStars rating={stars} />
        <p>{comment}</p>
      </React.Fragment>
    ))}
  </section>
)

export default Review
