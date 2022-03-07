import React, { useState } from "react";

import FormView from "./formView/FormView";
import PrintView from "./printView/PrintView";
import ButtonBanner from "./buttonBanner/ButtonBanner";

const startingData = {
  information: {
    name: "John J. Shepard",
    phone: "(716)697-8327",
    email: "jjshepard.engr@gmail.com",
    location: "West Seneca, NY",
  },
  education: [
    {
      degree: "Bachelor of Science",
      major: "Mechanical Engineering Technology",
      school: "Rochester Institute of Technology",
      city: "Rochester, NY",
      date: "May, 2013",
    },
  ],
  training: [
    {
      title: "React - The Complete Guide",
      school: "Academind",
      date: "2022",
    },
    {
      title: "The Odin Project",
      school: "",
      date: "2022",
    },
    {
      title: "Javascript Algorithms and Data Structures",
      school: "Colt Steele",
      date: "2022",
    },
    {
      title: "Clean Code",
      school: "Academind",
      date: "2021",
    },
    {
      title: "Python Django - The Practical Guide",
      school: "Academind",
      date: "2021",
    },
    {
      title: "Automate the Boring Stuff",
      school: "Al Sweigart",
      date: "2021",
    },
  ],
  skills: [
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "Node.js",
    "React",
    "Django",
    "Tkinter",
    "Git",
    "VS Code",
    "PostgreSQL",
    "Webpack",
    "Pandas",
  ],
  experience: [
    {
      employer: "Taylor Devices, Inc.",
      start: "Jul, 2020",
      end: "Present",
      city: "North Tonawanda, NY",
      title: "Project Engineer",
      achievments: [
        "Led concept, design, and test efforts for a spaceborn landing gear shock absorber. Communicated with engineers across multiple disciplines to develop specifications for the product and implement the design.",
        "Performed stress analysis on an isolator mount with geometric and material nonlinearity to establish design limits.",
        "Designer and project manager on 5 aerospace viscous damper projects.",
        "",
      ],
    },
    {
      employer: "PRZ Technologies, Inc.",
      start: "Jun, 2016",
      end: "Jul, 2020",
      city: "Lancaster, NY",
      title: "Mechanical Design Engineer",
      achievments: [
        "Designed custom hydraulic fixtures built for CNC machining cells. Often, projects included workholding automotive steering knuckles for 2-3 machining operations.",
        "",
      ],
    },
    {
      employer: "New Scale Technologies, Inc.",
      start: "Nov, 2012",
      end: "Jun, 2016",
      city: "Victor, NY",
      title: "Mechanical Design Engineer",
      achievments: [
        "Managed 3 product lines by facilitating design optimizations, developing assembly processes, creating assembly and inspection tools, and training assembly staff.",
        "",
      ],
    },
  ],
  projects: [
    {
      title: "Playoff Pool Web Application",
      subtitle: "playoffpoolparty.com",
      summary:
        "Using Python and the Django framework, designed and built a website for hosting playoff confidence pools. The app allows users to create private leagues, invite friends, customize their league page, chat with members, and submit team rankings. Through a combination of API calls and web scraping, game data is displayed and scores are calculated for each user's entry. The app also features user authentication, email support for password reset, and storage for user uploaded logos.",
    },
    {
      title: "Spring-Damper Physics Simulator",
      subtitle: "Taylor Devices, Inc.",
      summary:
        "Built a desktop application using Python and a Tkinter GUI to simulate the motion of a spring-damper system. Designed a solver based on a numerical method alongside an algorithm to optimize time-step size based on system acceleration. The program displays results using Matplotlib and allows data to be exported as a csv. Functionality is also built in to allow inputs to be serialized to create a save file.",
    },
    {
      title: "Bridge Damper Design and Categorization Script",
      subtitle: "Taylor Devices, Inc.",
      summary:
        "Wrote a script used to design and sort bridge cable dampers for a project that required 432 dampers with unique specifications. This tool simplified the design process to allow experimentation of grouping thresholds to create the smallest number of unique designs while minimizing overengineering.",
    },
  ],
  hobbies: ["CNC Woodwork", "Tabletop Gaming", "Voleyball"],
};

function App() {
  const [preview, setPreview] = useState(false);
  const [printView, setPrintView] = useState(false);
  const [data, setData] = useState(JSON.parse(JSON.stringify(startingData)));

  function submitHandler(section, sectionData, index) {
    if (index >= 0) {
      setData((prev) => {
        prev[section][index] = sectionData;
        return prev;
      });
    } else {
      setData((prev) => {
        prev[section] = sectionData;
        return prev;
      });
    }
  }

  async function print() {
    function printPromise() {
      return new Promise((resolve, reject) => {
        resolve(setPrintView(true));
      });
    }
    await printPromise();
    window.print();
    setPrintView(false);
  }

  const toggleView = () => {
    setPreview(!preview);
  };

  return (
    <div id="App">
      <header className="App-header"></header>
      {printView ? (
        ""
      ) : (
        <ButtonBanner
          print={print}
          toggleView={toggleView}
          isPreview={preview}
        />
      )}

      {preview || printView ? (
        <PrintView data={data} />
      ) : (
        <FormView data={data} submitHandler={submitHandler} />
      )}
    </div>
  );
}
export default App;
