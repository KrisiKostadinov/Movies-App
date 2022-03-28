import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import UsersContext from '../../../context/UsersContext';

const Logout = () => {

  const { setUser } = useContext(UsersContext);

  useEffect(() => {
    setUser(null);
  }, []);

  return (
    <div>
      <Navigate to={'/users/login'} />
    </div>
  )
}

export default Logout