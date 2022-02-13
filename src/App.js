import React, { useState } from "react";
import "./App.css";
import EditableView from "./components/EditableView";
import PrintablePage from "./components/PrintablePage";

const startingData = {
  Information: {
    Name: "",
    Phone: "",
    Email: "",
    Town: "",
    Link: [""],
  },
  Education: [
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
      Achievment: [""],
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

function App(props) {
  const [printable, setPrintable] = useState(false);
  const [data, setData] = useState(JSON.parse(JSON.stringify(startingData)));

  function handleSubmit(section, sectionData) {
    const newData = Object.assign({}, data);
    newData[section] = sectionData;
    setData(newData);
  }

  function addData(section) {
    const newData = Object.assign({}, data);
    newData[section].push(JSON.parse(JSON.stringify(startingData[section][0])));
    setData(newData);
  }

  async function print() {
    function printPromise() {
      return new Promise((resolve, reject) => {
        resolve(setPrintable(true));
      });
    }
    await printPromise();
    window.print();
    setPrintable(false);
  }

  return (
    <div id="App">
      <header className="App-header"></header>
      {printable ? (
        <PrintablePage data={data} />
      ) : (
        <EditableView
          onPrint={print}
          data={data}
          onAddData={addData}
          handleSubmit={handleSubmit}
          startingData={startingData}
        />
      )}
    </div>
  );
}
export default App;
