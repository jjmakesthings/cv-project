import Card from "../ui/Card";
import EducationSection from "./EducationSection";
import classes from "./FormView.module.css";

const EducationForm = (props) => {
  const sections = props.data.map((proj, index) => {
    return (
      <EducationSection
        key={proj.id}
        data={proj}
        submitHandler={props.submitHandler}
        deleteHandler={props.deleteHandler}
      />
    );
  });

  return (
    <Card>
      <h2>Education</h2>
      {sections}
      <div className={classes.add}>
        <button onClick={props.addHandler}>Add Education</button>
      </div>
    </Card>
  );
};

export default EducationForm;
