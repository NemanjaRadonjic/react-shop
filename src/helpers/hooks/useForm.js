import { useState } from "react";

const useForm = initialState => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = event =>
    setFormState({ ...formState, [event.target.name]: event.target.value });

  const resetForm = () => setFormState(initialState);

  return { formState, handleChange, resetForm };
};

export default useForm;
