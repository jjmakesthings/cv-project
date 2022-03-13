import Card from "../ui/Card";
import ProjectSection from "./ProjectSection";
import classes from "./FormView.module.css";

const ProjectsForm = (props) => {
  const sections = props.data.map((proj, index) => {
    return (
      <ProjectSection
        key={proj.id}
        data={proj}
        submitHandler={props.submitHandler}
        deleteHandler={props.deleteHandler}
      />
    );
  });

  return (
    <Card title="Projects">
      {sections}
      <div className={classes.add}>
        <button onClick={props.addHandler}>Add Project</button>
      </div>
    </Card>
  );
};

export default ProjectsForm;
