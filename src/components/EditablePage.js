import React from "react";
import "./EditablePage.css";
import PrintButton from "./PrintButton";

class EditablePage extends React.Component {
  render() {
    return (
      <div>
        <PrintButton onPrint={this.props.onPrint} />
        <h1 className="page">I am editable</h1>
      </div>
    );
  }
}

export default EditablePage;
