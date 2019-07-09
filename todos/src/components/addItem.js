import React from "react";

class addItem extends React.Component {
  state = { input: "" };
  getInput = e => {
    this.setState({ input: e.target.value });
  };
  onSubmitForm = e => {
    e.preventDefault();
    console.log(this.state.input);
    this.setState({input:''})
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input
            value={this.state.input}
            onChange={this.getInput}
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default addItem;
