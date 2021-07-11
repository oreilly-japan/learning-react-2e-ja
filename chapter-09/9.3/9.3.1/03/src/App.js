import React, {Suspense} from "react";
import ErrorBoundary from "./ErrorBoundary";
import GridLoader from "react-spinners/GridLoader";

const loadStatus = () => {
    throw new Promise(resolves => null);
};

function Status() {
  const status = loadStatus();
  return <h1>status: {status}</h1>;
}

export default function App() {
  return (
    <Suspense fallback={<GridLoader />}>
      <ErrorBoundary>
        <Status />
      </ErrorBoundary>
    </Suspense>
  );
}
