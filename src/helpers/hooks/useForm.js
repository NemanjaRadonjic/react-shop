import { useState } from "react";

const useForm = initialState => {
  const [formState, setFormState] = useState(initialState);

  const handleFormChange = event =>
    setFormState({ ...formState, [event.target.name]: event.target.value });

  return { formState, handleFormChange };
};

export default useForm;
