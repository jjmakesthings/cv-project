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

  const changeAchievmentHandler = (data, index) => {
    setIsSaved(false);
    setAchievmentsState((prev) => {
      prev[index] = data;
      const next = [];
      prev.forEach((item) => {
        if (item !== "") {
          next.push(item);
        }
      });
      if (next[next.length - 1] !== "") {
        next.push("");
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
      employer: employer.value,
      start: start.value,
      end: end.value,
      city: location.value,
      title: title.value,
      achievments: achievmentsState,
    };

    props.submitHandler(expData, props.expIndex);
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
        <button disabled={isSaved ? "true" : ""}>Save</button>
      </div>
    </form>
  );
};

export default ExperienceSection;
