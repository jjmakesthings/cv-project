import React from "react";
import "./Form.css";

class EducationField extends React.Component {
  render() {
    let educationFields = Object.keys(this.props.data).map((field) => {
      return (
        <label>
          {field}
          <input type="text" name="name" />
        </label>
      );
    });
    return (
      <div>
        <label>{educationFields}</label>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    let educationData = this.props.data.education.map((object) => {
      return <EducationField data={object} />;
    });

    return (
      <div>
        <h1>Im a Form</h1>
        <form>
          {educationData}
          <input type="submit" value="Submit" />
        </form>
        <button onClick={() => this.props.onAddData("education")}>
          Add Another
        </button>
      </div>
    );
  }
}

export default Form;
