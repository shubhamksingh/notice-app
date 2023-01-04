import { Box, Skeleton, useColorMode } from "@chakra-ui/react";
import React from "react";
import SingleLoader from "./SingleLoader";

const Loader = () => {
  return (
    <Box>
      {[1, 2, 3, 4].map((notice, index) => (
        <SingleLoader />
      ))}
    </Box>
  );
};

export default Loader;
