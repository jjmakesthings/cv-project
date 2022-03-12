import classes from "./FormView.module.css";

const AchievmentsSection = (props) => {
  const changeAchievment = (event, id) => {
    props.changeHandler(event.target.value, id);
  };
  const achievmentArray = props.data.map((achievment, index) => {
    return (
      <li key={achievment.id}>
        <textarea
          onChange={(event) => changeAchievment(event, achievment.id)}
          value={achievment.text}
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
