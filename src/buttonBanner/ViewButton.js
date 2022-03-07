import React from "react";

function ViewButton(props) {
  return <button onClick={props.click}>{props.text}</button>;
}

export default ViewButton;
