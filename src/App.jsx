import React, { useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashhboard from './components/Dashboard/EmployeeDashhboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password)=>{
    // console.log(email,password)
    if(email == 'admin@me.com' && password == '123'){
      console.log("This is admin")
    }
    else{
      alert('Invalid credentials')
    }
  }

  handleLogin('admin@me.com',123)

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // },)
  
  return (
    <>
    {!user ? <Login/> : ''}
    {/* <EmployeeDashhboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App