import { useState } from "react";

const useInput = (initial = "", validator = () => true) => {
  const [value, setValue] = useState(initial);
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validator(value);

  const hasError = isTouched && !isValid ? true : false;

  const onChange = (event) => {
    setIsTouched(true);
    setValue(event.target.value);
  };

  const onBlur = () => {
    setIsTouched(true);
  };

  return { value, hasError, isValid, isTouched, onChange, onBlur };
};

export default useInput;
