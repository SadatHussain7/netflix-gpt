export const validateData = (email, password, name) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);

  if (!isEmailValid) {
    return "Invalid Email";
  }
  if (!isPasswordValid) {
    return "Invalid Password";
  }
//   if (!isNameValid) {
//     return "Invalid Name";
//   }

  return null;
};
