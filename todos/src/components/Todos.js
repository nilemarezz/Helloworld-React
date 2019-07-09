import React from "react";
import TodoItems from "./TodoItems";

class Todos extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return <TodoItems key={todo.id} todo={todo} changecompleted={this.props.changecompleted}/>;
        })}
      </div>
    );
  }
}

export default Todos;
