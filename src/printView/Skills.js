import classes from "./Skills.module.css";

function Skills(props) {
  const skills = props.data.map((skill, index) => {
    return (
      <span key={index} className={classes.skill}>
        {skill}
      </span>
    );
  });
  return <div>{skills}</div>;
}

export default Skills;
