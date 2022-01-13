import React from "react";
import "./App.css";
import EditableView from "./components/EditableView";
import PrintablePage from "./components/PrintablePage";

const startingData = {
  header: {
    name: "",
    phone: "",
    email: "",
    town: "",
    links: [],
  },
  education: [
    {
      degree: "",
      major: "",
      school: "",
      city: "",
      date: "",
    },
  ],
  training: [{}],
  skills: [{}],
  experience: [{}],
  projects: [{}],
  hobbies: [{}],
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      printable: false,
      data: JSON.parse(JSON.stringify(startingData)),
    };
    this.print = this.print.bind(this);
    this.addData = this.addData.bind(this);
  }

  addData(section) {
    const newState = Object.assign({}, this.state);
    newState.data[section].push(
      JSON.parse(JSON.stringify(startingData[section][0]))
    );
    this.setState(newState);
    console.log(startingData);
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
      <PrintablePage data={this.state.data} />
    ) : (
      <EditableView
        onPrint={this.print}
        data={this.state.data}
        onAddData={this.addData}
      />
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
