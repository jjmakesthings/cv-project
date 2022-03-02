import useInput from "../hooks/use-input";
import classes from "./FormView.module.css";

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

  function submitHandler(event) {
    event.preventDefault();
    if (
      !employer.isValid ||
      !location.isValid ||
      !start.isValid ||
      !end.isValid ||
      !title.isValid ||
    ) {
      employer.isTouched = true;
      location.isTouched = true;
      start.isTouched = true;
      end.isTouched = true;
      title.isTouched = true;
      return;
    }
    const infoData = {
      employer: employer.input,
      start: start.input,
      end: end.input,
      city: location.value,
      title: title.value,
    };

    props.onSubmit("exp", infoData);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div
        className={`${classes.control} ${
          name.hasError ? classes.invalid : ""
        }`}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name.value}
          onChange={name.onChange}
          onBlur={name.onBlur}
        />
        {name.hasError ? <p>Please enter a name.</p> : ""}
      </div>
      <div
        className={`${classes.control} ${
          phone.hasError ? classes.invalid : ""
        }`}
      >
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          required
          id="phone"
          value={phone.value}
          onChange={phone.onChange}
          onBlur={phone.onBlur}
        />
        {phone.hasError ? <p>Please enter a phone number.</p> : ""}
      </div>
      <div
        className={`${classes.control} ${
          email.hasError ? classes.invalid : ""
        }`}
      >
        <label htmlFor="email">Email</label>
        <input
          type="text"
          required
          id="email"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
        />
        {email.hasError ? <p>Please enter a valid email address.</p> : ""}
      </div>
      <div
        className={`${classes.control} ${
          location.hasError ? classes.invalid : ""
        }`}
      >
        <label htmlFor="location">Location</label>
        <input
          type="text"
          required
          id="location"
          value={location.value}
          onChange={location.onChange}
          onBlur={location.onBlur}
        />
        {location.hasError ? <p>Please enter a location.</p> : ""}
      </div>
      <div className={classes.actions}>
        <button>Save</button>
      </div>
    </form>
  );
};

export default ExperienceSection;
