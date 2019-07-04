import React from "react";

const loader = (props) => {
  return (
    <div className="ui active dimmer">
        <div className="ui big text loader">{props.text}</div>
    </div>
  );
};

export default loader;
