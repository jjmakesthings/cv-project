import React, { useState, useEffect } from "react";
import classes from "./FormView.module.css";

import InformationForm from "./InformationForm";

function FormInput(props) {
  return (
    <label key={props.field}>
      {props.field}
      <input
        type="text"
        name={props.field}
        index={props.index}
        value={props.value}
        onChange={(event) =>
          props.handleChange(event, props.section, props.index, props.field)
        }
      />
    </label>
  );
}

function FormArrayOfInputs(props) {
  let arrayFieldSet = props.data.map((item, index) => {
    return (
      <label key={index}>
        {props.field}
        <input
          type="text"
          name={props.field}
          key={index}
          index={index}
          value={item}
          onChange={(event) =>
            props.handleChange(
              event,
              props.section,
              props.index,
              props.field,
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
          props.onAddListItem(props.section, props.index, props.field)
        }
      >
        New {props.field}
      </button>
    </div>
  );
}

function FormFieldSet(props) {
  let fieldSet = Object.keys(props.data).map((field) => {
    if (Array.isArray(props.data[field])) {
      return (
        <FormArrayOfInputs
          data={props.data[field]}
          field={field}
          index={props.index}
          key={field}
          divClass="multiple-set"
          section={props.section}
          handleChange={props.handleChange}
          onAddListItem={props.onAddListItem}
        />
      );
    } else {
      return (
        <FormInput
          field={field}
          index={props.index}
          value={props.data[field]}
          key={field}
          divClass="multiple-set"
          section={props.section}
          handleChange={props.handleChange}
        />
      );
    }
  });
  return (
    <div
      key={props.index}
      className={`field-set ${props.divClass}`}
      index={props.index}
    >
      {fieldSet}
    </div>
  );
}

function FormSection(props) {
  let fields;
  let isList = false;
  if (Array.isArray(props.data) && typeof props.data[0] === "object") {
    isList = true;
    fields = props.data.map((object, index) => {
      return (
        <FormFieldSet
          data={object}
          key={index}
          index={index}
          divClass="multiple-set"
          section={props.title}
          handleChange={props.handleChange}
          onAddListItem={props.onAddListItem}
        />
      );
    });
  } else {
    fields = (
      <FormFieldSet
        data={props.data}
        index="null"
        divClass="single-set"
        section={props.title}
        handleChange={props.handleChange}
        onAddListItem={props.onAddListItem}
      />
    );
  }
  let addAnother = isList ? (
    <button onClick={() => props.onAddData(props.title)}>
      New {props.title}
    </button>
  ) : null;
  return (
    <div className="form-section">
      <h2>{props.title}</h2>
      <form onSubmit={props.handleSubmit}>
        {fields}
        <div className="form-buttons">
          <input type="submit" value="Save" />
          {addAnother}
        </div>
      </form>
    </div>
  );
}

function Form(props) {
  const [state, setState] = useState(JSON.parse(JSON.stringify(props.data)));

  function handleChange(event, section, index, name, listIndex) {
    const newState = Object.assign({}, state);
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
    setState(newState);
  }
  function onAddData(section) {
    const newState = Object.assign({}, state);
    newState[section].push(
      JSON.parse(JSON.stringify(props.startingData[section][0]))
    );
    setState(newState);
  }
  function onAddListItem(section, index, name) {
    const newState = Object.assign({}, state);
    console.log(section, index, name);
    if (index >= 0) {
      newState[section][index][name].push("");
    } else {
      newState[section][name].push("");
    }
    setState(newState);
  }
  function handleSubmit(event, section) {
    event.preventDefault();
    props.handleSubmit(section, JSON.parse(JSON.stringify(state[section])));
  }

  let formSections = Object.keys(state).map((section) => {
    return (
      <FormSection
        key={section}
        title={section}
        data={state[section]}
        onAddData={onAddData}
        onAddListItem={onAddListItem}
        handleSubmit={(event) => handleSubmit(event, section)}
        handleChange={handleChange}
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

export default Form;
