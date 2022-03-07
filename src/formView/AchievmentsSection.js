import classes from "./FormView.module.css";

const AchievmentsSection = (props) => {
  const changeAchievment = (event, index) => {
    props.changeHandler(event.target.value, index);
  };
  const achievmentArray = props.data.map((achievment, index) => {
    return (
      <li key={index}>
        <textarea
          onChange={(event) => changeAchievment(event, index)}
          value={achievment}
        />
      </li>
    );
  });
  return (
    <div className={classes.control}>
      <h4>Achievments</h4>
      <ol>{achievmentArray}</ol>
    </div>
  );
};

export default AchievmentsSection;
