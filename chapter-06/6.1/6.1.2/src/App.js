import React from "react";
import StartRating from "./StarRating";

export default function App() {
  return (
    <StartRating
      style={{ backgroundColor: "lightblue" }}
      onDoubleClick={e => alert("double click")}
    />
  );
}
