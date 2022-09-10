import React from "react";

export const ResultCard = ({ book }) => {
  return [book].flat().map((item) => (
    <div className={`result-card`}>
      <h2>{item}</h2>
    </div>
  ));
};
