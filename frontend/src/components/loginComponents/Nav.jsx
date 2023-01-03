import { Button, Flex, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Form from './Form';

const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent="flex-end" mb="2rem" p="2rem">
    <Button onClick={toggleColorMode} fontSize="1.4rem" p="1rem">
      {colorMode == "light" ? <BsFillMoonFill/> : <BsFillSunFill />}
    </Button>
    
  </Flex>
  )
}

export default Nav