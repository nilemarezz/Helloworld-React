import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Latitude: null,
      errorMessage: ""
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      location => this.setState({ Latitude: location.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.Latitude && !this.state.errorMessage) {
      return <div>Latitude: {this.state.Latitude}</div>;
    } else if (!this.state.Latitude && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
