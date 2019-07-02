// Import the React and ReactDOM liberies
import React from "react";
import ReactDOM from "react-dom";



//Create a React Components
const App = () => {
    const Button = {text:'Click Me'};
  return (
      <div>
          <label className ="label" htmlFor="name">Enter name:</label>
          <input id="name" type="text"/>
          <button style={{backgroundColor:'blue' , color:'white'}}>{Button.text}</button>
      </div>
  );
};

// Take the react component and show it on the Screen
ReactDOM.render(<App />, document.querySelector("#root"));
