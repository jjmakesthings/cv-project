import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";
import classes from "./FormView.module.css";
import LabeledTextInput from "./LabeledTextInput";

const EducationSection = (props) => {
  const [isSaved, setIsSaved] = useState(true);
  const isNotEmpty = (value) => value.trim() !== "";
  const degree = useInput(props.data.degree, isNotEmpty);
  const major = useInput(props.data.major, isNotEmpty);
  const school = useInput(props.data.school, isNotEmpty);
  const city = useInput(props.data.city, isNotEmpty);
  const date = useInput(props.data.date, isNotEmpty);

  const inputArray = [degree, major, school, city, date];

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
    const eduData = {
      id: props.data.id,
      degree: degree.value,
      major: major.value,
      school: school.value,
      city: city.value,
      date: date.value,
    };

    props.submitHandler(eduData, props.data.id);
    inputArray.forEach((input) => {
      input.setIsTouched(false);
    });
    setIsSaved(true);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <LabeledTextInput
        obj={degree}
        name="Degree"
        errorMessage="Please enter a degree."
      />
      <LabeledTextInput
        obj={major}
        name="Major"
        errorMessage="Please enter a major."
      />
      <LabeledTextInput
        obj={school}
        name="School"
        errorMessage="Please enter a school."
      />
      <LabeledTextInput
        obj={city}
        name="City"
        errorMessage="Please enter a location."
      />
      <LabeledTextInput
        obj={date}
        name="Graduation date"
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

export default EducationSection;
