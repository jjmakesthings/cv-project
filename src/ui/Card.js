import classes from "./Card.module.css";
import RevealingHeader from "./RevealingHeader";
import { useState } from "react";

function Card(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = function () {
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes.card}>
      <RevealingHeader
        title={props.title}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
      />
      {isOpen ? props.children : ""}
    </div>
  );
}

export default Card;
