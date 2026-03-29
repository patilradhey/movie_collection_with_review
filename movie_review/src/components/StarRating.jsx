import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          color={star <= rating ? "gold" : "lightgray"}
        />
      ))}
    </div>
  );
};

export default StarRating;