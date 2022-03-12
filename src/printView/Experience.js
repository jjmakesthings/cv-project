import classes from "./Experience.module.css";

function Achievments(props) {
  const achievments = props.data.map((ach, index) => {
    return (
      <li key={ach.id}>
        <p>{ach.text}</p>
      </li>
    );
  });
  achievments.pop();
  return <ul>{achievments}</ul>;
}

function Experience(props) {
  const experience = props.data.map((exp, index) => {
    return (
      <div key={index}>
        <div>
          <h3 className={classes.spanHeader}>
            <span>{exp.employer}</span>
            <span>{exp.city}</span>
          </h3>
          <h4 className={classes.spanHeader}>
            <span>{exp.title}</span>
            <span>{`${exp.start}-${exp.end}`}</span>
          </h4>
        </div>
        <Achievments data={exp.achievments} />
      </div>
    );
  });
  return experience;
}

export default Experience;
