import { useRef } from "react";
import classes from "./FormView.module.css";
import Card from "../ui/Card";

function InformationForm(props) {
  console.log(props.data);
  const nameRef = useRef(props.data.name);
  const phoneRef = useRef(props.data.phone);
  const emailRef = useRef(props.data.email);
  const locationRef = useRef(props.data.location);
  console.log(nameRef);

  function submitHandler(event) {
    event.preventDefault();

    const infoData = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      location: locationRef.current.value,
    };

    props.onSave("information", infoData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="phone">Phone</label>
          <input type="text" required id="phone" ref={phoneRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="text" required id="email" ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="location">Location</label>
          <input type="text" required id="location" ref={locationRef} />
        </div>
        <div className={classes.actions}>
          <button>Save</button>
        </div>
      </form>
    </Card>
  );
}

export default InformationForm;
