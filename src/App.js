import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

// const Pet = props => <div>cool</div>;

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
