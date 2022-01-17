import React from "react";
import "./App.css";
import EditableView from "./components/EditableView";
import PrintablePage from "./components/PrintablePage";

const startingData = {
  information: {
    Name: "",
    Phone: "",
    Email: "",
    Town: "",
    Links: [""],
  },
  education: [
    {
      Degree: "",
      Major: "",
      School: "",
      City: "",
      Date: "",
    },
  ],
  Training: [
    {
      Title: "",
      School: "",
      Date: "",
    },
  ],
  Skills: [
    {
      Category: "",
      Title: "",
    },
  ],
  Experience: [
    {
      Employer: "",
      Start: "",
      End: "",
      City: "",
      Title: "",
      Achievments: [""],
    },
  ],
  Projects: [
    {
      Title: "",
      Subtitle: "",
      Summary: "",
    },
  ],
  Hobbies: [
    {
      Title: "",
    },
  ],
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(section, data) {
    const newState = Object.assign({}, this.state);
    newState.data[section] = data;
    this.setState(newState);
  }

  addData(section) {
    const newState = Object.assign({}, this.state);
    newState.data[section].push(
      JSON.parse(JSON.stringify(startingData[section][0]))
    );
    this.setState(newState);
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
        handleSubmit={this.handleSubmit}
        startingData={startingData}
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
