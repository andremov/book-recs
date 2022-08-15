import React from "react";
import { Grid } from "./Components/Grid";

export const App = () => {
  const [step, setStep] = React.useState(1);
  const [prompt, setPrompt] = React.useState(undefined);
  const [category, setCategory] = React.useState(undefined);

  const handleSelectPrompt = (value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPrompt(value);
    setStep(2);
  };

  return (
    <div className={"container"}>
      {step === 1 && (
        <header>
          <h1 className={"title"}>Need a book recommendation?</h1>
          <h3 className={"subtitle"}>Yes! I used to like...</h3>
        </header>
      )}
      {step === 2 && (
        <header>
          <h3 className={"subtitle"}>
            Pick the option that applies most to you
          </h3>
        </header>
      )}
      <Grid onClick={handleSelectPrompt} />
    </div>
  );
};
