import classes from "./Skills.module.css";

function Skills(props) {
  const skills = props.data.map((skill, index) => {
    return (
      <span key={skill.id} className={classes.skill}>
        {skill.text}
      </span>
    );
  });
  return <div>{skills}</div>;
}

export default Skills;
