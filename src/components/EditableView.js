import React from "react";
import "./EditableView.css";
import PrintablePage from "./PrintablePage";
import ViewButton from "./ViewButton";
import Form from "./Form";

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
        {this.state.preview ? (
          <PrintablePage data={this.props.data} />
        ) : (
          <Form
            data={this.props.data}
            onAddData={this.props.onAddData}
            handleSubmit={this.props.handleSubmit}
            startingData={this.props.startingData}
          />
        )}
      </div>
    );
  }
}

export default EditableView;
