import ExperienceForm from "./ExperienceForm";
import InformationForm from "./InformationForm";
import ProjectsForm from "./ProjectsForm";
import EducationForm from "./EducationForm";
import TrainingForm from "./TrainingForm";

const FormView = (props) => {
  const infoSubmitHandler = (data) => {
    props.submitHandler("information", data);
  };

  const expSubmitHandler = (data, id) => {
    props.submitHandler("experience", data, id);
  };
  const expDeleteHandler = (event, id) => {
    event.preventDefault();
    props.deleteHandler("experience", id);
  };
  const expAddHandler = () => {
    props.addHandler("experience");
  };

  const projSubmitHandler = (data, id) => {
    props.submitHandler("projects", data, id);
  };
  const projDeleteHandler = (event, id) => {
    event.preventDefault();
    props.deleteHandler("projects", id);
  };
  const projAddHandler = () => {
    props.addHandler("projects");
  };

  const eduSubmitHandler = (data, id) => {
    props.submitHandler("education", data, id);
  };
  const eduDeleteHandler = (event, id) => {
    event.preventDefault();
    props.deleteHandler("education", id);
  };
  const eduAddHandler = () => {
    props.addHandler("education");
  };

  const trainSubmitHandler = (data, id) => {
    props.submitHandler("training", data, id);
  };
  const trainDeleteHandler = (event, id) => {
    event.preventDefault();
    props.deleteHandler("training", id);
  };
  const trainAddHandler = () => {
    props.addHandler("training");
  };
  return (
    <div>
      <InformationForm
        data={props.data.information}
        submitHandler={infoSubmitHandler}
      />
      <ExperienceForm
        data={props.data.experience}
        submitHandler={expSubmitHandler}
        deleteHandler={expDeleteHandler}
        addHandler={expAddHandler}
      />
      <ProjectsForm
        data={props.data.projects}
        submitHandler={projSubmitHandler}
        deleteHandler={projDeleteHandler}
        addHandler={projAddHandler}
      />
      <EducationForm
        data={props.data.education}
        submitHandler={eduSubmitHandler}
        deleteHandler={eduDeleteHandler}
        addHandler={eduAddHandler}
      />
      <TrainingForm
        data={props.data.training}
        submitHandler={trainSubmitHandler}
        deleteHandler={trainDeleteHandler}
        addHandler={trainAddHandler}
      />
    </div>
  );
};

export default FormView;
