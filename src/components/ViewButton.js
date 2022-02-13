import React from "react";

function ViewButton(props) {
  return (
    <button className={props.className} onClick={props.click}>
      {props.text}
    </button>
  );
}

export default ViewButton;
