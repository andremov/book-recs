import React from "react";

export const PromptCard = ({
  clickable = true,
  cardKey,
  fadeOut,
  toTop,
  title,
  onClick,
}) => {
  return (
    <div
      style={{
        "--card-key": cardKey,
      }}
      className={`prompt-card ${clickable && !fadeOut ? "clickable" : ""} ${
        fadeOut ? "fade-out" : ""
      } ${toTop ? "to-top" : ""}`}
      onClick={onClick}
    >
      <h2>{title} &rarr;</h2>
    </div>
  );
};
