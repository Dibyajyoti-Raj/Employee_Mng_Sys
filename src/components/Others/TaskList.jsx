import React from 'react'

const TaskList = ({taskStats}) => {
  return (
    <div className='flex mt-10  justify-between gap-5'>
      <div className='rounded-xl w-[45%] bg-red-500 py-6 px-9'>
        <h2 className='text-3xl'>{taskStats.active}</h2>
        <h3 className='text-xl font-semibold'>Active</h3>
      </div>
      <div className='rounded-xl w-[45%] bg-blue-500 py-6 px-9'>
        <h2 className='text-3xl'>{taskStats.newTask}</h2>
        <h3 className='text-xl font-semibold'>New task</h3>
      </div>
      <div className='rounded-xl w-[45%] bg-yellow-500 py-6 px-9'>
        <h2 className='text-3xl'>{taskStats.completed}</h2>
        <h3 className='text-xl font-semibold'>Completed</h3>
      </div>
      <div className='rounded-xl w-[45%] bg-green-500 py-6 px-9'>
        <h2 className='text-3xl'>{taskStats.failed}</h2>
        <h3 className='text-xl font-semibold'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskList
