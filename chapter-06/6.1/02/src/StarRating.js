import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"} />
);

export default function StarRating({ totalStars = 5 }) {
  return [...Array(totalStars)].map((n, i) => <Star key={i} />);
}
