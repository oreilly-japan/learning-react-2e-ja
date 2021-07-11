import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function App({ name, using }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{using ? "used here" : "not used here"}</p>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  using: PropTypes.bool
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
