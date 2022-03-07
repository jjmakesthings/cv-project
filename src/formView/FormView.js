import { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import InformationForm from "./InformationForm";

const FormView = (props) => {
  //  const [state, setState] = useState(JSON.parse(JSON.stringify(props.data)));

  const infoSubmitHandler = (data) => {
    console.log(data);
    props.submitHandler("information", data);
  };

  const expSubmitHandler = (data, index) => {
    console.log(data);
    props.submitHandler("experience", data, index);
  };

  return (
    <div>
      <h1>Im a Form</h1>
      <InformationForm
        data={props.data.information}
        submitHandler={infoSubmitHandler}
      />
      <ExperienceForm
        data={props.data.experience}
        submitHandler={expSubmitHandler}
      />
    </div>
  );
};

export default FormView;
