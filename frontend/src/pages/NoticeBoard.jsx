import { Box } from '@chakra-ui/react'
import React from 'react'
import Nav from '../components/loginComponents/Nav'
import NoticeHeader from '../components/noticeBoardComponents/NoticeHeader'
import Notices from '../components/noticeBoardComponents/Notices'
import Search from '../components/noticeBoardComponents/Search'

const NoticeBoard = () => {
  const [updated, setUpdated] = React.useState(false);
  return (
    <Box  m='auto' mt='-1.5rem' w='100%'>
        <Nav/>
        <NoticeHeader/>
        <Search updated={updated} setUpdated={setUpdated}/>
        <Notices updated={updated}/>
    </Box>
  )
}

export default NoticeBoard