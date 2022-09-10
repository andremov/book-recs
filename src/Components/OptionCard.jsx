import React from "react";

export const OptionCard = ({
  clickable = true,
  cardKey,
  fadeOut,
  toTop,
  name,
  onClick,
}) => {
  return (
    <div
      style={{
        "--card-key": cardKey,
      }}
      className={`option-card ${clickable && !fadeOut ? "clickable" : ""} ${
        fadeOut ? "fade-out" : ""
      } ${toTop ? "to-top" : ""}`}
      onClick={onClick}
    >
      <h2>{name} &rarr;</h2>
    </div>
  );
};
