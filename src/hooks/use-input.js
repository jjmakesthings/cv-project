import { useState } from "react";

const useInput = (initial = "", validator = () => true) => {
  const [value, setValue] = useState(initial);
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validator(value);

  const hasError = isTouched && !isValid ? true : false;

  const changeHandler = (event) => {
    setIsTouched(true);
    setValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  return {
    value,
    hasError,
    isValid,
    isTouched,
    setIsTouched,
    onChange: changeHandler,
    onBlur: blurHandler,
  };
};

export default useInput;
