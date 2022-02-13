import React, { useState } from "react";
import "./EditableView.css";
import PrintablePage from "./PrintablePage";
import ViewButton from "./ViewButton";
import Form from "./Form";

function EditableView(props) {
  const [preview, setPreview] = useState(false);

  return (
    <div className="form-view">
      <ViewButton
        className={preview ? "active" : null}
        click={() => setPreview(!preview)}
        text="Preview"
      />
      <ViewButton
        className={preview ? null : "active"}
        click={props.onPrint}
        text="Print"
      />
      {preview ? (
        <PrintablePage data={props.data} />
      ) : (
        <Form
          data={props.data}
          onAddData={props.onAddData}
          handleSubmit={props.handleSubmit}
          startingData={props.startingData}
        />
      )}
    </div>
  );
}

export default EditableView;
