import ViewButton from "./ViewButton";
import classes from "./ButtonBanner.module.css";

const ButtonBanner = (props) => {
  return (
    <div className={classes.actions}>
      <h1>Resume Builder</h1>
      <ViewButton
        click={props.toggleView}
        text={props.isPreview ? "Back to Form" : "Preview"}
      />
      <ViewButton click={props.print} text="Print" />
    </div>
  );
};

export default ButtonBanner;
