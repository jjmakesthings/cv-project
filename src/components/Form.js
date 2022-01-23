import React from "react";
import "./Form.css";

class FormInput extends React.Component {
  render() {
    return (
      <label key={this.props.field}>
        {this.props.field}
        <input
          type="text"
          name={this.props.field}
          index={this.props.index}
          value={this.props.value}
          onChange={(event) =>
            this.props.handleChange(
              event,
              this.props.section,
              this.props.index,
              this.props.field
            )
          }
        />
      </label>
    );
  }
}

class FormArrayOfInputs extends React.Component {
  render() {
    let arrayFieldSet = this.props.data.map((item, index) => {
      return (
        <label key={index}>
          {this.props.field}
          <input
            type="text"
            name={this.props.field}
            key={index}
            index={index}
            value={item}
            onChange={(event) =>
              this.props.handleChange(
                event,
                this.props.section,
                this.props.index,
                this.props.field,
                index
              )
            }
          />
        </label>
      );
    });
    return (
      <div>
        {arrayFieldSet}
        <button
          onClick={() =>
            this.props.onAddListItem(
              this.props.section,
              this.props.index,
              this.props.field
            )
          }
        >
          New {this.props.field}
        </button>
      </div>
    );
  }
}

class FormFieldSet extends React.Component {
  render() {
    let fieldSet = Object.keys(this.props.data).map((field) => {
      if (Array.isArray(this.props.data[field])) {
        return (
          <FormArrayOfInputs
            data={this.props.data[field]}
            field={field}
            index={this.props.index}
            key={field}
            divClass="multiple-set"
            section={this.props.section}
            handleChange={this.props.handleChange}
            onAddListItem={this.props.onAddListItem}
          />
        );
      } else {
        return (
          <FormInput
            field={field}
            index={this.props.index}
            value={this.props.data[field]}
            key={field}
            divClass="multiple-set"
            section={this.props.section}
            handleChange={this.props.handleChange}
          />
        );
      }
    });
    return (
      <div
        key={this.props.index}
        className={`field-set ${this.props.divClass}`}
        index={this.props.index}
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
            onAddListItem={this.props.onAddListItem}
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
          onAddListItem={this.props.onAddListItem}
        />
      );
    }
    let addAnother = isList ? (
      <button onClick={() => this.props.onAddData(this.props.title)}>
        New {this.props.title}
      </button>
    ) : null;
    return (
      <div className="form-section">
        <h2>{this.props.title}</h2>
        <form onSubmit={this.props.handleSubmit}>
          {fields}
          <div className="form-buttons">
            <input type="submit" value="Save" />
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
    this.onAddListItem = this.onAddListItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event, section, index, name, listIndex) {
    const newState = Object.assign({}, this.state);
    if (listIndex >= 0) {
      if (index >= 0) {
        newState[section][index][name][listIndex] = event.target.value;
      } else {
        newState[section][name][listIndex] = event.target.value;
      }
    } else {
      if (index >= 0) {
        newState[section][index][name] = event.target.value;
      } else {
        newState[section][name] = event.target.value;
      }
    }
    this.setState(newState);
  }
  onAddData(section) {
    const newState = Object.assign({}, this.state);
    console.log(newState);
    newState[section].push(
      JSON.parse(JSON.stringify(this.props.startingData[section][0]))
    );
    this.setState(newState);
  }
  onAddListItem(section, index, name) {
    const newState = Object.assign({}, this.state);
    console.log(newState);
    console.log(section, index, name);
    if (index >= 0) {
      newState[section][index][name].push("");
    } else {
      newState[section][name].push("");
    }
    this.setState(newState);
  }
  handleSubmit(event, section) {
    event.preventDefault();
    this.props.handleSubmit(
      section,
      JSON.parse(JSON.stringify(this.state[section]))
    );
  }
  render() {
    console.log(this.state);
    let formSections = Object.keys(this.state).map((section) => {
      return (
        <FormSection
          key={section}
          title={section}
          data={this.state[section]}
          onAddData={this.onAddData}
          onAddListItem={this.onAddListItem}
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
