import Card from "../ui/Card";
import LabeledTextInput from "./LabeledTextInput";
import useInput from "../hooks/use-input";
import classes from "./FormView.module.css";
import SkillsList from "./SkillsList";

const SkillsForm = (props) => {
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
      <h2>Skills</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <LabeledTextInput
          obj={text}
          name="Skill"
          errorMessage="Please enter a skill"
        />
        <div className={classes.actions}>
          <button disabled={text.isValid ? "" : "t"}>Submit</button>
        </div>
      </form>
      <SkillsList data={props.data} deleteHandler={props.deleteHandler} />
    </Card>
  );
};

export default SkillsForm;
