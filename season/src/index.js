import React from "react";
import ReactDOM from "react-dom";
import SeasonShow from "./SeasonShow";
import Loaders from "./loader";

class App extends React.Component {
  state = { Latitude: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      location => this.setState({ Latitude: location.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.Latitude && !this.state.errorMessage) {
      return <SeasonShow latitude={this.state.Latitude} />;
      
    } else if (!this.state.Latitude && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <div><Loaders text='Please Accept the location request' /></div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
