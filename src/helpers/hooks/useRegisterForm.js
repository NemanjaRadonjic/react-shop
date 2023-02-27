import { useState } from "react";
import useForm from "@hooks/useForm";
import {
  validateOnChange,
  validateUsername,
  validateEmail,
} from "@validation/register";

const validateInputs = validateOnChange();

const useRegisterForm = initialState => {
  const { formState, handleFormChange } = useForm(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleChange = event => {
    handleFormChange(event);
    handleChangeErrors(event.target.name, event.target.value);
  };

  const handleChangeErrors = (name, value) => {
    let newErrors = { ...errors };
    if (name === "password") {
      const passwordError = validateInputs.password(value);
      const repeatPasswordError = validateInputs.repeatPassword(
        value,
        formState.repeatPassword
      );
      newErrors = {
        ...newErrors,
        password: passwordError,
        repeatPassword: repeatPasswordError,
      };
    } else if (name === "repeatPassword") {
      const repeatPasswordError = validateInputs.repeatPassword(
        value,
        formState.password
      );
      newErrors = {
        ...newErrors,
        repeatPassword: repeatPasswordError,
      };
    } else {
      const error = validateInputs[name](value);
      newErrors = { ...newErrors, [name]: error };
    }
    setErrors(newErrors);
  };

  const isFormValid = users => {
    if (isValid(errors)) {
      const newErrors = {
        username: validateUsername(users, formState.username),
        email: validateEmail(users, formState.email),
      };
      setErrors(newErrors);
      if (isValid(newErrors)) return true;
    }
  };

  const isValid = errors => !Object.values(errors).some(error => error);

  return { formState, handleChange, errors, isFormValid, isValid };
};

export default useRegisterForm;
