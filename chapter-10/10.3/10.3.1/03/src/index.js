import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function App({ status }) {
  return (
    <div>
      <h1>We're {status === "Open" ? "Open!" : "Closed!"}</h1>
    </div>
  );
}

App.propTypes = {
  status: PropTypes.oneOf(["Open", "Closed"])
};

ReactDOM.render(<App status="Open" />, document.getElementById("root"));
