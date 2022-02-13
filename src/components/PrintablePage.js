import React from "react";
import "./PrintablePage.css";

function PrintablePage(props) {
  return (
    <div className="page printable">
      <div className="left-column">
        <h1>John J. Shepard</h1>
        <section className="projects">
          <h2>Projects</h2>
          <hr className="solid" />
        </section>
        <section className="experience">
          <h2>experience</h2>
          <hr className="solid" />
        </section>
      </div>
      <div className="right-column">
        <section className="info"></section>
        <section className="skills">
          <h2>Skills</h2>
          <hr className="solid" />
        </section>
        <section className="training">
          <h2>Training</h2>
          <hr className="solid" />
        </section>
        <section className="education">
          <h2>Education</h2>
          <hr className="solid" />
        </section>
        <section className="hobbies">
          <h2>Hobbies</h2>
          <hr className="solid" />
        </section>
      </div>
    </div>
  );
}

export default PrintablePage;
