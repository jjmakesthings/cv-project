import React from "react";
import "./EditableView.css";
import PrintablePage from "./PrintablePage";
import ViewButton from "./ViewButton";

class Form extends React.Component {
  render() {
    return <h1>Im a Form</h1>;
  }
}

class EditableView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: false,
    };
    this.preview = this.preview.bind(this);
  }

  preview() {
    this.setState({
      preview: !this.state.preview,
    });
  }

  render() {
    return (
      <div className="form-view">
        <ViewButton
          className={this.state.preview ? "active" : null}
          click={this.preview}
          text="Preview"
        />
        <ViewButton
          className={this.state.preview ? null : "active"}
          click={this.props.onPrint}
          text="Print"
        />
        {this.state.preview ? <PrintablePage /> : <Form />}
      </div>
    );
  }
}

export default EditableView;
