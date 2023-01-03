import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import NoticeBoard from '../pages/NoticeBoard'

const AllRoutes = () => {
  
   return (
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path='/noticeBoard' element={<NoticeBoard/>} />
      </Routes>
   )
}

export default AllRoutes