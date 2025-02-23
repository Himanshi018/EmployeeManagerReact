import React from 'react'
import Header from '../other/Header'
import TaskListNos from '../other/TaskListNos'
import TaskList from '../TaskList/TaskList'

const EmployeeDashhboard = () => {
  return (
    <div>
        <div className='p-10 bg-[#1c1c1c] h-screen'>
            <Header/>
            <TaskListNos/>
            <TaskList/>
        </div>
    </div>
  )
}

export default EmployeeDashhboard