import React from "react";

export const Card = ({ clickable = true, title, onClick }) => {
  return (
    <div className={`card ${clickable ? "clickable" : ""}`} onClick={onClick}>
      <h2>{title} &rarr;</h2>
    </div>
  );
};
