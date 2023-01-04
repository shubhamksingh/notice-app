import React from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextProvider'

const PrivateRoute = ({children}) => {
  const {user} = React.useContext(AuthContext);
    return  user ? children : <Navigate to='/'/>
}

export default PrivateRoute