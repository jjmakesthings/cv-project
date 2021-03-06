import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";
import AchievmentsSection from "./AchievmentsSection";
import classes from "./FormView.module.css";
import LabeledTextInput from "./LabeledTextInput";

const ExperienceSection = (props) => {
  const [isSaved, setIsSaved] = useState(true);
  const isNotEmpty = (value) => value.trim() !== "";
  const employer = useInput(props.data.employer, isNotEmpty);
  const location = useInput(props.data.city, isNotEmpty);
  const start = useInput(props.data.start, isNotEmpty);
  const end = useInput(props.data.end, isNotEmpty);
  const title = useInput(props.data.title, isNotEmpty);
  const [achievmentsState, setAchievmentsState] = useState(
    props.data.achievments
  );

  const inputArray = [employer, location, start, end, title];

  const isTouchedArray = inputArray.map((input) => input.isTouched);
  useEffect(() => {
    isTouchedArray.forEach((inputIsTouched) => {
      if (inputIsTouched) {
        setIsSaved(false);
      }
    });
  }, [isTouchedArray]);

  const changeAchievmentHandler = (text, id) => {
    setIsSaved(false);
    setAchievmentsState((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      const index = next.map((obj) => obj.id).indexOf(id);
      if (text === "" && next.length > 1) {
        next.splice(index, 1);
      } else {
        next[index].text = text;
      }
      let lastItem = next[next.length - 1];
      if (lastItem.text !== "" || !lastItem) {
        next.push({ id: lastItem.id + 1 || 1, text: "" });
      }
      return next;
    });
  };

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
      employer: employer.value,
      start: start.value,
      end: end.value,
      city: location.value,
      title: title.value,
      achievments: achievmentsState,
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
        obj={employer}
        name="Employer"
        errorMessage="Please enter employer name."
      />
      <LabeledTextInput
        obj={location}
        name="Location"
        errorMessage="Please enter a location."
      />
      <LabeledTextInput
        obj={start}
        name="Start"
        errorMessage="Please enter start date."
      />
      <LabeledTextInput
        obj={end}
        name="End"
        errorMessage="Please enter end date or current."
      />
      <LabeledTextInput
        obj={title}
        name="Title"
        errorMessage="Please enter job title."
      />
      <AchievmentsSection
        data={achievmentsState}
        changeHandler={changeAchievmentHandler}
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

export default ExperienceSection;
