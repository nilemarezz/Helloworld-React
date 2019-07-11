import React from "react";

class TodoItems extends React.Component {
  changestatus = () => {
    if (this.props.todo.completed === true) {
      this.props.todo.completed = false;
    } else {
      this.props.todo.completed = true;
    }

    this.props.changecompleted(this.props.todo.completed);
  };
  render() {
    return (
      <div>
        <div style={this.checkCompleted()}>{this.props.todo.title}</div>
        <button onClick={this.changestatus}>Change</button>
      </div>
    );
  }

  checkCompleted = () => {
    if (this.props.todo.completed === true) {
      return {color:"red"};
    } else {
      return null;
    }
  };
}

export default TodoItems;
