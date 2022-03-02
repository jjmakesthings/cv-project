import useInput from "../hooks/use-input";
import classes from "./FormView.module.css";
import Card from "../ui/Card";
import LabeledTextInput from "./LabeledTextInput";

const InformationForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  const name = useInput(props.data.name, isNotEmpty);
  const phone = useInput(props.data.phone, isNotEmpty);
  const email = useInput(props.data.email, isEmail);
  const location = useInput(props.data.location, isNotEmpty);
  const inputArray = [name, phone, email, location];

  function submitHandler(event) {
    event.preventDefault();
    let willReturn = false;
    inputArray.forEach((input) => {
      if (!input.isValid) {
        input.isTouched = true;
        willReturn = true;
      }
    });
    if (willReturn) {
      return;
    }
    const infoData = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      location: location.value,
    };
    props.submitHandler(infoData);
  }

  return (
    <Card>
      <h2>Information</h2>
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
    </Card>
  );
};

export default InformationForm;
