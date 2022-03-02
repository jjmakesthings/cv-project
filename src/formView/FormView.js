import { useState } from "react";
import InformationForm from "./InformationForm";

function FormView(props) {
  const [state, setState] = useState(JSON.parse(JSON.stringify(props.data)));

  const onSubmit = (section, data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Im a Form</h1>
      <InformationForm data={state.information} onSubmit={onSubmit} />
    </div>
  );
}

export default FormView;
