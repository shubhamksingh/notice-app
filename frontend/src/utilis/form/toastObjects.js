export const loginNewUser = () => ({
  title: "Account Created",
  description: "Account created successfully & logged in",
  status: "success",
  duration: 3000,
  isClosable: true,
  position: "top",
});

export const loginError = () => ({
  title: "Error",
  description: "Please enter AlphaNumeric username Only",
  status: "error",
  duration: 3000,
  isClosable: true,
  position: "top",
});

export const loginOldUser = () => ({
  title: "Logged In",
  description: "Logged in successfully",
  status: "success",
  duration: 3000,
  isClosable: true,
  position: "top",
});
