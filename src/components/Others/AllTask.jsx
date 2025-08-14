import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 h-72 '>
      <div className='flex flex-row justify-between bg-red-500 py-1 px-10 my-2 text-center font-semibold'>
      <h2 className='text-lg'>Names</h2>
      <h2 className='text-lg'>Active</h2>
      <h2 className='text-lg'>New Task</h2>
      <h2 className='text-lg'>Completed</h2>
      <h2 className='text-lg'>Failed</h2>
      </div>

      <div className='h-[80%] overflow-auto'>
      {authData.employees.map((e)=>(
        <div className='flex flex-row justify-between text-center border border-red-400  mb-2  py-1 px-10 rounded '>
        <h4 className='w-1/5 text-lg font-medium text-blue-400'>{e.name}</h4>
        <h4 className='w-1/5 text-lg font-medium text-yellow-400'>{e.taskStats.active}</h4>
        <h4 className='w-1/5 text-lg font-medium text-red-400'>{e.taskStats.newTask}</h4>
        <h4 className='w-1/5 text-lg font-medium text-cyan-400'>{e.taskStats.completed}</h4>
        <h4 className='w-1/5 text-lg font-medium text-violet-400'>{e.taskStats.failed}</h4>
        </div>
      )) 
    }
    </div>


    </div>
  )
}

export default AllTask
