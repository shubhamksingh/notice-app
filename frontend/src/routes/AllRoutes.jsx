import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import NoticeBoard from '../pages/NoticeBoard'
import PrivateRoute from '../privateRoute/PrivateRoute'

const AllRoutes = () => {
  
   return (
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path='/noticeBoard' element={<PrivateRoute><NoticeBoard/></PrivateRoute>} />
      </Routes>
   )
}

export default AllRoutes