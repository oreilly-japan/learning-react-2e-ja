//@flow
import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

type Props = {
  item: string,
  cost?: number
};

function App(props: Props) {
  return (
    <div> <h1>{props.item}</h1></div> );
}

ReactDOM.render(<App item="jacket" />, root);
