import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

const Search = ({updated, setUpdated}) => {
  let [value, setValue] = React.useState("");
  const {user} = useContext(AuthContext);

  let handleInputChange = e => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  const handleSubmit = () => {
    console.log(value);
    axios.post("https://notice-app-backend-production.up.railway.app/noticeboard/add", {
      description: value,
      user: user._id,
      }).then(res => {
        console.log(res);
        setUpdated(!updated);
      })
      
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
        <Button mt="0.5rem" onClick={handleSubmit}>Submit</Button>
      </FormControl>
    </Box>
  );
};

export default Search;
