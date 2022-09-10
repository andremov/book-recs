import React from "react";
import { PromptCard } from "./PromptCard";

export const PromptGrid = ({ data, onClick, selectedPrompt }) => {
  return (
    <main className={"scroll-limit"}>
      <div
        style={{
          "--data-count": data.length,
        }}
        className={`prompt-grid ${selectedPrompt && "summarized"}`}
      >
        {data.map((item, key) => (
          <PromptCard
            {...item}
            key={key}
            cardKey={key}
            fadeOut={selectedPrompt && key + 1 !== selectedPrompt}
            toTop={selectedPrompt && key + 1 === selectedPrompt}
            onClick={() => onClick(key + 1)}
          />
        ))}
      </div>
    </main>
  );
};
