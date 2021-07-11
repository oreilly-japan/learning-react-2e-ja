import React from "react";
import Star from "./Star";

export default function StarRating({
  className = "",
  totalStars = 5,
  selectedStars = 0,
  onRate = f => f
}) {
  return (
    <div className={className}>
      <div>
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => onRate(i + 1)}
          />
        ))}
      </div>
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
