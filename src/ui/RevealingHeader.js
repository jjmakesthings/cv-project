import classes from "./Card.module.css";

function RevealingHeader(props) {
  return (
    <div className={classes.revealingHeader}>
      <h2>{props.title}</h2>
      <button onClick={props.toggleOpen}>
        {props.isOpen ? "close" : "open"}
      </button>
    </div>
  );
}

export default RevealingHeader;
