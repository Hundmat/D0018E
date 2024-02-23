import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

function drawStars(rating) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= 0.7) {
      stars.push(<FaStar />);
    } else if (rating >= 0.3 && rating < 0.7) {
      stars.push(<FaStarHalfAlt />);
    } else {
      stars.push(<FaRegStar />);
    }
    rating--;
  }
  return stars;
};

export const StarRating = (value) => {
  return (<p>{drawStars(value.rating)}</p>);
}