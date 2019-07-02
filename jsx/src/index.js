// Import the React and ReactDOM liberies
import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';



//Create a React Components
const App = () => {

    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="avatar">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6.00PM</span>
                    </div>
                    <div className="text">Nice blog Posts</div>
                </div>
            </div>
        </div>
    );
};

// Take the react component and show it on the Screen
ReactDOM.render(<App />, document.querySelector("#root"));
