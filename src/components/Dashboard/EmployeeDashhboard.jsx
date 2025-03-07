import React from 'react'
import Header from '../other/Header'
import TaskListNos from '../other/TaskListNos'
import TaskList from '../TaskList/TaskList'

const EmployeeDashhboard = (props) => {
  // console.log({data})
  return (
    <div>
        <div className='p-10 bg-[#1c1c1c] h-screen'>
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNos data={props.data}/>
            <TaskList data={props.data}/>
        </div>
    </div>
  )
}

export default EmployeeDashhboard