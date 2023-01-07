export const validateForm = (values, setErrors) => {
  const { email, password, confirmPassword } = values || {};
  const errors = {};
  let isValidated = true;

  if (email != null) {
    if (!email.length) {
      errors.email = "Email is required";
      isValidated = false;
    }
    if (email.length && !validateEmail(email)) {
      errors.email = "Email is not valid";
      isValidated = false;
    }
  }

  if (password != null) {
    if (!password.length) {
      errors.password = "Password can not be empty";
      isValidated = false;
    }
    if (password.length && !validatePassword(password)) {
      errors.password = "Password is not valid";
      isValidated = false;
    }
  }
  if (confirmPassword != null && !errors.password) {
    if (!confirmPassword.length) {
      errors.confirmPassword = "Please enter confirm password";
      isValidated = false;
    }
    if (confirmPassword.length && password !== confirmPassword) {
      errors.confirmPassword = "Enter correct password";
      isValidated = false;
    }
  }

  setErrors(errors);
  return isValidated;
};

//Regex
//Regular expressions

const validateEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const validatePassword = (password) => {
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(
    password
  );
};
