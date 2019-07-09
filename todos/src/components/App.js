import React from "react";
import Todos from "./Todos";
import AddItem from "./addItem";
class App extends React.Component {
  state = {
    todos: [
      { id: 1, title: "Take out my trash", completed: true },
      { id: 2, title: "Wash the dishes", completed: false },
      { id: 3, title: "Exercise", completed: false }
    ]
  };

  changecompleted = complete => {
    this.setState({ completed: complete });
  };

  render() {
    return (
      <div>
          <AddItem />
        <Todos
          todos={this.state.todos}
          changecompleted={this.changecompleted}
        />
      </div>
    );
  }
}

export default App;
