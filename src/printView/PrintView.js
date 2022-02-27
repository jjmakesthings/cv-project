import React from "react";
import classes from "./PrintView.module.css";

import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Training from "./Training";
import Skills from "./Skills";

function PrintablePage(props) {
  return (
    <div className={classes.page}>
      <div className={classes.leftColumn}>
        <h1>{props.data.information.name}</h1>
        <section className={classes.projects}>
          <h2>Projects</h2>
          <hr className={classes.solid} />
          <Projects data={props.data.projects} />
        </section>
        <section className={classes.experience}>
          <h2>Experience</h2>
          <hr className={classes.solid} />
          <Experience data={props.data.experience} />
        </section>
      </div>
      <div className={classes.rightColumn}>
        <section className={classes.info}>
          <p>{props.data.information.phone}</p>
          <p>{props.data.information.email}</p>
          <p>{props.data.information.location}</p>
        </section>
        <section className={classes.skills}>
          <h2>Skills</h2>
          <hr className={classes.solid} />
          <Skills data={props.data.skills} />
        </section>
        <section className={classes.training}>
          <h2>Training</h2>
          <hr className={classes.solid} />
          <Training data={props.data.training} />
        </section>
        <section className={classes.education}>
          <h2>Education</h2>
          <hr className={classes.solid} />
          <Education data={props.data.education} />
        </section>
        <section className={classes.hobbies}>
          <h2>Hobbies</h2>
          <hr className={classes.solid} />
          <Skills data={props.data.hobbies} />
        </section>
      </div>
    </div>
  );
}

export default PrintablePage;
