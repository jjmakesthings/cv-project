import React from "react";
import "./Form.css";

class FormFieldSet extends React.Component {
  render() {
    let fieldSet = Object.keys(this.props.data).map((field) => {
      return (
        <label key={field}>
          {field}
          <input
            type="text"
            name={field}
            index={this.props.index}
            value={this.props.data[field]}
            onChange={(event) =>
              this.props.handleChange(
                event,
                this.props.section,
                this.props.index,
                field
              )
            }
          />
        </label>
      );
    });
    return <div>{fieldSet}</div>;
  }
}

class FormSection extends React.Component {
  render() {
    let fields;
    let isList = false;
    if (Array.isArray(this.props.data)) {
      isList = true;
      fields = this.props.data.map((object, index) => {
        return (
          <FormFieldSet
            data={object}
            key={index}
            index={index}
            section={this.props.title}
            handleChange={this.props.handleChange}
          />
        );
      });
    } else {
      fields = (
        <FormFieldSet
          data={this.props.data}
          index="null"
          section={this.props.title}
          handleChange={this.props.handleChange}
        />
      );
    }
    let addAnother = isList ? (
      <button onClick={() => this.props.onAddData(this.props.title)}>
        Add Another
      </button>
    ) : null;
    return (
      <div className="form-section">
        <form onSubmit={this.props.handleSubmit}>
          {fields}
          <input type="submit" value="Submit" />
        </form>
        {addAnother}
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(JSON.stringify(this.props.data));
    this.handleChange = this.handleChange.bind(this);
    this.onAddData = this.onAddData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event, section, index, name) {
    const newState = Object.assign({}, this.state);
    if (typeof index === "number") {
      newState[section][index][name] = event.target.value;
    }
    newState[section][name] = event.target.value;
    this.setState(newState);
  }
  onAddData(section) {
    const newState = Object.assign({}, this.state);
    newState[section].push(
      JSON.parse(JSON.stringify(this.props.startingData[section][0]))
    );
    this.setState(newState);
    console.log("sub data", this.state);
    console.log("parent data", this.props.data);
  }
  handleSubmit(event, section) {
    event.preventDefault();
    console.log("submitting");
    console.log(this.state[section]);
    this.props.handleSubmit(
      section,
      JSON.parse(JSON.stringify(this.state[section]))
    );
  }
  render() {
    let formSections = Object.keys(this.state).map((section) => {
      return (
        <FormSection
          key={section}
          title={section}
          data={this.state[section]}
          onAddData={this.onAddData}
          handleSubmit={(event) => this.handleSubmit(event, section)}
          handleChange={this.handleChange}
        />
      );
    });
    return (
      <div>
        <h1>Im a Form</h1>
        {formSections}
      </div>
    );
  }
}

export default Form;
