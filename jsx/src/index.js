// Import the React and ReactDOM liberies
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comment from "./Comment";

//Create a React Components
const App = () => {
  return (
    <div className="ui container comments">
      <Comment />
    </div>
  );
};

// Take the react component and show it on the Screen
ReactDOM.render(<App />, document.querySelector("#root"));
