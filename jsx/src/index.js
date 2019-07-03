// Import the React and ReactDOM liberies
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

//Component

import Comment from "./Comment";
import Approval from "./Approval";

//Create a React Components
const App = () => {
  return (
    <div className="ui container comments">
      <Approval>
        <div>
          <h4>Warning</h4>
          <p>Are you sure to do this</p>
        </div>
      </Approval>
      <Approval>
        <Comment
          name="Sam"
          post="Wow!!"
          date="Today at 6.00PM"
          avatar={faker.image.avatar()}
        />
      </Approval>
      <Approval>
        <Comment
          name="Alex"
          post="I love It"
          date="Today at 4.25PM"
          avatar={faker.image.avatar()}
        />
      </Approval>
      <Approval>
        <Comment
          name="Lisa"
          post="Haha"
          date="Yesterday at 3.00PM"
          avatar={faker.image.avatar()}
        />
      </Approval>
    </div>
  );
};

// Take the react component and show it on the Screen
ReactDOM.render(<App />, document.querySelector("#root"));
