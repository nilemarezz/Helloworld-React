import React from "react";
import SearchBox from "./SearchBox";
import YoutubeAPI from "./YoutubeAPI";
import VideoList from "./VideoList";
import VideoDetail from "./videoDetails";
class App extends React.Component {
  state = { video: [], selectedVideo: null };
  searchVideo = async input => {
    let data = await YoutubeAPI(input);
    console.log(data);
    this.setState({ video: data.items });
  };
  
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    console.log(this.state.selectedVideo);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBox searchVideo={this.searchVideo} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.video}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
