import React from "react"

interface RatingStarsProps {
  rating: number
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const STAR_FULL = "★" // &#9733;
  const STAR_EMPTY = "☆" // &#9734;

  const getStarsDisplay = (value: number) => {
    const fullStarsCount = Math.round(value)
    const emptyStarsCount = 5 - fullStarsCount
    return STAR_FULL.repeat(fullStarsCount) + STAR_EMPTY.repeat(emptyStarsCount)
  }

  return <span>{getStarsDisplay(rating)}</span>
}

export default RatingStars
