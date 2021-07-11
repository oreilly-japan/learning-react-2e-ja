import React from "react";
import Fetch from "./Fetch";

function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      loadingFallback="loading"
      renderError={error => {
        // handle error
        return <p>Something went wrong... {error.message}</p>;
      }}
      renderSuccess={({ data }) => (
        <>
          <h1>Todo: Render UI for data</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    />
  );
}

export default function App() {
  return <GitHubUser login="moonhighway" />;
}
