// App use for fetch API

import React from "react";
import Searchbar from "./Searchbar";
import FetchAPI from "./fetchAPI";
import ImageList from './imageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    // call function FetchAPI
    let data = await FetchAPI(term);
    
    this.setState({ images: data.results });
    console.log(this.state.images);
  };

  render() {
    return (
      <div className="ui container " style={{ marginTop: "10px" }}>
        <Searchbar onSearchSubmit={this.onSearchSubmit} />
        {this.state.images.length}
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
