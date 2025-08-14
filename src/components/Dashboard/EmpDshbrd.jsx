import React from 'react'
import Header from '../Others/Header'
import TaskList from '../Others/TaskList'
import Tasklist from '../Tasklist/Tasklist'

const EmpDshbrd = ({user}) => {
  // console.log(user)
  return (
    <div className='p-3 bg-[#1C1C1C] h-screen'>
        <Header name={user.name}/>
        <TaskList taskStats={user.taskStats}/>
        <Tasklist tasks={user.tasks}/>
      <div></div>
    </div>
  )
}

export default EmpDshbrd
