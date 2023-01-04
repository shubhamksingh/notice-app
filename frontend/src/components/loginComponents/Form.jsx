import {
  Button,
  Center,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Text,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import { postLogin } from "../../utilis/form/postLogin";
import { loginError, loginNewUser, loginOldUser } from "../../utilis/form/toastObjects";
// import handleSubmit from "../../utilis/form/handleSubmit";

const Form = () => {
  const { colorMode } = useColorMode();
  const [username, setUsername] = React.useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const { login } = React.useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    postLogin(username)
      .then(res => {
        console.log(res);
        if (res.data.newUser) {
          toast(loginNewUser());
        } else {
          toast(loginOldUser());
        }
        login(res.data.user);
        navigate("/noticeBoard");
      })
      .catch(err => {
        toast(loginError());
      });
  };

  return (
    <FormControl
      w={{ lg: "40%" }}
      m="auto"
      boxShadow={"0px 0px 15px -9px"}
      p="2rem"
      minH="30rem"
      borderRadius="1rem"
      border={colorMode == "dark" && "1px"}
      borderColor={colorMode === "dark" && "yellow"}
    >
      <Heading mb="4rem" color={colorMode == "dark" && "teal.200"}>
        <Center>Login</Center>
      </Heading>
      <Text fontSize="2rem" mb="1rem">
        <Center>Pick a username</Center>
      </Text>
      <Input
        borderColor={colorMode == "dark" && "yellow"}
        onChange={e => setUsername(e.target.value)}
      />
      <FormHelperText>
        If new user, Account will be created and automatically logged in.
      </FormHelperText>
      <Button
        colorScheme="teal"
        display={"block"}
        m="auto"
        mt="3rem"
        onClick={handleSubmit}
      >
        Login
      </Button>
    </FormControl>
  );
};

export default Form;
