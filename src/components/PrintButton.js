import React from "react";

class PrintButton extends React.Component {
  render() {
    return <button onClick={this.props.onPrint}>Print</button>;
  }
}

export default PrintButton;
