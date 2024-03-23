import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const PrivateRoutes = ({ children }) => {
    const { user , loading } = useContext(AuthContext)

    if ( loading ) {
       return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children;
    } 
  
        return <Navigate to='/login' />;
   
}

export default PrivateRoutes;
