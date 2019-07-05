import React from "react";
import "./imageList";

const imageList = props => {
  const images = props.images.map(image => {
    return (
      <div class="column">
        <img src={image.urls.small} alt="" style={{width:'350px',height:'200px'}}/>
      </div>
    );
  });

  return (
    <div>
      <div class="ui three column grid">
        {images}
      </div>
    </div>
  );
};

export default imageList;
