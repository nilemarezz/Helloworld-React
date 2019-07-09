import React from "react";

class TodoItems extends React.Component {
  changestatus = () => {
    if(this.props.todo.completed === true){
        this.props.todo.completed = false;
    }else{
        this.props.todo.completed = true
    }

    this.props.changecompleted(this.props.todo.completed);
    
  };
  render() {
    
    const style = { color: "red" };
    const checkCompleted = () => {
      if (this.props.todo.completed === true) {
        return style;
      } else {
        return null;
      }
    };

    return (
      <div>
        <div style={checkCompleted()}>{this.props.todo.title}</div>
        <button onClick={this.changestatus}>Change</button>
      </div>
    );
  }
}

export default TodoItems;
