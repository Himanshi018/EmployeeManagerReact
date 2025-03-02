import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    
    const [userData, setUserData] = useState({
      employees: [],
      admin: []
    });

    useEffect(() => {
        setLocalStorage()
        const {employees, admin} = getLocalStorage()
        setUserData({employees, admin})
    }, [])
    
    // const data = getLocalStorage()
    // console.log(data.employee)
  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
