import { useState } from "react";
import useForm from "@hooks/useForm";

const useLoginForm = initialState => {
  const { formState, handleFormChange } = useForm(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleChange = event => {
    handleFormChange(event);
    setErrors({ ...errors, [event.target.name]: null });
  };

  const isLoginFormValid = users => {
    const newErrors = { ...initialState };
    const user = users.find(user => user.email === formState.email);

    if (!user) {
      newErrors.email = "No account found with that email.";
    } else {
      if (user.password !== formState.password) {
        newErrors.password = "Wrong password.";
      } else {
        setErrors(newErrors);
        return true;
      }
    }

    setErrors(newErrors);
  };

  return { formState, handleChange, errors, isLoginFormValid };
};

export default useLoginForm;
