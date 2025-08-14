import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({tasks}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto  flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10'>
      {/* <AcceptTask/>
      <NewTask/>
      <CompleteTask/>
      <FailedTask/> */}

      {tasks.map((t)=>{
        console.log('counting')
        if(t.completed)
          return <CompleteTask tasks={t}/>
        if(t.active)
          return <AcceptTask tasks={t}/>
        if(t.newTask)
          return <NewTask tasks={t}/>
        if(t.failed)
          return <FailedTask tasks={t}/>
      })}
    </div>
  )
}

export default Tasklist
