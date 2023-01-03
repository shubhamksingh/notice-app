import {
  Button,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const Form = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
        Login
      </Heading>
      <Text fontSize="2rem" mb="1rem">
        Pick a username
      </Text>
      <Input borderColor={colorMode == "dark" && "yellow"} />
      <FormHelperText>
        If new user, Account will be created and automatically logged in.
      </FormHelperText>
      <Button mt="2rem" colorScheme="teal">
        Login
      </Button>
    </FormControl>
  );
};

export default Form;
