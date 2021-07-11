import React from "react";
import { useIterator } from "./hooks";
import RepositoryReadme from "./RepositoryReadme";

export default function RepoMenu({ repositories, login }) {
  const [{ name }, previous, next] = useIterator(repositories);

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      <RepositoryReadme login={login} repo={name} />
    </>
  );
}
