import React from "react";
import { OptionCard } from "./OptionCard";

export const OptionGrid = ({ data, onClick, selectedOption }) => {
  return (
    <main
      style={{
        "--data-count": data.length,
      }}
      className={`option-grid ${selectedOption && "summarized"}`}
    >
      {data.map((item, key) => (
        <OptionCard
          {...item}
          key={key}
          cardKey={key}
          fadeOut={selectedOption && key + 1 !== selectedOption}
          toTop={selectedOption && key + 1 === selectedOption}
          onClick={() => onClick(key + 1)}
        />
      ))}
    </main>
  );
};
