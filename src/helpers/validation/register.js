export const validateOnChange = () => {
  const username = value => {
    if (!value.length) return null;
    if (value.length > 8) return "Username is too long.";
    if (value.length < 4) return "Username is too short.";
    return null;
  };
  const email = value => {
    if (!value) return null;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      return "Not a valid email.";
    return null;
  };
  const password = value => {
    if (!value) return null;
    if (value.length < 6) return "Password is too short.";
    if (value.length > 15) return "Password is too long.";
  };
  const repeatPassword = (value, compareValue) => {
    if (!value) return null;
    if (value !== compareValue) return "Passwords do not match.";
    return null;
  };
  return { username, email, password, repeatPassword };
};

export const validateOnSubmit = (initialState, formState, users) => {
  const newErrors = { ...initialState };
  const { username, email } = formState;
  if (users.some(user => user.username === username)) {
    newErrors.username = "Username already exists.";
  }
  if (users.some(user => user.email === email)) {
    newErrors.email = "Email already exists.";
  }
  return newErrors;
};
