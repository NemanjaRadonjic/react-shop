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
    console.log({ value, compareValue });
    if (!value) return null;
    if (value !== compareValue) return "Passwords do not match.";
    return null;
  };
  return { username, email, password, repeatPassword };
};

export const validateOnSubmit = (formState, users) => ({
  username: validateUsername(users, formState.username),
  email: validateEmail(users, formState.email),
});

export const validateUsername = (users, username) => {
  if (users.some(user => user.username == username)) {
    return "Username already exists.";
  }
  return null;
};

export const validateEmail = (users, email) => {
  if (users.some(user => user.email == email)) {
    return "Email already exists.";
  }
  return null;
};

export const validatePassword = (user, password) => {
  if (user.password !== password) {
    return "Wrong password.";
  }
  return null;
};
