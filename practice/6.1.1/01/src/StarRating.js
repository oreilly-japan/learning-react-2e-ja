import React, { useState } from "react";
import Star from "./Star";


const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"} />
);

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars] = useState(3);
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
