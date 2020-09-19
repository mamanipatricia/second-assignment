import React from "react";

export default function ValidationComponent({ outputLength }) {
  const value = 5;
  return (
    <div>{outputLength < value ? "Text too short" : "Text long enough"}</div>
  );
}
