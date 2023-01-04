export const postSuccess = () => {
  return {
    title: "Success",
    description: "Notice added successfully",
    status: "success",
    duration: 3000,
    isClosable: true,
    position: "top",
  };
};

export const postError = () => {
   return  {
        title: "Error",
        description: "Message field cannot be empty",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      }
}
