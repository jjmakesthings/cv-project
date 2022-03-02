import { useState } from "react";
import InformationForm from "./InformationForm";

function FormView(props) {
  const [state, setState] = useState(JSON.parse(JSON.stringify(props.data)));

  const infoSubmitHandler = (data) => {
    console.log(data);
    props.submitHandler("information", data);
  };

  return (
    <div>
      <h1>Im a Form</h1>
      <InformationForm
        data={state.information}
        submitHandler={infoSubmitHandler}
      />
    </div>
  );
}

export default FormView;
