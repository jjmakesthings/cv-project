import Card from "../ui/Card";
import LabeledTextInput from "./LabeledTextInput";
import useInput from "../hooks/use-input";
import classes from "./FormView.module.css";
import SkillsList from "./SkillsList";

const HobbiesForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const text = useInput("", isNotEmpty);

  function submitHandler(event) {
    event.preventDefault();
    let willReturn = false;
    if (!text.isValid) {
      text.setIsTouched(true);
      willReturn = true;
    }
    if (willReturn) {
      return;
    }
    const skillData = text.value;
    props.submitHandler(skillData);
    text.setIsTouched(false);
  }

  return (
    <Card>
      <h2>Hobbies</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <LabeledTextInput
          obj={text}
          name="Hobby"
          errorMessage="Please enter a hobby"
        />
        <div className={classes.actions}>
          <button disabled={text.isValid ? "" : "t"}>Submit</button>
        </div>
      </form>
      <SkillsList data={props.data} deleteHandler={props.deleteHandler} />
    </Card>
  );
};

export default HobbiesForm;
