import React, {Suspense} from "react";
import ErrorBoundary from "./ErrorBoundary";

const loadStatus = () => {
    throw new Error("something went wrong");
};

function Status() {
  const status = loadStatus();
  return <h1>status: {status}</h1>;
}

export default function App() {
  return (
    <ErrorBoundary>
      <Status />
    </ErrorBoundary>
  );
}
