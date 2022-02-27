import classes from "./Skills.module.css";

function Skills(props) {
  const skills = props.data.map((skill) => {
    return <span className={classes.skill}>{skill}</span>;
  });
  return <div>{skills}</div>;
}

export default Skills;
