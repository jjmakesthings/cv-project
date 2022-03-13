import Card from "../ui/Card";
import TrainingSection from "./TrainingSection";
import classes from "./FormView.module.css";

const TrainingForm = (props) => {
  const sections = props.data.map((exp, index) => {
    return (
      <TrainingSection
        key={exp.id}
        data={exp}
        submitHandler={props.submitHandler}
        deleteHandler={props.deleteHandler}
      />
    );
  });

  return (
    <Card title="Training">
      {sections}
      <div className={classes.add}>
        <button onClick={props.addHandler}>Add Training</button>
      </div>
    </Card>
  );
};

export default TrainingForm;
