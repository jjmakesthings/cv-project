import React from "react";

class ViewButton extends React.Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.click}>
        {this.props.text}
      </button>
    );
  }
}

export default ViewButton;
