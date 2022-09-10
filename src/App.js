import React from "react";
import { PromptGrid } from "./Components/PromptGrid";
import { ResultCard } from "./Components/ResultCard";
import { OptionGrid } from "./Components/OptionGrid";
import data from "./data.json";

export const App = () => {
  const [prompt, setPrompt] = React.useState(undefined);
  const [option, setOption] = React.useState(undefined);

  const handleSelectPrompt = (value) => {
    if (prompt && value === prompt) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setPrompt(undefined);
      setOption(undefined);
    } else if (!prompt) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setPrompt(value);
    }
  };

  const handleSelectOption = (value) => {
    if (option && value === option) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOption(undefined);
    } else if (!option) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOption(value);
    }
  };

  return (
    <div className={"container"}>
      {!prompt && (
        <header>
          <h1 className={"title"}>Need a book recommendation?</h1>
          <h3 className={"subtitle"}>Yes! I used to like...</h3>
        </header>
      )}
      {prompt && <header></header>}
      <PromptGrid
        data={data}
        onClick={handleSelectPrompt}
        selectedPrompt={prompt}
      />
      {prompt && (
        <OptionGrid
          data={data[prompt - 1].options}
          onClick={handleSelectOption}
          selectedOption={option}
        />
      )}
      {option && <ResultCard {...data[prompt - 1].options[option - 1]} />}
    </div>
  );
};
