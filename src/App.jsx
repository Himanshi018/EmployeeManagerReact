import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashhboard from './components/Dashboard/EmployeeDashhboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUSer')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
    }
  },[])

  // console.log(user)
  // console.log(authData.employees)


  const handleLogin = (email, password) => {
    // console.log(email,password)
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      // console.log(user)
    }else if(authData){
      const employee = authData.employees.find((e) => email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee }))
      }
    }
    else{ 
      alert('Invalid credentials')
    }
  }

  const data = useContext(AuthContext)
  // console.log(data)
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashhboard changeUser={setUser} data={LoggedInUserData} /> : null)}
    </>
  )
}

export default App