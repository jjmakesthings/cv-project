import classes from "./SkillList.module.css";

const SkillsList = (props) => {
  const skillsArray = props.data.map((skill) => {
    return (
      <li className={classes.skill} key={skill.id}>
        <span>{skill.text}</span>
        <button onClick={(event) => props.deleteHandler(event, skill.id)}>
          X
        </button>
      </li>
    );
  });
  return <ul>{skillsArray}</ul>;
};

export default SkillsList;
