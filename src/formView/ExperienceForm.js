import Card from "../ui/Card";
import ExperienceSection from "./ExperienceSection";

const ExperienceForm = (props) => {
  const sections = props.data.map((exp, index) => {
    return (
      <ExperienceSection
        key={index}
        expIndex={index}
        data={exp}
        submitHandler={props.submitHandler}
      />
    );
  });

  return (
    <Card>
      <h2>Experience</h2>
      {sections}
    </Card>
  );
};

export default ExperienceForm;
