import React from "react";
import "./App.css";
import EditableView from "./components/EditableView";
import PrintablePage from "./components/PrintablePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      printable: false,
    };
    this.print = this.print.bind(this);
  }

  print() {
    this.setState(
      {
        printable: true,
      },
      () => {
        window.print();
        this.setState({ printable: false });
      }
    );
  }

  render() {
    let page = this.state.printable ? (
      <PrintablePage />
    ) : (
      <EditableView onPrint={this.print} />
    );
    return (
      <div id="App">
        <header className="App-header"></header>
        {page}
      </div>
    );
  }
}
export default App;
