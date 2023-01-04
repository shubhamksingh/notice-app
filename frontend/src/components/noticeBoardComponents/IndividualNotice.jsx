import { Box, Flex, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const IndividualNotice = ({user,title, description, date}) => {
    const {colorMode} = useColorMode()
  return (
    <Box  border={'1px solid'} borderColor={colorMode=='dark'?'yellow':'green.500'} p='1rem' pl='1rem' pr='1rem' mb='1rem' borderRadius='5px'>
        <Text fontSize='17px' mb='0.4rem'>{description}</Text>
        <Flex justifyContent='space-between'>
            <Box color={colorMode=='dark'?'green.300':'blue.500'} fontWeight='bold'>{user.username}</Box>
            <Box color={colorMode=='dark'?'cyan': 'red'} fontWeight='bold'>{date}</Box>
        </Flex>
    </Box>
  )
}

export default IndividualNotice