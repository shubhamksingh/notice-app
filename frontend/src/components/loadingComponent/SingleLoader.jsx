import { Box, Skeleton, useColorMode } from '@chakra-ui/react'
import React from 'react'

const SingleLoader = () => {
    const {colorMode} = useColorMode();
  return (
    <Box  border={'1px solid'} borderColor={colorMode=='dark'?'yellow':'green.500'} p='1rem' pl='1rem' pr='1rem' mb='1rem' borderRadius='5px'>
    <Skeleton height="4rem" />
    </Box>
  )
}

export default SingleLoader