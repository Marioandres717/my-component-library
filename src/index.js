import React from "react";
import ReactDOM from "react-dom";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";

const App = () => {
  return (
    <>
      <PrimaryButton>HEllo World</PrimaryButton>
      <SecondaryButton>Hola Mundo</SecondaryButton>
      <TertiaryButton>RAIL LA MUSIQUE</TertiaryButton>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
