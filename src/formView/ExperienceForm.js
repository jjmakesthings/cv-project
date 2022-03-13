import Card from "../ui/Card";
import ExperienceSection from "./ExperienceSection";
import classes from "./FormView.module.css";

const ExperienceForm = (props) => {
  const sections = props.data.map((exp, index) => {
    return (
      <ExperienceSection
        key={exp.id}
        data={exp}
        submitHandler={props.submitHandler}
        deleteHandler={props.deleteHandler}
      />
    );
  });

  return (
    <Card title="Experience">
      {sections}
      <div className={classes.add}>
        <button onClick={props.addHandler}>Add Experience</button>
      </div>
    </Card>
  );
};

export default ExperienceForm;
