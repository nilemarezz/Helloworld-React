import './SeasonShow.css';
import React from "react";


let template = [
  { text: "Let's hit the beach", icon: "massive sun icon" },
  { text: "Burr, it is chilly", icon: "massive snowflake icon" }
];
const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    if (latitude > 0) {
      return template[0];
    } else {
      return template[1];
    }
  } else {
    if (latitude > 0) {
      return template[1];
    } else {
      return template[0];
    }
  }
};

const SeasonShow = props => {
  const getshow = getSeason(props.latitude, new Date().getMonth());

  return (
    <div className="display">
      <i className={"icon-left "+getshow.icon} />
      <h1>{getshow.text}</h1>
      <i className={"icon-right "+getshow.icon} />
    </div>
  );
};

export default SeasonShow;
