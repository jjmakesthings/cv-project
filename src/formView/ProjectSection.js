import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";
import classes from "./FormView.module.css";
import LabeledTextInput from "./LabeledTextInput";
import LabeledTextArea from "./LabeledTextArea";

const ProjectSection = (props) => {
  const [isSaved, setIsSaved] = useState(true);
  const isNotEmpty = (value) => value.trim() !== "";
  const title = useInput(props.data.title, isNotEmpty);
  const subtitle = useInput(props.data.subtitle, isNotEmpty);
  const summary = useInput(props.data.summary, isNotEmpty);

  const inputArray = [title, subtitle, summary];

  const isTouchedArray = inputArray.map((input) => input.isTouched);
  useEffect(() => {
    isTouchedArray.forEach((inputIsTouched) => {
      if (inputIsTouched) {
        setIsSaved(false);
      }
    });
  }, [isTouchedArray]);

  const submitHandler = (event) => {
    event.preventDefault();
    let willReturn = false;
    inputArray.forEach((input) => {
      if (!input.isValid) {
        input.setIsTouched(true);
        willReturn = true;
      }
    });
    if (willReturn) {
      return;
    }
    const expData = {
      id: props.data.id,
      title: title.value,
      subtitle: subtitle.value,
      summary: summary.value,
    };

    props.submitHandler(expData, props.data.id);
    inputArray.forEach((input) => {
      input.setIsTouched(false);
    });
    setIsSaved(true);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <LabeledTextInput
        obj={title}
        name="Title"
        errorMessage="Please enter a project title."
      />
      <LabeledTextInput
        obj={subtitle}
        name="Subtitle"
        errorMessage="Please enter project subtitle (client name, or web address)."
      />
      <LabeledTextArea
        obj={summary}
        name="Summary"
        errorMessage="Please write a brief project summary."
      />
      <div className={classes.actions}>
        <button onClick={(event) => props.deleteHandler(event, props.data.id)}>
          Delete
        </button>
        <button disabled={isSaved ? "t" : ""}>Save</button>
      </div>
    </form>
  );
};

export default ProjectSection;
