import { Button, Flex } from "@chakra-ui/react";
import React from "react";

// Pagination component to with the Product lists in page format

const Pagination = ({ currentPage, setCurrentPage : changePage , totalPage}) => {
  return (
    <Flex m="auto" mt="1rem" mb="2rem" justifyContent="center" gap="1rem">
      <Button
        colorScheme={"cyan"}
        disabled={currentPage == 1}
        onClick={() => changePage((prev) => prev - 1)}
      >
        Prev
      </Button>
      <Button>{currentPage}</Button>
      <Button
        colorScheme={"cyan"}
        disabled={currentPage == totalPage}
        onClick={() => changePage((prev) => prev + 1)}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
