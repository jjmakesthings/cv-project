import useInput from "../hooks/use-input";
import classes from "./FormView.module.css";
import Card from "../ui/Card";

const InformationForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  const name = useInput(props.data.name, isNotEmpty);
  const phone = useInput(props.data.phone, isNotEmpty);
  const email = useInput(props.data.email, isEmail);
  const location = useInput(props.data.location, isNotEmpty);

  function submitHandler(event) {
    event.preventDefault();
    if (
      !name.isValid ||
      !phone.isValid ||
      !email.isValid ||
      !location.isValid
    ) {
      name.isTouched = true;
      phone.isTouched = true;
      email.isTouched = true;
      location.isTouched = true;
      return;
    }
    const infoData = {
      name: name.input,
      phone: phone.input,
      email: email.input,
      location: location.value,
    };

    props.submitHandler("information", infoData);
  }

  return (
    <Card>
      <h2>Experience</h2>
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
    </Card>
  );
};

export default InformationForm;
