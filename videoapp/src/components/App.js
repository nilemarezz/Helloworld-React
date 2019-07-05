import React from "react";
import SearchBox from "./SearchBox";
 import YoutubeAPI from './YoutubeAPI';
 import VideoList from './VideoList';
class App extends React.Component {
    state={video:[]};
  searchVideo = async input => {
    let data = await YoutubeAPI(input);
    console.log(data);
    this.setState({video:data.items})
  };

  render() {
    return (
      <div className="container">
          <div style={{margin:'auto',padding:'50px;'}}>
        <SearchBox searchVideo={this.searchVideo} />
        <VideoList video={this.state.video}/>
        </div>
      </div>
    );
  }
}

export default App;
