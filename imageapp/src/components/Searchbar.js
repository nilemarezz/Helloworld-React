// Searchbar use for get the data from user 
import React from "react";

class Searchbar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) =>{
      event.preventDefault();
       this.props.onSearchSubmit(this.state.term);

  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
