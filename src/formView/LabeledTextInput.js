import classes from "./FormView.module.css";

const LabeledTextInput = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.obj.hasError ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type="text"
        id={props.name}
        value={props.obj.value}
        onChange={props.obj.onChange}
        onBlur={props.obj.onBlur}
      />
      {props.obj.hasError ? <p>{props.errorMessage}</p> : ""}
    </div>
  );
};

export default LabeledTextInput;
