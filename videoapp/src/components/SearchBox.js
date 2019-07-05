import React from "react";

class SearchBox extends React.Component {
  state = { input: "" };
  getInput = e => {
    this.setState({ input: e.target.value });
  };
  onSubmitForm = e => {
    e.preventDefault();
    this.props.searchVideo(this.state.input);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmitForm}>
          <div className="field">
            <label>Search : </label>
            <input
              type="text"
              value={this.state.input}
              onChange={this.getInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
