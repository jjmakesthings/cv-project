import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";
import classes from "./FormView.module.css";
import LabeledTextInput from "./LabeledTextInput";

const TrainingSection = (props) => {
  const [isSaved, setIsSaved] = useState(true);
  const isNotEmpty = (value) => value.trim() !== "";
  const title = useInput(props.data.title, isNotEmpty);
  const school = useInput(props.data.school);
  const date = useInput(props.data.date, isNotEmpty);

  const inputArray = [title, school, date];

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
    const trainData = {
      id: props.data.id,
      title: title.value,
      school: school.value,
      date: date.value,
    };

    props.submitHandler(trainData, props.data.id);
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
        errorMessage="Please enter a title."
      />
      <LabeledTextInput obj={school} name="School" errorMessage="" />
      <LabeledTextInput
        obj={date}
        name="Date"
        errorMessage="Please enter a date."
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

export default TrainingSection;
