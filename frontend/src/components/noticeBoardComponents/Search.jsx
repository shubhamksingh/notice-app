import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { postNotice } from "../../utilis/searchHelper/postNotice";
import { postError, postSuccess } from "../../utilis/searchHelper/toashObjects";

const Search = ({ updated, setUpdated }) => {
  let [value, setValue] = React.useState("");
  const { colorMode } = useColorMode();
  const toast = useToast();
  const { user } = useContext(AuthContext);

  let handleInputChange = e => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  const handleSubmit = () => {
    console.log(value);
    postNotice(user, value)
      .then(res => {
        setUpdated(!updated);
        setValue("");
        toast(postSuccess());
      })
      .catch(err => {
        toast(postError());
      });
  };
  return (
    <Box m="auto" w={{ lg: "50%" }}>
      <FormControl>
        <FormLabel>Submit a notice: </FormLabel>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="Enter notice here"
          size="sm"
        />
        <Flex justifyContent={"flex-end"}>
          <Button
            mt="0.5rem"
            ml="0px"
            onClick={handleSubmit}
            bg={colorMode == "dark" ? "blue.500" : "blue.200"}
          >
            Submit
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default Search;
