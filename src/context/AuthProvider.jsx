import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export  const AuthContext = createContext()
const AuthProvider = ({children}) => {

const [userDate, setuserData] = useState(null)  //pass 'null' instade of empty-array []  
useEffect(()=>{
  const {employees, admin} = getLocalStorage() 
  setuserData({employees,admin})
},[])


  return (
    <div>
      <AuthContext.Provider value={userDate}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
