import useInput from "../hooks/use-input";
import classes from "./FormView.module.css";
import LabeledTextInput from "./LabeledTextInput";
import UnlabeledTextInput from "./UnlabeledTextInput";

{
  employer: "Taylor Devices, Inc.",
  start: "Jul, 2020",
  end: "Present",
  city: "North Tonawanda, NY",
  title: "Project Engineer",
  achievments: [
    "Led concept, design, and test efforts for a spaceborn landing gear shock absorber. Communicated with engineers across multiple disciplines to develop specifications for the product and implement the design.",
    "Performed stress analysis on an isolator mount with geometric and material nonlinearity to establish design limits.",
    "Designer and project manager on 5 aerospace viscous damper projects.",
  ],
},


const ExperienceSection = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const employer = useInput(props.data.employer, isNotEmpty);
  const location = useInput(props.data.city, isNotEmpty);
  const start = useInput(props.data.start, isNotEmpty);
  const end = useInput(props.data.end, isNotEmpty);
  const title = useInput(props.data.title, isNotEmpty);
  const achievments = props.data.achievments.map((achievment)=>{
    return useInput(achievment)
  })
  const inputArray = [employer, location, start, end, title].concat(achievments)

  function submitHandler(event) {
    event.preventDefault();
    let willReturn = false
    inputArray.forEach((input)=>{
      if(!input.isValid){
        input.isTouched=true
        willReturn = true
      }
    })
    if(willReturn){
      return;
    }
    const expData = {
      employer: employer.value,
      start: start.value,
      end: end.value,
      city: location.value,
      title: title.value,
      achievments: achievments.map(achievment=>achievment.value)
    };

    props.onSubmit("exp", expData);
  }

  const achievmentInputs = achievments.map((achievmentObj, index)=>{
    return (
      <UnlabeledTextInput key={index} obj={achievmentObj} name = {`achievment ${index}`} errorMessage="Please enter an achievment or delete" />
    )
  })

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <LabeledTextInput
          obj={name}
          name="Name"
          errorMessage="Please enter a name."
        />
        <LabeledTextInput
          obj={phone}
          name="Phone number"
          errorMessage="Please enter a phone number."
        />
        <LabeledTextInput
          obj={email}
          name="Email address"
          errorMessage="Please enter a valid email address."
        />
        <LabeledTextInput
          obj={location}
          name="Location"
          errorMessage="Please enter a location."
        />
      <div className={classes.actions}>
        <button>Save</button>
      </div>
    </form>
  );
};

export default ExperienceSection;
