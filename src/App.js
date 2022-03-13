import React, { useState } from "react";

import FormView from "./formView/FormView";
import PrintView from "./printView/PrintView";
import ButtonBanner from "./buttonBanner/ButtonBanner";

const startingData = {
  information: {
    id: 1,
    name: "John J. Shepard",
    phone: "(716)697-8327",
    email: "jjshepard.engr@gmail.com",
    location: "West Seneca, NY",
  },
  education: [
    {
      id: 1,
      degree: "Bachelor of Science",
      major: "Mechanical Engineering Technology",
      school: "Rochester Institute of Technology",
      city: "Rochester, NY",
      date: "May, 2013",
    },
  ],
  training: [
    {
      id: 1,
      title: "React - The Complete Guide",
      school: "Academind",
      date: "2022",
    },
    {
      id: 2,
      title: "The Odin Project",
      school: "",
      date: "2022",
    },
    {
      id: 3,
      title: "Javascript Algorithms and Data Structures",
      school: "Colt Steele",
      date: "2022",
    },
    {
      id: 4,
      title: "Clean Code",
      school: "Academind",
      date: "2021",
    },
    {
      id: 5,
      title: "Python Django - The Practical Guide",
      school: "Academind",
      date: "2021",
    },
    {
      id: 6,
      title: "Automate the Boring Stuff",
      school: "Al Sweigart",
      date: "2021",
    },
  ],
  skills: [
    {
      id: 1,
      text: "JavaScript",
    },
    {
      id: 2,
      text: "Python",
    },
    {
      id: 3,
      text: "HTML",
    },
    {
      id: 4,
      text: "CSS",
    },
    {
      id: 5,
      text: "Node.js",
    },
    {
      id: 6,
      text: "React",
    },
    {
      id: 7,
      text: "Django",
    },
    {
      id: 8,
      text: "Tkinter",
    },
    {
      id: 9,
      text: "Git",
    },
    {
      id: 10,
      text: "VS Code",
    },
    {
      id: 11,
      text: "PostgreSQL",
    },
    {
      id: 12,
      text: "Webpack",
    },
    {
      id: 13,
      text: "Pandas",
    },
  ],
  experience: [
    {
      id: 1,
      employer: "Taylor Devices, Inc.",
      start: "Jul, 2020",
      end: "Present",
      city: "North Tonawanda, NY",
      title: "Project Engineer",
      achievments: [
        {
          id: 1,
          text: "Led concept, design, and test efforts for a spaceborn landing gear shock absorber. Communicated with engineers across multiple disciplines to develop specifications for the product and implement the design.",
        },
        {
          id: 2,
          text: "Performed stress analysis on an isolator mount with geometric and material nonlinearity to establish design limits.",
        },
        {
          id: 3,
          text: "Designer and project manager on 5 aerospace viscous damper projects.",
        },
        {
          id: 4,
          text: "",
        },
      ],
    },
    {
      id: 2,
      employer: "PRZ Technologies, Inc.",
      start: "Jun, 2016",
      end: "Jul, 2020",
      city: "Lancaster, NY",
      title: "Mechanical Design Engineer",
      achievments: [
        {
          id: 1,
          text: "Designed custom hydraulic fixtures built for CNC machining cells. Often, projects included workholding automotive steering knuckles for 2-3 machining operations.",
        },
        {
          id: 2,
          text: "",
        },
      ],
    },
    {
      id: 3,
      employer: "New Scale Technologies, Inc.",
      start: "Nov, 2012",
      end: "Jun, 2016",
      city: "Victor, NY",
      title: "Mechanical Design Engineer",
      achievments: [
        {
          id: 1,
          text: "Managed 3 product lines by facilitating design optimizations, developing assembly processes, creating assembly and inspection tools, and training assembly staff.",
        },
        {
          id: 2,
          text: "",
        },
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Playoff Pool Web Application",
      subtitle: "playoffpoolparty.com",
      summary:
        "Using Python and the Django framework, designed and built a website for hosting playoff confidence pools. The app allows users to create private leagues, invite friends, customize their league page, chat with members, and submit team rankings. Through a combination of API calls and web scraping, game data is displayed and scores are calculated for each user's entry. The app also features user authentication, email support for password reset, and storage for user uploaded logos.",
    },
    {
      id: 2,
      title: "Spring-Damper Physics Simulator",
      subtitle: "Taylor Devices, Inc.",
      summary:
        "Built a desktop application using Python and a Tkinter GUI to simulate the motion of a spring-damper system. Designed a solver based on a numerical method alongside an algorithm to optimize time-step size based on system acceleration. The program displays results using Matplotlib and allows data to be exported as a csv. Functionality is also built in to allow inputs to be serialized to create a save file.",
    },
    {
      id: 3,
      title: "Bridge Damper Design and Categorization Script",
      subtitle: "Taylor Devices, Inc.",
      summary:
        "Wrote a script used to design and sort bridge cable dampers for a project that required 432 dampers with unique specifications. This tool simplified the design process to allow experimentation of grouping thresholds to create the smallest number of unique designs while minimizing overengineering.",
    },
  ],
  hobbies: [
    {
      id: 1,
      text: "CNC Woodwork",
    },
    {
      id: 2,
      text: "Tabletop Gaming",
    },
    {
      id: 3,
      text: "Volleyball",
    },
  ],
};

class Experience {
  constructor(dataLocation) {
    this.id =
      dataLocation["experience"].length > 0
        ? dataLocation["experience"][dataLocation["experience"].length - 1].id +
          1
        : 1;
    this.employer = "";
    this.start = "";
    this.end = "";
    this.city = "";
    this.title = "";
    this.achievments = [{ id: 1, text: "" }];
  }
}
class Project {
  constructor(dataLocation) {
    this.id =
      dataLocation["projects"].length > 0
        ? dataLocation["projects"][dataLocation["projects"].length - 1].id + 1
        : 1;
    this.title = "";
    this.subtitle = "";
    this.summary = "";
  }
}
class Education {
  constructor(dataLocation) {
    this.id =
      dataLocation["education"].length > 0
        ? dataLocation["education"][dataLocation["education"].length - 1].id + 1
        : 1;
    this.degree = "";
    this.major = "";
    this.school = "";
    this.city = "";
    this.date = "";
  }
}
class Skill {
  constructor(dataLocation, section, sectionText) {
    this.id =
      dataLocation[section].length > 0
        ? dataLocation[section][dataLocation[section].length - 1].id + 1
        : 1;
    this.text = sectionText;
  }
}

function App() {
  const [preview, setPreview] = useState(false);
  const [printView, setPrintView] = useState(false);
  const [data, setData] = useState(JSON.parse(JSON.stringify(startingData)));

  function submitHandler(section, sectionData, id) {
    if (section === "information") {
      setData((prev) => {
        const next = JSON.parse(JSON.stringify(prev));
        next[section] = sectionData;
        return next;
      });
    } else if (section === "skills" || section === "hobbies") {
      setData((prev) => {
        const next = JSON.parse(JSON.stringify(prev));
        next[section].push(new Skill(data, section, sectionData));
        return next;
      });
    } else {
      setData((prev) => {
        const next = JSON.parse(JSON.stringify(prev));
        const index = next[section].map((obj) => obj.id).indexOf(id);
        next[section][index] = sectionData;
        return next;
      });
    }
  }
  function deleteHandler(section, id) {
    let confirm = window.confirm(
      `Are you sure you would like to delete from ${section}?`
    )
      ? true
      : false;
    if (!confirm) {
      return;
    }
    setData((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      const index = next[section].map((obj) => obj.id).indexOf(id);
      next[section].splice(index, 1);
      return next;
    });
  }
  function addHandler(section) {
    setData((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      switch (section) {
        case "experience":
          next[section].push(new Experience(data));
          break;
        case "projects":
          next[section].push(new Project(data));
          break;
        case "education":
          next[section].push(new Education(data));
          break;
        default:
          break;
      }
      console.log(next);
      return next;
    });
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
        <FormView
          data={data}
          submitHandler={submitHandler}
          deleteHandler={deleteHandler}
          addHandler={addHandler}
        />
      )}
    </div>
  );
}
export default App;
