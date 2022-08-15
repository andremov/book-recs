import React from "react";
import data from "../data.json";
import { Card } from "./Card";

export const Grid = ({ onClick }) => {
  return (
    <main className={"grid"}>
      {data.map((item, key) => (
        <Card {...item} key={key} onClick={() => onClick(key)} />
      ))}
    </main>
  );
};
