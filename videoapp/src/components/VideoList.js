import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
  const renderList = props.video.map(videos => {
    return <VideoItem video={videos} />;
  });

  return <div className="container"><div style={{marginTop:'40px',marginLeft:'50px'}}>{renderList}</div></div>;
};
export default VideoList;
