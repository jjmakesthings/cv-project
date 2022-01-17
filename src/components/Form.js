import React from "react";
import "./Form.css";

class FormFieldSet extends React.Component {
  render() {
    let fieldSet = Object.keys(this.props.data).map((field) => {
      if (Array.isArray(this.props.data[field])) {
        return this.props.data[field].map((item, index) => {
          return (
            <label key={index}>
              {field}
              <input
                type="text"
                name={field}
                index={index}
                value={item}
                onChange={(event) =>
                  this.props.handleChange(
                    event,
                    this.props.section,
                    this.props.index,
                    field,
                    index
                  )
                }
              />
            </label>
          );
        });
      } else {
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
      }
    });
    return (
      <div
        key={this.props.index}
        className={`field-set ${this.props.divClass}`}
      >
        {fieldSet}
      </div>
    );
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
            divClass="multiple-set"
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
          divClass="single-set"
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
        <h2>{this.props.title}</h2>
        <form onSubmit={this.props.handleSubmit}>
          {fields}
          <div className="form-buttons">
            <input type="submit" value="Submit" />
            {addAnother}
          </div>
        </form>
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
  handleChange(event, section, index, name, listIndex) {
    const newState = Object.assign({}, this.state);
    if (listIndex) {
      if (typeof index === "number") {
        newState[section][index][name][listIndex] = event.target.value;
      }
      newState[section][name][listIndex] = event.target.value;
    } else {
      if (typeof index === "number") {
        newState[section][index][name] = event.target.value;
      }
      newState[section][name] = event.target.value;
    }
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
