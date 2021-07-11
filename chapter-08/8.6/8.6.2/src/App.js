import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import { GraphQLClient } from "graphql-request";

const query = `
  query findRepos($login:String!) {
    user(login:$login) {
      login
      name
      location
      avatar_url: avatarUrl
      repositories(first:100) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`;

const client = new GraphQLClient( "https://api.github.com/graphql", {
  headers: {
    Authorization: `Bearer <PERSONAL ACCESS TOKEN>`
  }
});

function UserDetails(data) {
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default function App() {
  const [login, setLogin] = useState("moontahoe");
  const [userData, setUserData] = useState();

  useEffect(() => {
    client
    .request(query, { login })
    .then(({ user }) => user)
    .then(setUserData)
    .catch(console.error);
  }, [client, query, login]);

  if (!userData) return <p>loading...</p>;
  console.log(userData);
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <UserDetails {...userData} />
      <List
        data={userData.repositories.nodes}
        renderItem={repo => <span>{repo.name}</span>}
      />
    </>
  );
}
